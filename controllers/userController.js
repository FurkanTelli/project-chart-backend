const { Sequelize } = require("sequelize");
const User = require("../model/User");


exports.getAllUsers = async (req, res) => {
    try {
        const allUser = await User.findAll();
        res.json(allUser);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

exports.databaseConneciton = async (req, res) => {
    try {
        console.log(req.body)
        // const { user_name, user_password, user_database, user_databaseServer } = req.body;
        const { userName, password, database, server } = req.body;
        const sequelize = new Sequelize({
            dialect: "mssql",
            server: server,
            port: 1433,
            database: database,
            username: userName,
            password: password,
        });
        try {
            await sequelize.authenticate();
            await sequelize.close();
            res.status(200).json({ message: "connection is succesful" });
        } catch (error) {
            console.log(error);
            res.status(401).json({ message: "cannot connect to db" })
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "bad request" })
    }
}