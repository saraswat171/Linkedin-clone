const PostModel = require('../models/PostSchema')
exports.userPosts = async(req)=>{
   
         try {
            const {id}= req.params; // userId
            const {title , body} = req.body;
            const images = req.files.map((i) => { return i.path }); 
                //  console.log('images' , images)
          const newuser = await PostModel.create({title:title,body:body,user:id,images:images});
          console.log('newuser', newuser)
     return newuser;
         }
         catch (err) { throw err;}
};
exports.getPosts = async(req)=>{
   
    try {
        const {id}=req.params; //userId
        const postData = await PostModel.find({user : id});
        console.log("first" , postData)
      return postData;
     
    }
    catch(err){
        throw err;
    }
};

exports.deletPosts=async(req)=>{
    
    try{
        const {postId} = req.params; //postId
    console.log(postId)
        const delPost = await PostModel.findByIdAndDelete(postId);
        return delPost;
    }
    catch(err){
        throw err;
    }
};
exports.updatePost=async(req)=>{
   
    try{
        const {postId} = req.params; //postId
        console.log(postId)
        console.log(req.body)
        const {title , body} = req.body;
        const updatePost = await PostModel.findByIdAndUpdate(postId,{title:title,body:body}, {new:true});
        return updatePost;
    }
    catch(err){
        throw err;
    }
};