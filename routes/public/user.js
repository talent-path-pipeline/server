/**
 *  user.js
 * @description: Contains all routes related to user functions.
 */
const router = require('express').Router();
const user = require('../../controller/user');

/**
 *  [GET] /
 *  @description: Testing purposes
 */
router.get('/', (req, res) => {
  res.send('You are getting ALL users!');
});

/**
 *  [GET] /:id
 *  @description: Testing purposes
 */
router.get('/:id', (req, res) => {
  res.send('You are getting a user by ID!');
});

/**
 *  [POST] /
 *  @description: Testing purposes
 */
router.post('/', user.register);

/**
 *  [POST] /login
 *  @description: Testing purposes
 */
router.post('/login', user.login);

/**
 *  [DELETE] /:id
 *  @description: Testing purposes
 */
router.delete('/:id', (req, res) => {
  res.send('Deleting a user');
});

/**
 *  [PATCH] /:id
 *  @description: Testing purposes
 */
router.patch('/:id', (req, res) => {
  res.send('Updating a user');
});

module.exports = router;
