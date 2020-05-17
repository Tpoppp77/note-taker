let express = require("express");
let app = express;
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, function () {
    console.log(`Server listening on http://localhost:${PORT}`)
});