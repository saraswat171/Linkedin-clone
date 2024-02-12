const express = require('express');
const router = express.Router();
const mongoose = require("mongoose")
const PostModel = require('../models/PostSchema')
const authenticateJWT = require('../middleware/authMiddleware');
const multer = require('multer');

const upload = multer({ dest: './uploads' })

router.post('/posts/:id',upload.array('images') , async (req, res) => {
    
    const {id}= req.params;
 
   
  const {title , body} = req.body;
 

  console.log('fhhf' , req.files)
        
  const images = req.files.map((i) => { return i.path }); 
       console.log('images' , images)
       try {
       
        const newuser = await PostModel.create({title:title,body:body,user:id,images:images});
        console.log('newuser', newuser)
        res.status(200).json(newuser)
       }
       catch (err) { res.status(500).json(err) }
    
});

router.get('/posts/:id', async(req,res)=>{
    const {id}=req.params;
    try {
        const postData = await PostModel.find({user : id});
        res.status(200).json(postData)
        console.log("first" , postData)
    }
    catch(err){
        es.status(500).json(err)
    }
})

module.exports = router;