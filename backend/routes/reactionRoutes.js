const express = require('express');
const router = express.Router();


const authenticateJWT = require('../middleware/authMiddleware');
const { reactionController } = require('../controller');

router.post('/post/:postId/reaction',authenticateJWT, reactionController.uploadingReaction),
router.post('/comment/:commentId/reaction', reactionController.uploadingCommentReaction),
router.get('/post/:postId/reaction', reactionController.fetchReaction),
router.get('/comment/:commentId/reaction', reactionController.fetchCommentReaction),
router.put('/post/reaction/:reactionId', reactionController.updatingReaction),
router.delete('/post/reaction/:reactionId',authenticateJWT,reactionController.deletingReaction)




module.exports = router;