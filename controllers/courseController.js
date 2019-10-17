const { Course } = require('../models/index');
const ErrorWithHttpStatus = require('../utils/error.httpStatus.utils');

exports.addCourse = (req, res) => {
  Course
    .create(req.body)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(400).send(err);
    });
}

exports.getCourses = (req, res) => {
  Course
    .findAll({
      where: req.query,
    })
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(400).send(err);
    })
}

exports.getCourseById = (req, res) => {
  Course
    .findAll({
      where: {
        uuid: req.params.id,
      },
    })
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(400).send(err);
    })
}

exports.deleteCourse = (req, res) => {
  Course
    .destroy({
      where: {
        uuid: req.params.id,
      },
    })
    .then(() => {
      res.send('Course deleted')
    })
    .catch(err => {
      res.status(400).send(err);
    })
}

exports.updateCourse = (req, res) => {
  if (!Object.keys(req.body).length) throw new ErrorWithHttpStatus('No body provided', 404);

  Course
    .update(req.body, {
      where: {
        uuid: req.params.id,
      },
    })
    .then(data => {
      const msg = data && data[0] ? 'Course updated' : 'No courses updated';
      res.status(200).send(msg);
    })
    .catch(err => {
      res.status(400).send(err);
    })
}
