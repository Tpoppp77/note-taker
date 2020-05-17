const express = require("express");
//const htmlRoutes = require("./routes/html-routes");
//const apiRoutes = require("./routes/api-routes");

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

require("./Develop/routes/api-routes")(app);
require("./Develop/routes/html-routes")(app);

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});