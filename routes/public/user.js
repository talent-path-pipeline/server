/**
 *  user.js
 * @description: Contains all routes related to user functions.
 */
const router = require('express').Router();
const user = require('../../controllers/userController');

/**
 *  [GET] /
 *  @description: Reads all users or one user if inputed with email
 */
router.get('/',  user.getUsers);

/**
 *  [POST] /
 *  @description: Creates a candidate user
 */
router.post('/', user.register);

/**
 *  [POST] /login
 *  @description: Logins in a user
 */
router.post('/login', user.login);

/**
 *  [DELETE] /:id
 *  @description: Deletes a user by ID
 */
router.delete('/',  user.delete);

/**
 *  [PATCH] /:id
 *  @description: Updates a user by ID
 */
router.patch('/',  user.update);

module.exports = router;
