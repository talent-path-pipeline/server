// const { Lesson } =require( '../routes/index');
const { Lesson } = require('../models/index');

exports.addLesson = (req, res) => {
  // const { courseName, description, pathName, title, instructorID, videoURL } = req.body;
  Lesson.create(req.body)
    .then(() => {
      res.send('data saved');
    })
    .catch(err => {
      res.send(err);
    });
}

exports.getLessons = (req, res) => {
  Lesson.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    })
}

exports.getLessonById = (req, res) => {
  Lesson.findAll({
    where: {
      uuid: req.params.id,
    },
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
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
      res.send(err);
    })
}

exports.updateLesson = (req, res) => {
  Lesson.update(req.body, {
    where: {
      uuid: req.params.id,
    },
  })
    .then(() => {
      res.send('Lesson updated');
    })
    .catch(err => {
      res.send(err)
    })
}
