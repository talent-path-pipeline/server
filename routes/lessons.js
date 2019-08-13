const router = require('express').Router();

router.get('/api/lessons/', (req, res) => {
  res.send('Getting list of lessons');
});

router.get('/api/lessons/:id', (req, res) => {
  res.send('Getting a single lesson');
});

router.post('/api/lessons/', (req, res) => {
  res.send('Creating a lesson');
});

router.delete('/api/lessons/:id', (req, res) => {
  res.send('Deleting a lesson');
});

router.patch('/api/lessons/:id', (req, res) => {
  res.send('Updating a lesson');
});

module.exports = router;
