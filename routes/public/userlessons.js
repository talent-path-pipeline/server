/**
 *  userlessons.js
 * @description: Contains all routes related to UserLesson functions.
 */
const router = require('express').Router();
const userLessonController = require('../../controllers/userLessonController');

/**
 *  [GET] /
 *  @description: Get UserLesson by query
 */
router.get('/', userLessonController.getUserLessons);

/**
 *  [GET] /:id
 *  @description: Get UserLesson by id
 */
router.get('/:id', userLessonController.getUserLessonById);

/**
 *  [GET] /lesson/:lessonId/user/:userId
 *  @description: Get UserLesson by lesson id and user id
 */
router.get(
  '/user/:userId/lesson/:lessonId',
  userLessonController.getUserLessonByLessonAndUserIds,
);

/**
 *  [GET] /course/:courseId/user/:userId
 *  @description: Get UserLesson by course id and user id
 */
router.get(
  '/user/:userId/course/:courseId',
  userLessonController.getUserLessonByCourseAndUserIds,
);

/**
 *  [GET] /user/:id
 *  @description: Get UserLessons by user id
 */
router.get('/user/:userId', userLessonController.getUserLessonsByUserId);

/**
 *  [POST] /
 *  @description: Add new UserLesson
 *  Fields: userUuid, lessonUuid, (optionally) timestamp
 */
router.post('/', userLessonController.createUserLesson);

/**
 *  [PATCH] /:id
 *  @description: Update lesson
 */
router.patch('/:id', userLessonController.updateUserLesson);

/**
 *  [DELETE] /:id
 *  @description: Delete UserLesson
 */
router.delete('/:id', userLessonController.deleteUserLesson);

module.exports = router;
