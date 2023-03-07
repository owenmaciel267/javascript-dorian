/*
    Eventos de raton:
        click - Cuando pulsamos el boton izquierdo del raton
        dblclick - Cuando pulsamos dos veces seguidos el boton izquierdp del raton
        mouseenter - Cuando entramos en la zona que tiene el evento
        mouseleave - Cuando salimos de la zona que tiene el evento
        mousedown - Cuando pulsamos  el boton izquierdp del raton
        mouseup - Cuando soltamos el boton izquierdo del raton
        mousemove - Cuando movemos el raton dentro del evento

    Eventos de teclado
        keydown - cuando pulsamos una tecla 
        keydoup . Cuando soltamos una tecla 
        keypress - Cuando pulsamos una tecla y no la soltamos 
*/ 



const button = document.getElementById("button")
const box = document.getElementById("box")
const input = document.getElementById("input")


// Eventos de raton.
// button.addEventListener("click" ,() => {
//     console.log("Click");
// })

// button.addEventListener("dblclick", () => {
//     console.log("Doble click");
// })

// box.addEventListener("mouseenter", () =>{
//     box.classList.replace("red", "green")
// })

// box.addEventListener("mouseleave", () => {
//     box.classList.replace("green", "red")
    
// })

// box.addEventListener("mousedown", () => {
//     console.log("Has pulsado la caja");
// })
// box.addEventListener("mouseup", () =>{
//     console.log("Has soltado el boton izquierdo en la caja");
// }) //Esto sule servir mucho cuando usamos apis


// box.addEventListener("mousemove", () => {
//     console.log("Estas moviendo el mouse en el box");
// })



// Eventos de teclado
// input.addEventListener("keydown", () => {
//     console.log("Has precionado una tecla");
// })
// input.addEventListener("keyup", () => {
//     console.log("Has soltado una tecla");
// })
// input.addEventListener("keypress", () => {
//     console.log("Estas manteniendo pulsada una una tecla");
// })