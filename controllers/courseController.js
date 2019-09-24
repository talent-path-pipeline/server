const { Course } = require('../models/index');

exports.addCourse = (req, res) => {
  Course.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
}

exports.getCourses = (req, res) => {
  Course.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    })
}

exports.getCourseById = (req, res) => {
  Course.findAll({
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

exports.deleteCourse = (req, res) => {
  Course.destroy({
    where: {
      uuid: req.params.id,
    },
  })
    .then(() => {
      res.send('Course deleted')
    })
    .catch(err => {
      res.send(err);
    })
}

exports.updateCourse = (req, res) => {
  Course.update(req.body, {
    where: {
      uuid: req.params.id,
    },
  })
    .then(() => {
      res.send('Course updated');
    })
    .catch(err => {
      res.send(err)
    })
}
