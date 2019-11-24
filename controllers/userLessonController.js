const { UserLesson } = require('../models');
const ErrorWithHttpStatus = require('../utils/error.httpStatus.utils');

// =================================================================
// =================================================================
// GET requests
exports.getUserLessonById = (request, response, next) => {
  UserLesson.findAll({ where: { uuid: request.params.id } })
    .then(data => {
      if (!data || data.length === 0) {
        throw new ErrorWithHttpStatus('No entries found matching id', 404);
      }
      response.status(200).send(data[0]);
    })
    .catch(next);
};

/* get UserLesson by Lesson and User uuids */
exports.getUserLessonByLessonAndUserIds = (request, response, next) => {
  UserLesson.findAll({ where: { userUuid: request.params.userId, lessonUuid: request.params.lessonId } })
    .then(data => {
      // if (!data || data.length === 0) {
      //   throw new ErrorWithHttpStatus('No entries found matching id', 404);
      // }
      response.status(200).send(data);
    })
    .catch(next);
};

exports.getUserLessonsByUserId = (request, response, next) => {
  UserLesson.findAll({ where: { userUuid: request.params.userId } })
    .then(data => {
      if (!data || data.length === 0) {
        throw new ErrorWithHttpStatus('No entries found matching id', 404);
      }
      response.status(200).send(data);
    })
    .catch(next);
};

// =================================================================
// =================================================================
// POST requests

exports.createUserLesson = (request, response, next) => {
  if (!request.body.lessonUuid || !request.body.userUuid) {
    throw new ErrorWithHttpStatus('Request body must have lessonUuid and userUuid', 400);
  }
  UserLesson.create(request.body)
    .then(data => {
      response.status(201).send(data);
    })
    .catch(next);
};


// =================================================================
// =================================================================
// PATCH requests

exports.updateUserLesson = (request, response, next) => {
  if (!Object.keys(request.body).length) {
    throw new ErrorWithHttpStatus('No body provided', 400);
  }
  if (request.body.uuid !== undefined) {
    throw new ErrorWithHttpStatus('Cannot change UserLesson uuid', 403);
  }
  UserLesson.update(request.body, { returning: true, where: { uuid: request.params.id } })
    .then(data => {
      if (!data || data[0] === 0 || !data[1] || data[1].length === 0) {
        throw new ErrorWithHttpStatus('No UserLessons updated', 400);
      }
      // returns updated object
      response.status(200).send(data[1][0]);
    })
    .catch(next);
};

// =================================================================
// =================================================================
// DELETE requests

exports.deleteUserLesson = (request, response, next) => {
  UserLesson.destroy({ where: { uuid: request.params.id } })
    .then(() => {
      response.status(200).send(`UserLesson ${request.params.id} deleted.`);
    })
    .catch(next);
};