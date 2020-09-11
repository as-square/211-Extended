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
    res.render("home")

});
app.post("/daal", (req, res) => {
    var entry = new mymodel({
        name: req.body.name,
        message: req.body.message
    })
    entry.save()
    res.redirect("/contribute")
});
app.get("/memories", (req, res) => {
    mymodel.find({}, (err, tasks) => {
        res.render("STORIES", { array: tasks });
    });
});
app.get("/contact", (req, res) => {
    res.render("c")
});
app.get("/contribute", (req, res) => {
    res.render("contribute")
});
app.get("/akram", (req, res) => {
    res.render("akram")
});
app.get("/aditya", (req, res) => {
    res.render("aditya")
});
app.get("/arjun", (req, res) => {
    res.render("arjun")
});
app.get("/harsh", (req, res) => {
    res.render("harsh")
});
app.get("/abhinay", (req, res) => {
    res.render("abhinay")
});
app.get("/harshit", (req, res) => {
    res.render("harshit")
});
app.get("/shivam", (req, res) => {
    res.render("shivam")
});




app.listen(port, () => { console.log("shi") })