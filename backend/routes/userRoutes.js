const express = require('express');
const router = express.Router();
const UsersModel = require('../models/UserSchema');
const authenticateJWT = require('../middleware/authMiddleware');
const multer = require('multer');

const upload = multer({ dest: './uploads' })
router.put('/profile/:id',upload.single('image') , async (req, res) => {
  console.log("first")
    const {id}= req.params;
    const address= JSON.parse(req.body.address)
    const { username ,  phone, website, title , industry,summary} = req.body;
    console.log("img",req.file.path)
    const image = req.file.path;
    try {
              // if (res.locals.isAuthenticated) {
              //   const userId = req.user.ID;
             
                const user = await UsersModel.findByIdAndUpdate(id,{username:username,address:{street:address.street , state:address.state , city:address.city , pincode:address.pincode ,country:address.country},
                phone:phone,website:website,image:image, title:title, summary:summary , industry:industry});
          
                if (!user) {
                  return res.status(404).json({ error: 'User not found' });
                }
               else {
                res.json({ success: true, user });
               }
            
              // } else {
              //   res.status(401).json({ error: 'Unauthorized' });
              // }
            } catch (error) {
              console.error(error);
              res.status(500).json({ error: 'Internal server error' });
            }
});

module.exports = router;