const router = require('express').Router();
const { addLesson } = require('../../controller/lessonController')
/**
 *  lessons.js
 * @description: Contains all routes related to lesson functions.
 * @author: Kevin B.
 */

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
router.post('/', addLesson
// (req, res) => {
//   res.send('Creating a lesson');
// }
);

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
