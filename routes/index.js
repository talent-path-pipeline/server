/**
 * /routes/index.js
 * @description: Index file for the routes used for this application.
 */
const router = require('express').Router();
const passport = require('passport');

/**
 * Test route
 * @author: Kevin B.
 * @description: Testing purposes
 */
router.get('/', (req, res) => {
  res.send('Stonehaven Academy Server');
});
/**
 * Test route
 * @author: Kevin B.
 * @description: Testing purposes
 */
router.get('/api/', (req, res) => {
  res.send('Welcome to the Stonehaven Academy API');
});

/**
 * Users routes
 * @description: Handles all routes for user data.
 */
router.use('/api/user', require('./public/user'));

/**
 * Dashboard routes
 * @description: Handles all routes for the dashboard.
 * Note: Passport will be inserted into this route in a future date.
 */
router.use(
  '/api/dashboard',
  passport.authenticate('jwt', { session: false }),
  require('./private/dashboard'),
);
/**
 * Lesson routes
 * @description: Handles all routes for lessons.
 */
router.use('/api/lessons', require('./public/lessons'));

/**
 * Course routes
 * @description: Handles all routes for the courses.
 */
router.use('/api/courses', require('./public/courses'));

/**
 * Path routes
 * @description: Handles all routes for the paths.
 */
router.use('/api/paths', require('./public/paths'));

/**
 * UserLesson routes
 * @description: Handles all routes for UserLessons.
 */
router.use('/api/userlessons', require('./public/userlessons'));


/**
 * Nested data routes
 * @description: Handles all routes for getting fully nested data representation objects
 */
router.use('/api/nested-data', require('./public/nested-data'));

module.exports = router;
