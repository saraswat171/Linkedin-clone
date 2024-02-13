const UsersModel = require('../models/UserSchema');


exports.updateProfile = async (req) => {
    const { id } = req.params;
    const address = JSON.parse(req.body.address);
    const { username, phone, website, title, industry, summary } = req.body;
    const image = req.file.path;

    

    try {
        const user = await UsersModel.findByIdAndUpdate(id, {
            username: username,
            address: {
                street: address.street,
                state: address.state,
                city: address.city,
                pincode: address.pincode,
                country: address.country
            },
            phone: phone,
            website: website,
            image: image,
            title: title,
            summary: summary,
            industry: industry
        });
        if (!user) {
            return 'User not found'
        } else {
            return user
        }
    } catch (error) {
        console.error(error);
        return error
    }
};