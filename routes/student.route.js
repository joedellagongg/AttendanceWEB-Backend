const express = require("express");
const router = express.Router();

const studentController = require("../controllers/student.controllers");

router.post("/", studentController.addStudent);
router.get("/", studentController.getStudent);

module.exports = router;
