const express = require('express');
const router = express.Router();
const { userController } = require('../controller');
const authenticateJWT = require('../middleware/authMiddleware');
const multer = require('multer');

const upload = multer({ dest: './uploads' })



router.put('/profile/:id', upload.single('image'),  userController.updatingProfile);



module.exports = router;