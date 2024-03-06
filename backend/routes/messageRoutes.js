const express = require('express');
const router = express.Router();

const authenticateJWT = require('../middleware/authMiddleware');
const { messageController } = require('../controller');

router.get('/allroommessages/:roomId',authenticateJWT,  messageController.fetchingmessages)





module.exports = router;