var express = require("express")
var app = express()
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var socket = require("socket.io")
var server = app.listen(3000 || process.env.PORT, () => { console.log("go shivam") })
app.set("view engine", "ejs")
app.set("views", require("path").join(__dirname, "views"));
var io = socket(server);


app.post("/daal", (req, res) => {
    io.on("connection", (socket) => {
        console.log("yeah bith");
        io.sockets.emit("chat", {
            name: req.body.name,
            message: req.body.message
        })
        console.log("sent");
    })

});
app.get("/", (req, res) => {
    res.render("chat")
});