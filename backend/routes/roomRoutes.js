const express = require('express');
const router = express.Router();

const authenticateJWT = require('../middleware/authMiddleware');
const { roomController } = require('../controller');

router.post('/roomCreate', authenticateJWT, roomController.uploadRoom)
router.get('/roomGet', authenticateJWT, roomController.fetchingRoom)





module.exports = router;