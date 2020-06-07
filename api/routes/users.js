const express = require('express');
const router = express.Router();

const CheckAuth = require('./../middleware/check-auth');
const UsersController = require('./../controllers/users');

router.get('/', UsersController.users_get_all);

router.post('/signup', UsersController.users_signup);

router.post('/login', UsersController.users_login);

router.delete('/:userId', CheckAuth, UsersController.users_delete);


module.exports = router;
