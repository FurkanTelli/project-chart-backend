const express = require("express");
const app = express();
const _cors = require("cors");
// const {sequelizeStudents, sequelizeUsers} = require("./config");
// const Student = require("./model/Student");
const studentRoutes = require("./routes/studentRoutes");
const userRoutes = require("./routes/userRoutes");

app.use(express.urlencoded({extended:false}));  
app.use(_cors({
    origin:"http://localhost:3000",
    credentials:true
}));
app.use(express.json());
app.use(studentRoutes);
app.use(userRoutes);

// async function testConneciton() {
//     try {
//         await sequelizeStudents.authenticate();
//         await sequelizeUsers.authenticate();
//         console.log("bağlantı başarılı");
//     } catch (error) {
//         console.error("bağlantı başarısız", error)
//     }
// }

// testConneciton();





app.listen(7000, () => {
    console.log(`Server 7000 portunda çalışıyor`);
});
