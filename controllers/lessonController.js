const { Lesson } = require('../models');
const { transformLesson } = require('../utils/transformers');
const ErrorWithHttpStatus = require('../utils/error.httpStatus.utils');

// =================================================================
// =================================================================
// GET requests

exports.getLessons = (request, response, next) => {
  Lesson.findAll({ where: request.query })
    .then(data => {
      if (!data || data.length === 0) {
        throw new ErrorWithHttpStatus('No lessons found matching query', 404);
      }
      response.status(200).send(data);
    })
    .catch(next);
};

exports.getLessonById = (request, response, next) => {
  Lesson.findAll({ where: { uuid: request.params.id } })
    .then(data => {
      if (!data || data.length === 0) {
        throw new ErrorWithHttpStatus('No lesson found matching id', 404);
      }
      response.status(200).send(data[0]);
    })
    .catch(next);
};

exports.getLessonByCourseId = (request, response, next) => {
  // TODO: maybe check if it's even a valid course id first?
  Lesson.findAll({ where: { courseUuid: request.params.id } })
    .then(data => {
      if (!data || data.length === 0) {
        throw new ErrorWithHttpStatus('No lessons found related to given course', 404);
      }
      response.status(200).send(data);
    })
    .catch(next);
};

// =================================================================
// =================================================================
// POST requests

exports.createLesson = async (request, response, next) => {
  if (!Object.keys(request.body).length) {
    throw new ErrorWithHttpStatus('No body provided', 400);
  }
  Lesson.create(await transformLesson(request.body, request.body.courseUuid))
    .then(data => {
      response.status(201).send(data);
    })
    .catch(next);
};

// =================================================================
// =================================================================
// PATCH requests

exports.updateLesson = (request, response, next) => {
  if (!Object.keys(request.body).length) {
    throw new ErrorWithHttpStatus('No body provided', 400);
  }
  if (request.body.uuid !== undefined) {
    throw new ErrorWithHttpStatus('Cannot change lesson uuid', 403);
  }
  Lesson.update(request.body, { returning: true, where: { uuid: request.params.id } })
    .then(data => {
      if (!data || data[0] === 0 || !data[1] || data[1].length === 0) {
        throw new ErrorWithHttpStatus('No lessons updated', 400);
      }
      // returns updated object
      response.status(200).send(data[1][0]);
    })
    .catch(next);
};

// =================================================================
// =================================================================
// DELETE requests

exports.deleteLesson = (request, response, next) => {
  Lesson.destroy({ where: { uuid: request.params.id } })
    .then(() => {
      response.status(200).send(`Lesson ${request.params.id} deleted.`);
    })
    .catch(next);
};
