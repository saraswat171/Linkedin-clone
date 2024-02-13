const PostModel = require('../models/PostSchema')
exports.userPosts = async(req)=>{
    const {id}= req.params; // userId
 
   
    const {title , body} = req.body;
    console.log('fhhf' , req.body)
  
    console.log('fhhf' , req.files)
          
    const images = req.files.map((i) => { return i.path }); 
         console.log('images' , images)
         try {
         
          const newuser = await PostModel.create({title:title,body:body,user:id,images:images});
          console.log('newuser', newuser)
     return newuser;
         }
         catch (err) { return err;}
};
exports.getPosts = async(req)=>{
    const {id}=req.params; //userId
    try {
        const postData = await PostModel.find({user : id});
        console.log("first" , postData)
      return postData;
     
    }
    catch(err){
     return err;
    }
};

exports.deletPosts=async(req)=>{
    const {postId} = req.params; //postId
    console.log(postId)
    try{
        const delPost = await PostModel.findByIdAndDelete(postId);
        return delPost;
    }
    catch(err){
        return err;
    }
};
exports.updatePost=async(req)=>{
    const {postId} = req.params; //postId
    console.log(postId)
    console.log(req.body)
    const {title , body} = req.body;
    try{
        const updatePost = await PostModel.findByIdAndUpdate(postId,{title:title,body:body}, {new:true});
        return updatePost;
    }
    catch(err){
        return err;
    }
};