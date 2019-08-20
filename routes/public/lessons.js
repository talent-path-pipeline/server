/**
 *  lessons.js
 * @description: Contains all routes related to lesson functions.
 * @author: Kevin B.
 */
const router = require('express').Router();

/**
 *  [GET] /
 *  @description: Testing purposes
 */
router.get('/', (req, res) => {
  res.send('Getting list of lessons');
});

/**
 *  [GET] /:id
 *  @description: Testing purposes
 */
router.get('/:id', (req, res) => {
  res.send('Getting a single lesson');
});

/**
 *  [POST] /
 *  @description: Testing purposes
 */
router.post('/', (req, res) => {
  res.send('Creating a lesson');
});

/**
 *  [DELETE] /:id
 *  @description: Testing purposes
 */
router.delete('/:id', (req, res) => {
  res.send('Deleting a lesson');
});

/**
 *  [PATCH] /:id
 *  @description: Testing purposes
 */
router.patch('/:id', (req, res) => {
  res.send('Updating a lesson');
});

module.exports = router;
