/**
 *  courses.js
 * @description: Contains all routes related to course functions.
 */
const router = require('express').Router();

/**
 *  [GET] /
 *  @description: Testing purposes
 */
router.get('/', (req, res) => {
  res.send('Getting list of courses');
});
/**
 *  [GET] /
 *  @description: Testing purposes
 */
router.get('/:id', (req, res) => {
  res.send('Getting a single course');
});
/**
 *  [POST] /
 *  @description: Testing purposes
 */
router.post('/', (req, res) => {
  res.send('Creating a course');
});
/**
 *  [DELETE] /
 *  @description: Testing purposes
 */
router.delete('/:id', (req, res) => {
  res.send('Deleting a course');
});
/**
 *  [PATCH] /
 *  @description: Testing purposes
 */
router.patch('/:id', (req, res) => {
  res.send('Updating a course');
});

module.exports = router;
