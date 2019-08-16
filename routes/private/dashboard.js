/**
 * dashboard.js
 * @description:: All routes related to dashboard functionality.
 */
const router = require('express').Router();

/**
 *  [GET] /
 *  @description: Testing purposes for a protected route.
 */
router.get('/', (req, res) => {
  res
    .status(200)
    .send(
      'This is a protected route. You should only see this if you are authenticated in.'
    );
});
module.exports = router;
