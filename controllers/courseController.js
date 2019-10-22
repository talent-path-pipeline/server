const { Course } = require('../models');
const ErrorWithHttpStatus = require('../utils/error.httpStatus.utils');

// =================================================================
// =================================================================
// GET requests

exports.getCourses = (request, response, next) => {
  Course.findAll({ where: request.query })
    .then(data => {
      if (!data || data.length === 0) {
        throw new ErrorWithHttpStatus('No courses found matching query', 404);
      }
      response.status(200).send(data);
    })
    .catch(next);
};

exports.getCourseById = (request, response, next) => {
  Course.findAll({ where: { uuid: request.params.id } })
    .then(data => {
      if (!data || data.length === 0) {
        throw new ErrorWithHttpStatus('No course found matching id', 404);
      }
      response.status(200).send(data[0]);
    })
    .catch(next);
};

exports.getCourseByPathId = (request, response, next) => {
  // TODO: maybe check if it's even a valid path id first?
  Course.findAll({ where: { pathUuid: request.params.id } })
    .then(data => {
      if (!data || data.length === 0) {
        throw new ErrorWithHttpStatus('No courses found related to given path', 404);
      }
      response.status(200).send(data);
    })
    .catch(next);
};

// =================================================================
// =================================================================
// POST requests

exports.createCourse = (request, response, next) => {
  Course.create(request.body)
    .then(data => {
      response.status(201).send(data);
    })
    .catch(next);
};

// =================================================================
// =================================================================
// PATCH requests

exports.updateCourse = (request, response, next) => {
  if (!Object.keys(request.body).length) {
    throw new ErrorWithHttpStatus('No body provided', 400);
  }
  if (request.body.uuid !== undefined) {
    throw new ErrorWithHttpStatus('Cannot change course uuid', 403);
  }
  Course.update(request.body, { returning: true, where: { uuid: request.params.id } })
    .then(data => {
      if (!data || data[0] === 0 || !data[1] || data[1].length === 0) {
        throw new ErrorWithHttpStatus('No courses updated', 400);
      }
      // returns updated object
      response.status(200).send(data[1][0]);
    })
    .catch(next);
};

// =================================================================
// =================================================================
// DELETE requests

exports.deleteCourse = (request, response, next) => {
  Course.destroy({ where: { uuid: request.params.id } })
    .then(() => {
      response.status(200).send(`Course ${request.params.id} deleted.`);
    })
    .catch(next);
};
