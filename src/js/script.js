let numeroDeCartas = 0

const mainCartas = document.querySelector('#cartas')
const cards = document.querySelectorAll('.card')

const body = document.querySelector("body");

// Possíveis frentes para as cartas 

const scrFrenteCarta = ['bobrossparrot.gif', 'explodyparrot.gif', 'fiestaparrot.gif', 'metalparrot.gif', 'revertitparrot.gif', 'tripletsparrot.gif', 'unicornparrot.gif']
const cartasList = []



// Pegando o número de cartas correto

function pegaNumeroDeCartas() {
    numeroDeCartas = prompt('Quantas cartas você deseja');
    while ((numeroDeCartas % 2 != 0) || (numeroDeCartas < 4) || (numeroDeCartas > 14)) {
        numeroDeCartas = prompt('Quantas cartas você deseja');
    }
    embaralhaECriaListaDeCartas()
    criarCarta(numeroDeCartas)
}

pegaNumeroDeCartas()


// Gera leque de cartas embaralhadas 

function embaralhaECriaListaDeCartas() {
    for (let i = 0; i < numeroDeCartas / 2; i++) {
        const papagaio = scrFrenteCarta[i]
        cartasList.push(papagaio)
        cartasList.push(papagaio)
    }
    console.log(cartasList)


    cartasList.sort(comparador);

    function comparador() {
        return Math.random() - 0.5;
    }

}


// Cria card

function criarCarta(numeroDeCartas) {

    for (let i = 0; i < numeroDeCartas; i++) {
        const carta = document.createElement('div');
        carta.classList.add('card')


        const frontDaCarta = document.createElement('div');
        frontDaCarta.classList.add('front-face')
        frontDaCarta.classList.add('face')

        const imagemFront = document.createElement('img');
        imagemFront.setAttribute('src', 'src/img/front.png')
        frontDaCarta.appendChild(imagemFront)

        carta.appendChild(frontDaCarta)


        const backDaCarta = document.createElement('div');
        backDaCarta.classList.add('back-face');
        backDaCarta.classList.add('face');

        const imagemBack = document.createElement('img');
        imagemBack.setAttribute('src', 'src/img/' + cartasList[i])
        console.log('src/img/' + cartasList[i])
        backDaCarta.appendChild(imagemBack)

        carta.appendChild(backDaCarta)


        mainCartas.appendChild(carta)

        carta.setAttribute('onclick', 'viraCarta(this)')

    }


}

// Evento de clicar na carta 

// Conferir número de cartas clicadas, controle

let primeiraCarta = null
let segundaCarta = null
let carta1
let carta2

function viraCarta(cartaClicada) {

    if (cartaClicada.classList.contains('clicada')) {
        return;
    }

    if (primeiraCarta === null) {
        carta1 = cartaClicada
        primeiraCarta = cartaClicada.querySelector('.front-face > img')
        cartaClicada.classList.add('clicada')
    } else if (segundaCarta == null) {
        carta2 = cartaClicada
        segundaCarta = cartaClicada.querySelector('.front-face > img')
        cartaClicada.classList.add('clicada')

        if (carta1.innerHTML === carta2.innerHTML) {
            setTimeout(()=>{
                alert('Parabéns, você acertou')
            }, 700)
            primeiraCarta = null
            segundaCarta = null
            carta1 = null
            carta2 = null 
        } else {
            setTimeout(desviraCarta, 1500)
        }
    }

}

function desviraCarta() {
    carta1.classList.remove('clicada')
    carta2.classList.remove('clicada') 
    
    primeiraCarta = null
    segundaCarta = null
    carta1 = null
    carta2 = null 
}