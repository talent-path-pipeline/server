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
 *  [GET] /
 *  @description: Get course by id
 */
router.get('/:id',courseController.getCourseById);

/**
 *  [POST] /
 *  @description: Add new course
 *  Field: courseName
 */
router.post('/', courseController.addCourse);

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
