const express = require('express');
const router = express.Router();


const authenticateJWT = require('../middleware/authMiddleware');
const multer = require('multer');
const { postController } = require('../controller');

const upload = multer({ dest: './uploads' })

router.post('/posts' ,authenticateJWT,upload.array('images'), postController.uploadPosts )

router.get('/posts' , postController.fetchPosts)

router.delete('/posts/:postId' , postController.deletingPosts)

router.put('/posts/:postId',postController.updatingPost)
module.exports = router;



// exports.fetchPosts = async(req,res)=>{
//     try{
//         console.log('req.query: ', req.query);
//         const response = await postServices.getPosts(req.query);
//         return res.status(200).json(response)
//     }
//     catch(e){
//         return res.status(e?.code || 500).json({message:e?.message || "Internal server error"})
//     }
// };


// exports.getPosts = async (querys) => {

//     try {
//         let query={}
//         const createAt= querys.time;
//         console.log('createAt: ', (new Date(createAt)));
      
//         if(createAt){ 
//         query= {  createdAt: { $lt: (new Date(createAt)) } }
//        }
//         const postData = await PostModel.find(query).populate(  'user' ,  'name' ).sort({createdAt :-1}).limit(3);
//         console.log('postData: ', postData);
        
//         if (postData.length === 0) {
//             throw new CustomError("No post Found", 404)
//         }

//         return postData;

//     }
//     catch (err) {
//         throw err;
//     }
// };