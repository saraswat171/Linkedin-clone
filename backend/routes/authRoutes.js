const express = require('express');
const router = express.Router();


const authenticateJWT = require('../middleware/authMiddleware');
const { authController } = require('../controller');
router.post('/usersinfo', authController.SignUpUser);


router.post('/logininfo' ,authController.SignInUser );


module.exports = router;