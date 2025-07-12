const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

router.get("/allStudents", studentController.getAllStudents); // post isteğine döndürlecek 
router.post("/allStudents", studentController.addNewStundent);
router.delete("/allStudents", studentController.deleteStudent);
router.post("/connect", studentController.databaseConneciton);

module.exports = router;
