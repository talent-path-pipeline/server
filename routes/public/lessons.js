/**
 *  lessons.js
 * @description: Contains all routes related to lesson functions.
 */
const router = require('express').Router();
const lessonController = require('../../controllers/lessonController');

/**
 *  [GET] /
 *  @description: Get all lessons
 */
router.get('/', lessonController.getLessons);

/**
 *  [GET] /:id
 *  @description: Get lesson by id
 */
router.get('/:id', lessonController.getLessonById);

/**
 *  [POST] /
 *  @description: Add new lesson
 *  Fields: videoURL, title, description, courseName,
 *  pathName, instructorID
 */
router.post('/', lessonController.addLesson);

/**
 *  [DELETE] /:id
 *  @description: Delete lesson
 */
router.delete('/:id', lessonController.deleteLesson);

/**
 *  [PATCH] /:id
 *  @description: Update lesson
 */
router.patch('/:id', lessonController.updateLesson);

module.exports = router;
