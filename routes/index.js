const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Talent Path Pipeline Server');
});

router.get('/api/', (req, res) => {
  res.send('Welcome to the Talent Path Pipeline API');
});

// Users ==============================================
router.use('/users', require('./user'));

// Lessons ============================================
router.use('/lessons', require('./lessons'));

// Courses ============================================
router.use('/courses', require('./courses'));

module.exports = router;
