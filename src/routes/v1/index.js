const express = require('express');
const UserController = require('../../controllers/user-controller');
const{AuthValidate,validateIsAdminRequest} = require('../../middlewares/auth-request-validator');
const router = express.Router();

router.post('/signup',AuthValidate,UserController.create);
router.post('/signin',AuthValidate,UserController.signIn);
router.get('/isAuthenticated',UserController.isAuthenticated);
router.get('/users/:id',UserController.get);
router.get('/isAdmin',validateIsAdminRequest,UserController.isAdmin)
module.exports = router;