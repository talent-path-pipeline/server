const router = require('express').Router();
const lessonController = require('../../controllers/lessonController')
/**
 *  lessons.js
 * @description: Contains all routes related to lesson functions.
 * @author: Kevin B.
 */

/**
 *  [GET] /
 *  @description: Testing purposes
 */
router.get('/', lessonController.getLessons);

/**
 *  [GET] /:id
 *  @description: Testing purposes
 */
router.get('/:id', lessonController.getLessonById);

/**
 *  [POST] /
 *  @description: Testing purposes
 */
router.post('/', lessonController.addLesson);

/**
 *  [DELETE] /:id
 *  @description: Testing purposes
 */
router.delete('/:id', lessonController.deleteLesson);

/**
 *  [PATCH] /:id
 *  @description: Testing purposes
 */
router.patch('/:id', lessonController.updateLesson);

module.exports = router;
