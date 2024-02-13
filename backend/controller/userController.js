
const {userServices} = require('../services')



exports.updatingProfile = async (req, res) => {
    try{
        const response = await userServices.updateProfile(req)
        if(response == "User not found"){
            return res.status(404).json(response)
        }
        else{
            return res.status(200).json(response)
        }

    }catch(err){
        console.log(err)
        return res.status(err.status).json({message: "error"})
    }
}

