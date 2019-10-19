/* eslint-disable no-console */
require('dotenv/config');
const axios = require('axios');
const { sequelize } = require('../config/config');
const { Path, Course, Lesson } = require('../models');

const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/';

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
  // coefficients to convert a time unit to the next smaller time unit
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

/**
 * An object containing the manually created parts of lesson data
 * @typedef {Object} LessonData
 * @property {string} slug
 * @property {string} title
 * @property {string} description
 * @property {number} order
 * @property {number} [start] - optional
 * @property {number} [end] - optional
 * @property {string} video_id
 */

/**
 * Takes in some manually created lesson data and the id for the course this lesson
 * belongs to, constructs a new lesson object using this data and data gathered from the
 * YouTube API, and uses the Lesson data model to create a new table entry for this object
 * @param {LessonData} lesson_data the data for the lesson to be seeded
 * @param {string} course_id the uuid of the course this lesson belongs to
 * @returns an object with the data of the newly created/seeded lesson
 */
async function seedLesson(
  { slug, title, description, order, start, end, video_id },
  course_id,
) {
  // TODO: error handling/graceful failure
  const { data: youtube_data } = await axios.get(
    `${YOUTUBE_API_URL}videos?part=snippet,contentDetails&id=${video_id}&key=${process.env.GOOGLE_API_KEY}`,
  );
  const { snippet, contentDetails } = youtube_data.items[0];
  const { dataValues: new_lesson } = await Lesson.create({
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
  });
  console.log(`Seeded lesson '${new_lesson.title}'`);
  return new_lesson;
}

/**
 * An object containing the manually created parts of course data
 * @typedef {Object} CourseData
 * @property {string} slug
 * @property {string} title
 * @property {string} description
 * @property {string} image_name
 * @property {number} order
 * @property {LessonData[]} lessons
 */

/**
 * Takes in some manually created course data and the id for the path this course
 * belongs to, constructs a new course object using this data, and uses the Course
 * data model to create a new table entry for this object
 * @param {CourseData} course_data the data for the course to be seeded
 * @param {string} path_id the uuid of the path this course belongs to
 * @returns an object with the data of the newly created/seeded course
 */
async function seedCourse({ slug, title, description, image_name, order }, path_id) {
  // TODO: error handling/graceful failure
  const { dataValues: new_course } = await Course.create({
    slug,
    title: title || 'Course Title',
    description,
    image_name,
    order,
    pathUuid: path_id,
  });
  console.log(`Seeded course '${new_course.title}'`);
  return new_course;
}

/**
 * An object containing the manually created parts of path data
 * @typedef {Object} PathData
 * @property {string} title
 * @property {string} subtitle
 * @property {string} image_name
 * @property {CourseData[]} courses
 */

/**
 * Takes in some manually created path data, constructs a new path object using this
 * data, and uses the Path data model to create a new table entry for this object
 * @param {PathData} path_data the data for the path to be seeded
 * @returns an object with the data of the newly created/seeded path
 */
async function seedPath({ title, subtitle, image_name }) {
  // TODO: error handling/graceful failure
  const { dataValues: new_path } = await Path.create({
    title: title || 'Path Title',
    subtitle,
    image_name,
  });
  console.log(`Seeded path '${new_path.title}'`);
  return new_path;
}

/**
 * Takes in an array of paths, each of which should contain all of the nested related data,
 * and seeds all parts of it into the respective tables with correct relations
 * @param {PathData[]} seed_data the data to be seeded, should be in the form of an array
 *            of path objects, each of which contain the nested related course objects,
 *            which each in turn contain the nested related lesson objects
 */
async function seed(seed_data) {
  console.log('Seeding...');
  await sequelize.sync({ force: true });
  console.log('Tables reset and synced');

  // creates arrays of functions that return promises that can be called at the correct
  // time/order later, to ensure that all of the paths get seeded before all of the
  // courses, and all of the courses get seeded before all of the lessons while still
  // enabling the lessons to have access to the correct course ids and courses the path ids
  const course_funcs = [];
  const lesson_funcs = [];
  const path_funcs = [];
  // set up each path seed to be triggered later
  seed_data.forEach(path => {
    path_funcs.push(async () => {
      const { uuid: path_id } = await seedPath(path);
      // set up each course seed with the correct path id, to be triggered later
      path.courses.forEach(course => {
        course_funcs.push(async () => {
          const { uuid: course_id } = await seedCourse(course, path_id);
          // set up each lesson seed with the correct course id, to be triggered later
          course.lessons.forEach(lesson => {
            lesson_funcs.push(() => seedLesson(lesson, course_id));
          });
        });
      });
    });
  });
  // TODO: error handling/graceful failure
  // map actually triggers the functions to start resolving
  await Promise.all(path_funcs.map(func => func()));
  console.log('Finished seeding all paths');
  await Promise.all(course_funcs.map(func => func()));
  console.log('Finished seeding all courses');
  await Promise.all(lesson_funcs.map(func => func()));
  console.log('Finished seeding all lessons');
  console.log('Seeding completed.');
}

module.exports = { seed, seedLesson, seedCourse, seedPath };
