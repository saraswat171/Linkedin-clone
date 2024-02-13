const express = require('express');
const router = express.Router();


const authenticateJWT = require('../middleware/authMiddleware');
const multer = require('multer');
const { postController } = require('../controller');

const upload = multer({ dest: './uploads' })

router.post('/posts/:id' ,upload.array('images'), postController.uploadPosts )

router.get('/posts/:id' , postController.fetchPosts)

router.delete('/posts/:postId' , postController.deletingPosts)

router.put('/posts/:postId',postController.updatingPost)
module.exports = router;