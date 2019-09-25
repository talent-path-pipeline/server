const { Lesson } = require('../models/index');
const ErrorWithHttpStatus = require('../utils/error.httpStatus.utils');

exports.addLesson = (req, res) => {
  Lesson
    .create(req.body)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(400).send(err);
    });
}

exports.getLessons = (req, res) => {
  Lesson
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

exports.getLessonById = (req, res) => {
  Lesson
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

exports.deleteLesson = (req, res) => {
  Lesson
    .destroy({
      where: {
        uuid: req.params.id,
      },
    })
    .then(() => {
      res.send('Lesson deleted')
    })
    .catch(err => {
      res.status(400).send(err);
    })
}

exports.updateLesson = (req, res) => {
  if (!Object.keys(req.body).length) throw new ErrorWithHttpStatus('No body provided', 404);

  Lesson
    .update(req.body, {
      where: {
        uuid: req.params.id,
      },
    })
    .then(data => {
      const msg = data && data[0] ? 'Lesson updated' : 'No lessons updated';
      res.status(200).send(msg);
    })
    .catch(err => {
      res.status(400).send(err);
    })
}
