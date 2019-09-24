const { Lesson } = require('../models/index');

exports.addLesson = (req, res) => {
  Lesson.create(req.body)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(400).send(err);
    });
}

exports.getLessons = (req, res) => {
  Lesson.findAll()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(400).send(err);
    })
}

exports.getLessonById = (req, res) => {
  Lesson.findAll({
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
  Lesson.destroy({
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
  if (!Object.keys(req.body).length) throw new Error('No body provided');

  Lesson.update(req.body, {
    where: {
      uuid: req.params.id,
    },
  })
    .then(() => res.status(200).send('Lesson updated'))
    .catch(err => {
      res.status(400).send(err);
    })
}
