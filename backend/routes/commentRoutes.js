const express = require('express');
const router = express.Router();


const authenticateJWT = require('../middleware/authMiddleware');
const { commentController } = require('../controller');

router.post('/post/:postId/comments' , commentController.uploadingComment),
router.get('/post/:postId/comments', commentController.fetchComments),
router.delete('/post/comments/:commentId', commentController.deletingComments),
router.put('/post/comments/:commentId' ,commentController.updatingComments)



module.exports = router;