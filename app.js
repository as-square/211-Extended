var express = require("express");
var app = express();
var path = require("path");
var bodyparser = require("body-parser");
const mongooose = require("mongoose");
app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
var port = 8000 || process.env.PORT;


var url = "mongodb+srv://jacrispy:Ragini@123@cluster0.pyvtl.mongodb.net/sexyb?retryWrites=true&w=majority";
mongooose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongooose.connection.on("open", () => { console.log("fired up db bitch!!!!!") });

var mymodel = mongooose.model("model", new mongooose.Schema({
    name: String,
    message: String
}))
app.get("/", (req, res) => {
    res.render("put")

});

app.post("/daal", (req, res) => {
    var entry = new mymodel({
        name: req.body.name,
        message: req.body.message
    })
    entry.save()
    res.redirect("/")
});
app.get("/bf", (req, res) => {
    mymodel.find({}, (err, tasks) => {
        res.render("homes", { array: tasks });
    });
})



app.listen(port, () => { console.log("shi") })