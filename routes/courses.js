const router = require('express').Router();

router.get('/api/courses/', (req, res) => {
  res.send('Getting list of courses');
});

router.get('/api/courses/:id', (req, res) => {
  res.send('Getting a single course');
});

router.post('/api/courses/', (req, res) => {
  res.send('Creating a course');
});

router.delete('/api/courses/:id', (req, res) => {
  res.send('Deleting a course');
});

router.patch('/api/courses/:id', (req, res) => {
  res.send('Updating a course');
});

module.exports = router;
