const { Path, Course, Lesson } = require('../models');
const ErrorWithHttpStatus = require('../utils/error.httpStatus.utils');

/**
 * Generic version of "getById" for internal use. Does no error handling or checking.
 * @param {Model} model the sequelize model to use
 * @param {string} uuid the uuid of the element to get
 * @returns {Promise<Model>} the found object, if there is one
 */
const getElementById = async (model, uuid) => {
  const data = await model.findAll({ where: { uuid } });
  return data[0].dataValues;
};

/**
 * Generic version of "getByRelatedId" for internal use. Does no error handling or checking.
 * @param {Model} model the sequelize model to use
 * @param {string} container_uuid the uuid of the containing/related model
 * @param {string} container_name the name of the containing/related model in the foreign key column name
 * @returns {Promise<Model[]>} an array of found model objects
 */
const getElementsByContainerId = async (model, container_uuid, container_name) => {
  const data = await model.findAll({
    where: { [`${container_name}Uuid`]: container_uuid },
  });
  return data.map(element_response => element_response.dataValues);
};

/**
 * Reusable helper function to get all of the nested data for a given course.
 * @param {string} course_id the uuid of the desired course
 * @param {CourseData} [given_course_data] the data for the course, if you already have it
 * @returns {Promise<CourseData>} the full nested data for the requested course
 * @throws {ErrorWithHttpStatus} errors if things aren't found
 */
const getNestedCourse_Helper = async (course_id, given_course_data = undefined) => {
  const course_data = given_course_data
    ? { ...given_course_data }
    : await getElementById(Course, course_id);
  if (!course_data) {
    throw new ErrorWithHttpStatus('No course found with given id', 404);
  }
  const all_lessons_data = await getElementsByContainerId(Lesson, course_id, 'course');
  if (!all_lessons_data || all_lessons_data.length === 0) {
    throw new ErrorWithHttpStatus(
      'No lessons found corresponding to the given course id',
      404,
    );
  }
  course_data.lessons = all_lessons_data;
  return course_data;
};

/**
 * Reusable helper function to get all of the nested data for a given path.
 * @param {string} path_id the uuid of the desired path
 * @param {PathData} [given_path_data] the data for the path, if you already have it
 * @returns {Promise<PathData>} the full nested data for the requested path
 * @throws {ErrorWithHttpStatus} errors if things aren't found
 */
const getNestedPath_Helper = async (path_id, given_path_data) => {
  const path_data = given_path_data
    ? { ...given_path_data }
    : await getElementById(Path, path_id);
  if (!path_data) {
    throw new ErrorWithHttpStatus('No path found with given id', 404);
  }
  const all_courses_data = await getElementsByContainerId(Course, path_id, 'path');
  if (!all_courses_data || all_courses_data.length === 0) {
    throw new ErrorWithHttpStatus(
      'No courses found corresponding to the given path id',
      404,
    );
  }
  const course_promises = all_courses_data.map(
    // prettier-ignore
    course_data => getNestedCourse_Helper(course_data.uuid, course_data),
  );
  const nested_courses = await Promise.all(course_promises);
  path_data.courses = nested_courses;
  return path_data;
};

// =================================================================
// =================================================================
// actual public control functions

exports.getAllNestedPaths = (request, response, next) => {
  Path.findAll()
    .then(data => data.map(path_data => path_data.dataValues))
    .then(all_paths_data => {
      const path_promises = all_paths_data.map(
        // prettier-ignore
        path_data => getNestedPath_Helper(path_data.uuid, path_data),
      );
      return Promise.all(path_promises);
    })
    .then(nested_paths => {
      response.status(200).send(nested_paths);
    })
    .catch(next);
};

// getting all courses not nested inside paths for use on the Catalog page
exports.getAllNestedCourses = (request, response, next) => {
  Course.findAll()
    .then(data => data.map(course_data => course_data.dataValues))
    .then(all_courses_data => {
      const course_promises = all_courses_data.map(
        // prettier-ignore
        course_data => getNestedCourse_Helper(course_data.uuid, course_data),
      );
      return Promise.all(course_promises);
    })
    .then(nested_courses => {
      response.status(200).send(nested_courses);
    })
    .catch(next);
};

exports.getNestedPathById = (request, response, next) => {
  getNestedPath_Helper(request.params.id)
    .then(path_data => {
      response.status(200).send(path_data);
    })
    .catch(next);
};

exports.getNestedCourseById = (request, response, next) => {
  getNestedCourse_Helper(request.params.id)
    .then(course_data => {
      response.status(200).send(course_data);
    })
    .catch(next);
};
