const Student = require("../model/Student");
const { Sequelize } = require("sequelize");
const { MsSqlDialect } = require("@sequelize/mssql");
const { QueryTypes } = require('sequelize');

exports.getAllStudents = async (req, res) => {
    try {
        // const allStudents = await Student.findAll(); Silinecek satırlar mssql ile sorgu atılacak
        // res.json(allStudents); // silinecek

        // const sequelizeStudents = new Sequelize('chartstudents', 'root', 'Furkan249549', {
        //     host: "localhost",
        //     dialect: "mysql",
        //     logging: false
        // });
        // const { user_name, user_password, user_database, user_databaseServer } = req.body;
        const sequelize = new Sequelize({
            dialect: "mssql",
            server: "localhost",
            port: 1433,
            database: "chartstudents",
            username: "Sa",
            password: "Furkan249549",
        });
        console.log(req.body,"test")


        await sequelize.authenticate();
        const students = await sequelize.query('SELECT * FROM dbo.student_tables', {
            type: QueryTypes.SELECT,
        });
        res.status(200).json({data:students});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.addNewStundent = async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.status(200).json({ message: "request is succesfully" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.deleteStudent = async (req, res) => {
    try {
        const result = await Student.destroy(req.body);
        res.status(200).json({ message: "The student has been deleted", result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.databaseConneciton = async (req, res) => {
    try {
        console.log(req.body)
        const { user_name, user_password, user_database, user_databaseServer } = req.body;
        // const sequelizeStudents = new Sequelize(db, user, password, {
        //     host: server,
        //     dialect: "mssql",
        //     logging: false
        // });

        // console.log(user_name, "-")
        // console.log(user_password, "-")
        // console.log(user_database, "-")
        // console.log(user_databaseServer, "-")
        const sequelize = new Sequelize({
            dialect: "mssql",
            server: user_databaseServer,
            port: 1433,
            database: user_database,
            username: user_name,
            password: user_password,
            // authentication: {
            //     type: 'default',
            //     options: {
            //         userName: user_name,
            //         password: user_password,
            //     },
            // },
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