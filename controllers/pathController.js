const { Path } = require('../models');
const ErrorWithHttpStatus = require('../utils/error.httpStatus.utils');

// =================================================================
// =================================================================
// GET requests

exports.getPaths = (request, response, next) => {
  Path.findAll({ where: request.query })
    .then(data => {
      if (!data || data.length === 0) {
        throw new ErrorWithHttpStatus('No paths found matching query', 404);
      }
      response.status(200).send(data);
    })
    .catch(next);
};

exports.getPathById = (request, response, next) => {
  Path.findAll({ where: { uuid: request.params.id } })
    .then(data => {
      if (!data || data.length === 0) {
        throw new ErrorWithHttpStatus('No path found matching id', 404);
      }
      response.status(200).send(data[0]);
    })
    .catch(next);
};

// =================================================================
// =================================================================
// POST requests

exports.createPath = (request, response, next) => {
  Path.create(request.body)
    .then(data => {
      response.status(201).send(data);
    })
    .catch(next);
};

// =================================================================
// =================================================================
// PATCH requests

exports.updatePath = (request, response, next) => {
  if (!Object.keys(request.body).length) {
    throw new ErrorWithHttpStatus('No body provided', 400);
  }
  if (request.body.uuid !== undefined) {
    throw new ErrorWithHttpStatus('Cannot change path uuid', 403);
  }
  Path.update(request.body, { returning: true, where: { uuid: request.params.id } })
    .then(data => {
      if (!data || data[0] === 0 || !data[1] || data[1].length === 0) {
        throw new ErrorWithHttpStatus('No paths updated', 400);
      }
      // returns updated object
      response.status(200).send(data[1][0]);
    })
    .catch(next);
};

// =================================================================
// =================================================================
// DELETE requests

exports.deletePath = (request, response, next) => {
  Path.destroy({ where: { uuid: request.params.id } })
    .then(() => {
      response.status(200).send(`Path ${request.params.id} deleted.`);
    })
    .catch(next);
};
