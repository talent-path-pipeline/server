const router = require('express').Router();
// const controller = require('../controller');

// const db = require('../db');

// const router = new Router();

// router.get('/:id', async (req, res) => {
//   const { id } = req.params;
//   const { rows } = await db.query('SELECT * FROM users WHERE id =$1', [id]);
//   res.send(rows[0]);
// });

router.get('/api/users/', (req, res) => {
  res.send('Getting all users');
});

router.get('/api/users/:id', (req, res) => {
  res.send('Getting a single user');
});

router.post('/api/users/', (req, res) => {
  res.send('Creating a user');
});

router.delete('/api/users/:id', (req, res) => {
  res.send('Deleteing a user');
});

router.patch('/api/users/:id', (req, res) => {
  res.send('Updating a user');
});

module.exports = router;
