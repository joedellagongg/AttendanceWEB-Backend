const express = require("express");
const database = require("./config/db");
const routes = require("./routes/master");
const cors = require("cors");
const app = express();
const port = 5500;

app.use(express.json());
routes(app);

// TEST API = DO NOT REMOVE
// app.get("/student_infos", (req, res) => {
//     const query = "SELECT * FROM studuser";
//     database.query(query, (err, results) => {
//         if (err) {
//             return res
//                 .status(500)
//                 .json({ error: "Failed to retrieve students" });
//         }
//         res.json(results);
//     });
// });

app.listen(port, (err) => {
    if (err) throw err;
    console.log("\x1b[32m%s\x1b[0m", "  ▲", "[ SERVER ] is running!");
});
