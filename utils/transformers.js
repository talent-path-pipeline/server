require('dotenv/config');
const axios = require('axios');

/**
 * Takes in a string in the YouTube ISO-8601 duration format and parses it into a single
 * integer representing the total number of seconds for the duration
 * @param {string} duration the YouTube string format for duration to be parsed
 * @returns {number} the total number of seconds
 */
function parseDuration(duration) {
  // YouTube uses a slightly modified ISO-8601 duration format
  // (PnYnMnWnDTnHnMnS) which includes weeks along with the normal other units
  const numbers = '\\d+(?:[\\.,]\\d+)?';
  const period_pattern = `P(?<years>${numbers}Y)?(?<months>${numbers}M)?(?<weeks>${numbers}W)?(?<days>${numbers}D)?`;
  const time_pattern = `T(?<hours>${numbers}H)?(?<minutes>${numbers}M)?(?<seconds>${numbers}S)?`;
  const iso8601 = new RegExp(`${period_pattern}${time_pattern}`);
  const { groups } = duration.match(iso8601);
  // coefficients to convert a time unit to the next smaller time unit down to a minimum of seconds
  const reduce_unit_coeffs = {
    years: 12,
    months: 4,
    weeks: 7,
    days: 24,
    hours: 60,
    minutes: 60,
    seconds: 1,
  };
  // Each step of this reduce takes the total number of the current time units
  // and converts it to the next smaller time unit. Since the smallest unit is seconds,
  // the end result will be the total number of seconds all together.
  return Object.keys(groups).reduce((curr_unit_total, time_unit) => {
    let num = 0;
    if (groups[time_unit] !== undefined) {
      // removes the unit character from the end and parses
      num = parseInt(groups[time_unit].slice(0, -1), 10);
    }
    return (curr_unit_total + num) * reduce_unit_coeffs[time_unit];
  }, 0);
}

const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/';

/**
 * Takes in some manually created lesson data and the id for the course this lesson
 * belongs to and constructs/transforms a new lesson object using this data and data
 * gathered from the YouTube API
 * @param {LessonData} lesson_data the data for the lesson to be seeded
 * @param {string} course_id the uuid of the course this lesson belongs to
 * @returns an object with the full transformed data of the lesson
 */
async function transformLesson(
  { slug, title, description, order, start, end, video_id },
  course_id,
) {
  // TODO: error handling/graceful failure
  const { data: youtube_data } = await axios.get(
    `${YOUTUBE_API_URL}videos?part=snippet,contentDetails&id=${video_id}&key=${process.env.GOOGLE_API_KEY}`,
  );
  const { snippet, contentDetails } = youtube_data.items[0];
  const new_lesson = {
    slug,
    title,
    description,
    order,
    start,
    end,
    video_id,
    length:
      start !== undefined && end !== undefined
        ? end - start
        : parseDuration(contentDetails.duration),
    video_title: snippet.title,
    video_description: snippet.description,
    channel_id: snippet.channelId,
    channel_name: snippet.channelTitle,
    courseUuid: course_id,
  };
  return new_lesson;
}

module.exports = { parseDuration, transformLesson };
