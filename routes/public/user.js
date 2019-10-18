/**
 *  user.js
 * @description: Contains all routes related to user functions.
 */
const router = require('express').Router();
const user = require('../../controllers/user');

/**
 *  [GET] /
 *  @description: Gets all users
 */
router.get('/',  user.getAll);

/**
 *  [GET] /:id
 *  @description: Gets a user by ID
 */
router.get('/:id',  user.getByID);

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
router.delete('/:id',  user.delete);

/**
 *  [PATCH] /:id
 *  @description: Updates a user by ID
 */
router.patch('/:id',  user.update);

module.exports = router;
