const User = require("../model/User");


exports.getAllUsers = async (req, res) => {
    try {
        const allUser = await User.findAll();
        res.json(allUser);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}