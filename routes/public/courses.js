/**
 *  courses.js
 * @description: Contains all routes related to course functions.
 */
const router = require('express').Router();
const courseController = require('../../controllers/courseController');

/**
 *  [GET] /
 *  @description: Testing purposes
 */
router.get('/', courseController.getCourses);
/**
 *  [GET] /
 *  @description: Testing purposes
 */
router.get('/:id',courseController.getCourseById);
/**
 *  [POST] /
 *  @description: Testing purposes
 */
router.post('/', courseController.addCourse);
/**
 *  [DELETE] /
 *  @description: Testing purposes
 */
router.delete('/:id', courseController.deleteCourse);
/**
 *  [PATCH] /
 *  @description: Testing purposes
 */
router.patch('/:id', courseController.updateCourse);

module.exports = router;
