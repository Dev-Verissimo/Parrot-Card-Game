 let numeroDeCartas = 0


// Pegando o número de cartas correto

 function pegaNumeroDeCartas() {
    numeroDeCartas = prompt('Quantas cartas você deseja');
    while ((numeroDeCartas % 2 != 0) || (numeroDeCartas < 4) || (numeroDeCartas > 14)){
        numeroDeCartas = prompt('Quantas cartas você deseja');
    }
 }

 pegaNumeroDeCartas()
