const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");


router.get("/allUsers", userController.getAllUsers);
router.post("/connect", userController.databaseConneciton);

module.exports = router