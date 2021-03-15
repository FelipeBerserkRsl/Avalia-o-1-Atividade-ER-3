var events = require('events');
var eventEmitter = new events.EventEmitter();

//criado dois eventos 

var eventoUm = function() {
    console.log(Math.floor(Math.random() * 10)); //metodo math random gera um numero aleatorio, segundo parametro coloca num range de 0 a 9 
}

var eventoDois = function() {
    switch (new Date().getDay()) { //metodo getday retorna um numero de 0 6 com os dias da semana. 0 = domingo 1 = segunda. 
        case 0:
            day = "Domingo :| ";
            break;
        case 1:
            day = "Segunda :( ";
            break;
        case 2:
            day = "Terça :/ ";
            break;
        case 3:
            day = "Quarta :| ";
            break;
        case 4:
            day = "Quinta :/ ";
            break;
        case 5:
            day = "Sexta :) ";
            break;
        case 6:
            day = "Sábado :)) ";
    }

    console.log(day);
}

eventEmitter.on('scream', eventoUm);
eventEmitter.on('scream2', eventoDois);

eventEmitter.emit('scream');
eventEmitter.emit('scream2');