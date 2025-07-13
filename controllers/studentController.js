const Student = require("../model/Student");
const { Sequelize } = require("sequelize");
// const { MsSqlDialect } = require("@sequelize/mssql");
const { QueryTypes } = require('sequelize');

exports.getAllStudents = async (req, res) => {
    try {
        const { user, password, database, server } = req.body;
        const sequelize = new Sequelize({
            dialect: "mssql",
            server: server,
            port: 1433,
            database: database,
            username: user,
            password: password,
        });
        await sequelize.authenticate();
        const students = await sequelize.query('SELECT * FROM dbo.student_tables', {
            type: QueryTypes.SELECT,
        });
        res.status(200).json(students);
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
