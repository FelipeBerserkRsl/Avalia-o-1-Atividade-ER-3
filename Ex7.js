var fs = require('fs');
fs.unlink('txt2.txt', function(err) {
    console.log("Arquivo excluido");
});

// exclui o arquivo txt anterior