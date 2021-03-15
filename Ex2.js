var vet = {}

// as duas posicoes inicias contem outros dados, 
//armazena em um vetor os dados informados no console 
// e os converte para inteiro
for (let i = 2; i < process.argv.length; i++) {
    vet[i] = parseInt(process.argv[i]);
}

console.log(vet[2] + vet[3]);