const path = require('path')

const home = getPathHTML('home/index.html');
const Information = getPathHTML('information.html');
const uroki = getPathHTML('uroki.html');
const cartinka = getPathHTML('cartinka.html');
const dictionary = getPathHTML('slovar/dictionary.html');
const jisla = path.resolve(__dirname, 'public', 'slovar', 'jisla.html')
const ludi = path.resolve(__dirname, 'public', 'slovar', 'ludi.html')
const semya = path.resolve(__dirname, 'public', 'slovar', 'semya.html')
const juvstva = path.resolve(__dirname, 'public', 'slovar', 'juvstva.html')
const eda = path.resolve(__dirname, 'public', 'slovar', 'eda.html')

function getPathHTML(name) {
    return path.resolve(__dirname, 'public', name);
}

function homeController(request, response){
    response.render('home/index');
}
function infoController(request, response) {
        response.render('information')
}
function urokiController(request, response) {
        response.sendFile(uroki);
}
function imageController(request,response){
    response.sendFile(cartinka);
}
function dictionaryController(request,response){
    response.sendFile(dictionary);
}
function numbersController(request,response){
    response.sendFile(jisla);
}
function peopleController(request,response){
    response.sendFile(ludi);
}
function familyController(request,response){
    response.sendFile(semya);
}
function feelController(request,response){
    response.sendFile(juvstva);
}
function foodController(request,response){
    response.sendFile(eda);
}
module.exports = {
    homeController,
    infoController,
    urokiController,
    imageController,
    dictionaryController,
    numbersController,
    peopleController,
    familyController,
    feelController,
    foodController
}