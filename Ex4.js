var fs = require('fs'); //importa modulo fs 

console.log("Lendo arquivo...");

function function1() {
    fs.readFile('texto.txt', 'utf-8', function(err, data) { //le o arquivo texto e o imrpime no console, tratamento de erro simples
        if (err) throw err;
        console.log(data);
    });
}


setTimeout(function1, 3000); //funcao para aguardar 3 segundos