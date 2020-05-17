const express = require("express");
//const htmlRoutes = require("./routes/html-routes");
//const apiRoutes = require("./routes/api-routes");

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// app.get("/", function(req, res) {
//     res.send("Ready to start taking notes?!");
//   });

app.listen(PORT, function () {
    console.log(`Server listening on http://localhost:${PORT}`)
});