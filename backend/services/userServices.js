const UsersModel = require('../models/UserSchema');

const CustomError = require('../libs/error')
exports.updateProfile = async (req) => {
 
        try {   console.log("hjdfv" ,req.params)
        console.log("file" ,req.file)
        const { id } = req.params;
    const { username, phone, website, title, industry, summary } = req.body;
   
    if (req.body.address) {
        var { street, state, city, pincode, country } = req.body.address;
    }
    const image = req.file.path;
        const user = await UsersModel.findByIdAndUpdate(id, {
            username: username,
            address: { street, state, city, pincode, country },
            phone: phone,
            website: website,
            image: image,
            title: title,
            summary: summary,
            industry: industry
        },{new:true});
        if (!user) {
            throw new CustomError('User not updated' , 404)
        } else {
            return user
        }
    } catch (error) {
       
        throw error
    }
};