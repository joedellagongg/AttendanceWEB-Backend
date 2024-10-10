const express = require("express");
const router = express.Router();
const cors = require("cors");

const studentRoute = require("./student.route");

const corsSetting = {
    credentials: true,
    origin: "http://localhost:3000",
};

const registeredRoute = (app) => {
    app.use(cors(corsSetting));
    app.use("/add_student", studentRoute);
    app.use("/student_list", studentRoute);
};

module.exports = registeredRoute;
