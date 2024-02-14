const UsersModel = require('../models/UserSchema')
const CustomError = require('../libs/error')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
exports.createUser=(async(req)=>{
    try {
        const { name, email, password } = req.body;
    
        const hashedPassword = await bcrypt.hash(password, 10);
        const existingUser = await UsersModel.findOne({ email })

        console.log(existingUser)
        if (existingUser) {
           throw new CustomError('email already exist' ,401);
        }
        const newuser = await UsersModel.create({ name, email, password: hashedPassword });
        console.log('newuser', newuser)
        return newuser
    }


    catch (err) {
     throw err;
    }
})

exports.loginUser=(async(req)=>{
    try {
        const { email, password } = req.body;
        const user = await UsersModel.findOne({ email });

        if (user && bcrypt.compareSync(password, user.password)) {

            const token = jwt.sign({ ID: user._id }, 'jwt-key');

            // res.cookie('token', token);
            // res.json({ success: true, user, token });
            return (user , token);
        } else {
           throw new CustomError('Password is Incorrect', 403)
        }
    } catch (error) {
       
        throw error;
    }
})