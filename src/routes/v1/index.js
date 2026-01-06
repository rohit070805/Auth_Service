const express = require('express');
const UserController = require('../../controllers/user-controller');
const{AuthValidate} = require('../../middlewares/auth-request-validator');
const router = express.Router();

router.post('/signup',AuthValidate,UserController.create);
router.post('/signin',AuthValidate,UserController.signIn);
module.exports = router;