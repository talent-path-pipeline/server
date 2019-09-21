// const { Lesson } =require( '../routes/index');
const { Lesson } = require('../models/index');

exports.addLesson = (req,res) => {
  // const { courseName, description, pathName, title, instructorID, videoURL } = req.body;
  Lesson.create(req.body)
    .then(() => {
      res.send('data saved');
    })
    .catch(err => {
      res.send(err);
    })
  // res.send('got POST request')
}
