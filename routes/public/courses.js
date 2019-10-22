/**
 *  courses.js
 * @description: Contains all routes related to course functions.
 */
const router = require('express').Router();
const courseController = require('../../controllers/courseController');

/**
 *  [GET] /
 *  @description: Get all courses
 */
router.get('/', courseController.getCourses);

/**
 *  [GET] /:id
 *  @description: Get course by id
 */
router.get('/:id', courseController.getCourseById);

/**
 *  [GET] /path/:id
 *  @description: Get course by path id
 */
router.get('/path/:id', courseController.getCourseByPathId);

/**
 *  [POST] /
 *  @description: Add new course
 *  Field: courseName
 */
router.post('/', courseController.createCourse);

/**
 *  [DELETE] /
 *  @description: Delete course
 */
router.delete('/:id', courseController.deleteCourse);

/**
 *  [PATCH] /
 *  @description: Update course
 */
router.patch('/:id', courseController.updateCourse);

module.exports = router;
