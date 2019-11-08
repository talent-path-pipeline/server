require('dotenv/config');
const axios = require('axios');
const { YOUTUBE_API_URL, parseDuration } = require('./transformers');

const LESSONS_API_LINK = 'https://stonehaven-server-staging.herokuapp.com/api/lessons';
const DURATION_ONLY = 'part=contentDetails&fields=items/contentDetails/duration';

const correctLessonLength = async (lesson_uuid, api_link = LESSONS_API_LINK) => {
  const { data: lesson_data } = await axios.get(`${api_link}/${lesson_uuid}`);
  const { video_id, length, start, end } = lesson_data;
  const adj_start = start === undefined || start < 0 ? 0 : start;
  if (length === end - adj_start) return lesson_data;
  let corrected_length;
  if (end !== undefined && end > 0) {
    corrected_length = end - adj_start;
  } else {
    // confusing but functional way to destructure all the way down to duration all at once:
    // const { data: { items: [ { contentDetails: { duration } } ] } }
    const {
      data: { items },
    } = await axios.get(
      `${YOUTUBE_API_URL}videos?${DURATION_ONLY}&id=${video_id}&key=${process.env.GOOGLE_API_KEY}`,
    );
    const {
      contentDetails: { duration },
    } = items[0];
    corrected_length = parseDuration(duration);
  }
  const { data: updated_lesson } = await axios.patch(`${api_link}/${lesson_uuid}`, {
    length: corrected_length,
  });
  // eslint-disable-next-line no-console
  console.log(
    `Corrected lesson '${updated_lesson.title}' length: ${length} => ${updated_lesson.length}`,
  );
  return updated_lesson;
};

const correctAllLessonLengths = async (api_link = LESSONS_API_LINK) => {
  const { data: lessons } = await axios.get(api_link);
  lessons.forEach(lesson => {
    correctLessonLength(lesson.uuid, api_link);
  });
};

// correctLessonLength('01644599-c275-4a94-8695-eaa9887786a6');
correctAllLessonLengths();

module.exports = { correctLessonLength, correctAllLessonLengths };
