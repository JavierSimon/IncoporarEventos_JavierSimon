//?corecciones a realizar

    /* 
    !1) La estructura arrayEleccion podria ser simplemente un array y generar la elección aleatoria del CPU en base a la posición redondeada (0, 1 o 2).

    !2) Para seguir buenas practicas y ordenar el codigo, podrias generar las variables del proceso directamente dentro del bucle (cpu y eleccion). 
    !De esta manera podrias colocar argumentos en las funciones fnRivalCpu y fnUsuario para utilizarlas en orden a la selección del usuario en cada ronda.

    !3) Respecto a los condicionales if/else dentro de las funciones: 

        !a) dentro de la funcion fnRivalCpu deberias tomar como argumento el numero aleatorio generado y simplemente devolver el resultado en orden al array base "arrayEleccion"

        !b)dentro de las funciones fnUsuario y fnVersus, seria mas apropiado utilizar un condicional switch en lugar de if/else

    *4) Deberias realizar un uso apropiado de objetos y arrays. Una idea para implementarlo seria construyendo una tabla de posiciones (tomar nombre del usuario, controlar cuantas rondas gana por bucle. En base a esto crear un constructor que genere el ranking del usuario en un objeto y colocarlo en un array "posiciones". En caso de que el usuario lo solicite, podria consultar la tabla y el proceso devolver este array ordenado por mayores rondas).
    */

    // Piedra papel o tijera

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

    
