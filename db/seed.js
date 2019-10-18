/* eslint-disable no-console */
require('dotenv/config');
const axios = require('axios');
const { sequelize } = require('../config/config');
const { Path, Course, Lesson } = require('../models');
const DM_PATH = require('./DM_PATH_PLAN');
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/';

/**
 * Takes in a string in the YouTube duration format and parses it into a single
 * integer representing the total number of seconds for the duration
 * @param {string} duration the YouTube string format for duration to be parsed
 */
function parseDuration(duration) {
  const time = 0;
  // TODO: parser
  return time;
}

/**
 * An object containing the manually created parts of lesson data
 * @typedef {Object} LessonData
 * @property {string} title
 * @property {string} description
 * @property {number} order
 * @property {number} start - optional
 * @property {number} end - optional
 * @property {string} video_id
 */

/**
 * TODO: documentation
 * @param {LessonData} lesson_data the data for the lesson to be seeded
 * @param {string} course_id the uuid of the course this lesson belongs to
 * @returns an object with the data of the newly created/seeded lesson
 */
async function seedLesson(
  { title, description, order, start, end, video_id },
  course_id,
) {
  const youtube_data = await axios.get(
    `${YOUTUBE_API_URL}videos?part=snippet,contentDetails&id=${video_id}&key=${process.env.GOOGLE_API_KEY}`,
  );
  const { snippet, contentDetails } = youtube_data.items[0];
  const { dataValues: new_lesson } = await Course.create({
    title: title || 'Course Title',
    description,
    order,
    start,
    end,
    length: start && end ? end - start : parseDuration(contentDetails.duration),
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
 */

/**
 * TODO: documentation
 * @param {CourseData} course_data the data for the course to be seeded
 * @param {string} path_id the uuid of the path this course belongs to
 * @returns an object with the data of the newly created/seeded course
 */
async function seedCourse({ slug, title, description, image_name, order }, path_id) {
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
 */

/**
 * TODO: documentation
 * @param {PathData} path_data the data for the path to be seeded
 * @returns an object with the data of the newly created/seeded path
 */
async function seedPath({ title, subtitle, image_name }) {
  const { dataValues: new_path } = await Path.create({
    title: title || 'Path Title',
    subtitle,
    image_name,
  });
  console.log(`Seeded path '${new_path.title}'`);
  return new_path;
}

// TODO: documentation
async function seed(seed_data) {
  console.log('Seeding...');
  await sequelize.sync({ force: true });
  console.log('Tables reset and synced');
  const { uuid: path_id } = await seedPath(seed_data);
  const lesson_promises = [];
  // creates a promise array to ensure that all the courses get seeded before lessons
  // while still enabling the lessons to have access to the correct course id
  const course_promises = seed_data.courses.map(
    course =>
      // eslint-disable-next-line implicit-arrow-linebreak
      new Promise(async (resolve, reject) => {
        try {
          const { uuid: course_id } = await seedCourse(course, path_id);
          course.lessons.forEach(lesson => {
            lesson_promises.push(seedLesson(lesson, course_id));
          });
          resolve(course_id);
        } catch (err) {
          reject(err);
        }
      }),
  );
  await Promise.all(course_promises);
  await Promise.all(lesson_promises);
  console.log('Seeding completed.');
}

seed(DM_PATH);

module.exports = { seed, seedLesson, seedCourse, seedPath };
