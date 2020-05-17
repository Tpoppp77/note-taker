const fs = require("fs");

module.exports = function(app) {
    
    app.get("/api/notes", (req,res) => {
        fs.readFile("./db/db.json", function (req,res) {
            console.log("Getting route ", err, data);
            noteData = JSON.parse(data)
            res.json(noteData);
        });
    });

    app.post("/api/notes", (req,res) => {

        const records = {
            id: "1234",
            title: req.body.title,
            text: req.body.text
        };

        fs.writeFile("./db/db.json", JSON.stringify(records, "utf-8", function (err, data) {
            if (err) {
                throw err;

            }
            console.log(data);
            res.json("successfully wrote")
        }));
    });
};