const PostModel = require('../models/PostSchema')
const CustomError = require('../libs/error')
exports.userPosts = async ({title , body , files , id} )=> {

    try {
       
    
        const images = files.map((i) => { return i.path });
        //  console.log('images' , images)
        const newPost = (await PostModel.create({ title: title, body: body, user: id, images: images })).populate({ path: 'user', select: 'name' });
        console.log('newPost', newPost)
        return newPost;
    }
    catch (err) { throw err; }
};
exports.getPosts = async (querys) => {

    try {
        let query={}
        const createAt= querys.time;
        console.log('createAt: ', (new Date(createAt)));
      
        if(createAt){ 
        query= {  createdAt: { $lt: (new Date(createAt)) } }
       }
        const postData = await PostModel.find(query).populate(  'user' ,  'name' ).sort({createdAt :-1}).limit(3);
        console.log('postData: ', postData);
        
        if (postData.length === 0) {
            throw new CustomError("No post Found", 404)
        }

        return postData;

    }
    catch (err) {
        throw err;
    }
};

exports.deletPosts = async (params , query) => {

    try {
        const { postId } = params; //postId
        const userId= query.userId;
        console.log(postId)
        if(userId === await PostModel.findById(postId).user){
            const delPost = await PostModel.findByIdAndDelete(postId);
            return delPost;
        }
       
       
            throw new CustomError("Unauthorised", 401)
        
        
    }
    catch (err) {
        throw err;
    }
};
exports.updatePost = async (params , query) => {

    try {
        const { postId } = params; //postId
        const userId= query.userId;
        console.log(postId)
        console.log(req.body)
        const { title, body } = req.body;
        if(userId === await PostModel.findById(postId).user){
            const updatePost = await PostModel.findByIdAndUpdate(postId, { title: title, body: body }, { new: true });
            return updatePost;
        }
        throw new CustomError("Unauthorised", 401)
        
    }
    catch (err) {
        throw err;
    }
};