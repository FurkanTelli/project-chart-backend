const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

router.post("/allStudents", studentController.getAllStudents); // post isteğine döndürlecek 
router.post("/allStudents", studentController.addNewStundent);
router.delete("/allStudents", studentController.deleteStudent);

module.exports = router;
