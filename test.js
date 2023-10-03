function about (request, response) {
    console.log('Сработала функция и дала нам', request, response);
}


function get(route, controller){
    controller('request@!#', 'responseFFFFF');
}


get('/about', about);