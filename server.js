const express = require("express")
const path = require('path')


const static = path.resolve(__dirname, 'static')


const cartinka = path.resolve(__dirname, 'public', 'cartinka.html')
const dictionary = path.resolve(__dirname, 'public', 'slovar', 'dictionary.html')
const jisla = path.resolve(__dirname, 'public', 'slovar', 'jisla.html')
const ludi = path.resolve(__dirname, 'public', 'slovar', 'ludi.html')
const semya = path.resolve(__dirname, 'public', 'slovar', 'semya.html')
const juvstva = path.resolve(__dirname, 'public', 'slovar', 'juvstva.html')
const eda = path.resolve(__dirname, 'public', 'slovar', 'eda.html')

const app = express()
app.use(express.static(static))
const PORT = 3000

/** HANDLEBARS */
const handlebars = require("express-handlebars");
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
/** ENDHANDLE */

app.get("/", function(request, response){
    response.render('home/index')
})

app.get("/information", function(request, response){
    response.render('information');
})

app.get("/uroki", function(request,response){
    response.render('uroki');
})

app.get("/cartinka", function(request,response){
    response.render('cartinka');
})

app.get("/dictionary", function(request,response){
    response.render('slovar/dictionary')
})

app.get("/jisla", function(request,response){
    response.sendFile(jisla);
})

app.get("/ludi", function(request,response){
    response.sendFile(ludi);
})

app.get("/semya", function(request,response){
    response.sendFile(semya);
})

app.get("/juvstva", function(request,response){
    response.sendFile(juvstva);
})

app.get("/eda", function(request,response){
    response.sendFile(eda);
})

app.listen(PORT, function() {
    console.log("чтобы закрыть нажмите ctrl + c");
})