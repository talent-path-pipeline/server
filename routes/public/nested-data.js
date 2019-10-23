/**
 *  nested-data.js
 * @description: Contains all routes related to getting fully nested data representation objects
 */
const router = require('express').Router();
const dataController = require('../../controllers/nested-data');

/**
 *  [GET] /
 *  @description: Get all nested data
 */
router.get('/', dataController.getAllNestedPaths);

/**
 *  [GET] /:id
 *  @description: Get nested path by id
 */
router.get('/:id', dataController.getNestedPathById);

/**
 *  [GET] /course/all
 *  @description: Get all nested course data
 */
router.get('/course/all', dataController.getAllNestedCourses);

/**
 *  [GET] /course/:id
 *  @description: Get nested course data by id
 */
router.get('/course/:id', dataController.getNestedCourseById);

module.exports = router;
