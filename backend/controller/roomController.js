const CustomError = require("../libs/error");
const { roomServices } = require("../services");


exports.uploadRoom = async (req, res) => {
    try {

        if (!res.locals.isAuthenticated) {
            throw new CustomError("User not authorised", 401)
        }
        const userId = req.user.ID;

        const response = await roomServices.userRoom({ body: req.body, userId: userId });
        return res.status(201).json(response)
    }
    catch (e) {
        return res.status(e?.code || 500).json({ message: e?.message || "Internal server error" })
    }
};

exports.fetchingRoom = async (req, res) => {
    try {

        if (!res.locals.isAuthenticated) {
            throw new CustomError("User not authorised", 401)
        }
        const userId = req.user.ID;

        const response = await roomServices.fetchedRoom({ userId: userId });
        return res.status(201).json(response)
    }
    catch (e) {
        return res.status(e?.code || 500).json({ message: e?.message || "Internal server error" })
    }
};