const express = require("express");
const path = require("path");

const static = path.resolve(__dirname, "static");

const app = express();
app.use(express.static(static));
const PORT = 3000;

const handlebars = require("express-handlebars");
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

app.get("/", function (request, response) {
  response.render("home/index");
});

app.get("/information", function (request, response) {
  response.render("information");
});

app.get("/uroki", function (request, response) {
  response.render("uroki");
});

app.get("/cartinka", function (request, response) {
  response.render("cartinka");
});

app.get("/dictionary", function (request, response) {
  let context = {
    garry: "ПОТНЫЙ",
    chisla: "qwe123123",
    spisok: ["Первая фраза", "вторая фраза", "третья фраза"],
  };

  response.render("slovar/dictionary", context);
});

app.get("/jisla", function (request, response) {
  response.render("slovar/jisla");
});

app.get("/ludi", function (request, response) {
  response.render("slovar/ludi");
});

app.get("/semya", function (request, response) {
  response.render("slovar/semya");
});

app.get("/juvstva", function (request, response) {
  response.render("slovar/juvstva");
});

app.get("/eda", function (request, response) {
  response.render("slovar/eda");
});

app.listen(PORT, function () {
  console.log("чтобы закрыть нажмите ctrl + c");
});
