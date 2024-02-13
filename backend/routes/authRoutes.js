const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UsersModel = require('../models/UserSchema');
const authenticateJWT = require('../middleware/authMiddleware');
router.post('/usersinfo', async (req, res) => {
 
        const { name, email, password } = req.body;
        console.log("chetan" , typeof(password))
        const hashedPassword = await bcrypt.hash(password, 10);
        try {
            const existingUser = await UsersModel.findOne({ email })
    
            console.log(existingUser)
            if (existingUser) {
                return res.status(400).json("Email already exist");
            }
            const newuser = await UsersModel.create({ name, email, password: hashedPassword });
            console.log('newuser', newuser)
            res.status(200).json(newuser)
        }
    
    
        catch (err) { res.status(500).json(err) }
});


router.post('/logininfo', async (req, res) => {
    console.log('req body', req.body)

        try {
            const { email, password } = req.body;
            const user = await UsersModel.findOne({ email });
    
            if (user && bcrypt.compareSync(password, user.password)) {
                
                const token = jwt.sign({ ID: user._id }, 'jwt-key');
                
                // res.cookie('token', token);
                res.json({ success: true, user , token});
            } else {
                res.status(404).json({ success: false, message: 'Invalid credentials' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: 'Internal server error' });
        }
});

module.exports = router;