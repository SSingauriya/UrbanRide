const express = require('express');
const router = express.Router();
const {body} = require("express-validator");
const userController = require('../controllers/user.controller');

router.post('/register', [
    body('email').isEmail().withMessage('Invalid email'),
    body('fullname.firstname').isLength().withMessage('First name must be at least 3 characters long'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
], 
userController.registerUser
);

/**
 * @api {post} /users/login Login a user
 * @apiName LoginUser
 * @apiGroup User
 * 
 * @apiParam {String} email User's email.
 * @apiParam {String} password User's password.
 * 
 * @apiSuccess {String} token Authentication token.
 * @apiSuccess {Object} user User's information.
 * 
 * @apiError {Object[]} errors List of validation errors.
 * @apiError {String} message Error message.
 */

router.post('/login', [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
],
userController.loginUser
);

module.exports = router;