var fs = require("fs");
var path = require("path");
var http = require("http");

// Initialise libraries
var express = require("express");
var app = express();

var httpServer = http.createServer(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./build")));

app.set("trust proxy", 1);

app.get("/", (req, res) => {
	res.sendFile("index.html", { root: path.join(__dirname, "/build") });
});
/*
app.get("*", (req, res) => {
	console.log(req.path);
	res.redirect("/");
}); */

httpServer.listen(2000);
