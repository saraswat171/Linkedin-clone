
const {userServices} = require('../services')



exports.updatingProfile = async (req, res) => {
    try{
        const response = await userServices.updateProfile(req)
       return res.status(200).json(response);

    }catch(e){
        console.log(e)
        return res.status(e?.code || 500).json({message:e?.message || "Internal server error"})
    }
}

