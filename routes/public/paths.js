/**
 *  paths.js
 * @description: Contains all routes related to path functions.
 */
const router = require('express').Router();
const pathController = require('../../controllers/pathController');

/**
 *  [GET] /
 *  @description: Get paths (with optional query filter)
 */
router.get('/', pathController.getPaths);

/**
 *  [GET] /:id
 *  @description: Get path by id
 */
router.get('/:id', pathController.getPathById);

/**
 *  [POST] /
 *  @description: Add new path
 *  Fields: videoURL, title, description, courseName,
 *  pathName, instructorID
 */
router.post('/', pathController.createPath);

/**
 *  [DELETE] /:id
 *  @description: Delete path
 */
router.delete('/:id', pathController.deletePath);

/**
 *  [PATCH] /:id
 *  @description: Update path
 */
router.patch('/:id', pathController.updatePath);

module.exports = router;
