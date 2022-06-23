//? DOM
const btnPiedra = document.getElementById("piedra");
const btnPapel = document.getElementById("papel");
const btnTijera = document.getElementById("tijera");
const btnLagarto = document.getElementById("lagarto");
const btnSpock = document.getElementById("spock");
const texto = document.getElementById("texto");
const titulo = document.querySelector("h1");
const parrafoNombre = document.createElement("p");
const input = document.querySelector('.input');
const agregar = document.querySelector('.boton_agregar');
const contenedor = document.querySelector ('.container');

class Nombre {
    constructor (nombreUsuario) {
        this.crearDiv (nombreUsuario)
    }

    crearDiv(nombreUsuario) {
        
        // creando el input de bienvenida al usuario
        let inputItem = document.createElement ('input')
        inputItem.setAttribute('type', 'text')
        inputItem.disabled = true
        inputItem.classList.add ('item-input')
        inputItem.value = `Bienvenido ${nombreUsuario}`

        // creando el nuevo div donde va a aparecer el nombre
        let nuevoDiv = document.createElement ('div')
        nuevoDiv.classList.add ('item')

        // AGREGAR ELEMENTOS (nuevodiv,inputItem)
        contenedor.appendChild (nuevoDiv)
        nuevoDiv.appendChild (inputItem)
}
}

let fnChequearInput = () => {
    if (input.value != "") {
        new Nombre(input.value);
        input.hidden = true
        agregar.hidden = true
    }
}

agregar.addEventListener("click", fnChequearInput);
input.addEventListener("keydown", function(e){
    if(e.keyCode === 13){
        fnChequearInput()
    }
})

let arrayEleccion = ["piedra","papel","tijera","lagarto","spock"] //! SE BORRO el array de objeto --> ahora solo es una array y se agrego lagarto y spock

//?constantes de elecciones
const piedra = arrayEleccion[0]
const papel = arrayEleccion[1]
const tijera = arrayEleccion[2]
const lagarto = arrayEleccion[3]
const spock = arrayEleccion[4]


//? EVENTOS click sobre cada opcion elegida
btnPiedra.addEventListener("click", () => {
    playGame(piedra)
})

btnPapel.addEventListener("click", () => {
    playGame(papel)
})

btnTijera.addEventListener("click", () => {
    playGame(tijera)
})

btnLagarto.addEventListener("click", () => {
    playGame(lagarto)
})

btnSpock.addEventListener("click", () => {
    playGame(spock)
})

//funciones



//!se agrego argumento a la fn

let fnRivalCpu = (valorCpu) => {
    
    cpu = valorCpu

    if (cpu === 0) {
        cpu = piedra //! ahora cpu llama al valor del indice del arrayEleccion
    } 
    else if (cpu === 1) {
        cpu = papel //! ahora cpu llama al valor del indice del arrayEleccion
    } 
    else if (cpu === 2){
        cpu = tijera //! ahora cpu llama al valor del indice del arrayEleccion
    }
    else if (cpu === 3){
        cpu = lagarto //! ahora cpu llama al valor del indice del arrayEleccion
    }
    else if (cpu === 4){
        cpu = spock //! ahora cpu llama al valor del indice del arrayEleccion
    }

    return cpu
}


//!se agrego arg a la fn
let fnUsuario = (valorUsuario) => {
    
    // valorUsuario = prompt("Piedra, Papel o Tijera").toLowerCase()
    eleccion = valorUsuario

        //! se cambio el if por un SWITCH y se agrego un WHILE para que vuelva a ingresar una opcion
        while(eleccion){
            switch(eleccion){
                case "piedra":
                    return eleccion = piedra
                    
                case "papel":
                    return eleccion = papel
                
                case "tijera":
                    return eleccion = tijera
                
                case "lagarto":
                    return eleccion = lagarto
                
                case "spock":
                    return eleccion = spock
            }
        }
    }

//!se cambie el if por un condicional SWICHT y se manipulo el DOM
let fnVersus = () => {

    if(cpu===eleccion){
        texto.innerHTML = `¡EMPATASTE! ambos eligieron ${eleccion}`
        texto.style.backgroundColor = "orange"
        texto.style.color = "white"
    } 

    else if ((cpu === "piedra" && eleccion === "papel") || (cpu === "piedra" && eleccion === "spock") || (cpu === "papel" && eleccion === "tijera") || (cpu === "papel" && eleccion === "lagarto") || (cpu === "tijera" && eleccion === "piedra") || (cpu === "tijera" && eleccion === "spock") || (cpu === "lagarto" && eleccion === "piedra") || (cpu === "lagarto" && eleccion === "tijera") || (cpu === "spock" && eleccion === "papel") || (cpu === "spock" && eleccion === "lagarto")) {
        
        texto.innerHTML = `¡GANASTE!, la cpu eligio ${cpu}`
        texto.style.backgroundColor = "green"
        texto.style.color = "white"
    } 
    else if ((eleccion === "piedra" && cpu === "papel") || (eleccion === "piedra" && cpu === "spock") || (eleccion === "papel" && cpu === "tijera") || (eleccion === "papel" && cpu === "lagarto") || (eleccion === "tijera" && cpu === "piedra") || (eleccion === "tijera" && cpu === "spock") || (eleccion === "lagarto" && cpu === "piedra") || (eleccion === "lagarto" && cpu === "tijera") || (eleccion === "spock" && cpu === "papel") || (eleccion === "spock" && cpu === "lagarto")) {
        
        texto.innerHTML = `¡PERDISTE!, la cpu eligio ${cpu}`
        texto.style.backgroundColor = "red"
        texto.style.color = "white"
    }
}


//Juego
let playGame = (opcionUsuario) => {

        let largoArray = arrayEleccion.length //!se movio de lugar la variable
        let cpu = Math.round(Math.random()*(largoArray-1)) //!se movio de lugar la variable
        let eleccion = opcionUsuario //!//!se movio de lugar la variable
        
        fnRivalCpu(cpu) //!se coloco argumentos a la fn
        fnUsuario(eleccion) //!se coloco argumentos a la fn
        fnVersus()
    }

    
