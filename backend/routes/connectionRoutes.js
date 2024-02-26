const express = require('express');
const router = express.Router();


const authenticateJWT = require('../middleware/authMiddleware');
const { connectionController } = require('../controller');

router.post('/user/connection/:receiverId' , authenticateJWT, connectionController.uploadingConnection),
router.get('/user/connection', authenticateJWT ,connectionController.fetchConnection),
router.get('/user/suggestion', authenticateJWT ,connectionController.fetchSuggestion),

// router.put('/user/connection/:senderId' ,authenticateJWT ,connectionController.updatingConnection)



module.exports = router;