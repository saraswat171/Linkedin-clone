const express = require('express');
const { notificationController } = require('../controller');
const router = express.Router();

router.post('/notifications' , notificationController.uploadingNotification )
module.exports = router;