const CustomError = require("../libs/error");
const { messageServices } = require("../services");
exports.fetchingmessages = async (req, res) => {
                                      
    try {
        if (!res.locals.isAuthenticated) {
            throw new CustomError("User not authorised", 401)
        }
      

        const response = await messageServices.fetchMessages(req.params);
        return res.status(201).json(response)
    }
    catch (e) {
        return res.status(e?.code || 500).json({ message: e?.message || "Internal server error" })
    }
};