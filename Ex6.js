const fs = require('fs');

fs.appendFile("txt2.txt", ' Vamos escrever sem apagar ', function(err) {
    if (err) throw err;
    console.log('Está escrito')
});


//escreve sem apagar, le no console o conteudo. 

fs.readFile('txt2.txt', 'utf-8', function(err, data) {
    if (err) throw err;
    console.log("Conteudo do Arquivo: " + data);
});