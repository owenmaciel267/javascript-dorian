const button = document.getElementById("button")

/*
Objeto window - Es el objeto global, de el desciende todos los objetos
    alert()
    prompt()
    confirm()
*/ 
// alert("nashe")


/*
    Objetos console - Es el objeto que contine la consola del navegador 
        https://developer.mozilla.org/es/docs/Web/API/Console
        console.log()
        console.dir()
        console.error()
        console.table()
*/ 
const person = {
    name: "Owen",
    age: 19,
    email: "owen2maciel@gamil.com"
}
// console.log(button);
// console.table(person);


/*
    Objeto location - Es el objeto que contiene la barra de direcciones
        https://developer.mozilla.org/es/docs/Web/API/Location
        location.href
        location.protocol
        location.host
        location.pathname
        location.hash
        location.reload()
*/ 
// console.log(location.href);
// console.log(location.protocol);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.hash);
// console.log(location.reload());


/*
    Objeto history
        https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador
        
        back()
        forward()
        go(n|-n)

        length
*/ 

/*Objeto date
    https://developer.mozilla.org/es/docs/JavaScript/Referencia/Objetos_globales/Date

    https://www.w3chools.com/jsref/jsref_obj_date.asp
*/ 
// const date = new Date ()

// console.log(date);

/*
Timers
    timers:
        https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWirkerGlobalScope/setTimeout

        setTimeout(()=>{code}, delay-in-,miliseconds) - Hace que se ejecute la funcion despues de delay. si lo referenciamos mediante una variable/constante podemos pararlo con clearTimeout(referencia)

        Interval:
        https://developer.mozilla.org/en-Us/docs/Web/API/WindowOrwokerGlobalScope/setInterval

        setInterval(()=>{code}, delay-in-miliseconds)- Hace que se ejecute la funcion cada delay milisegundos. Si lo referenciamos mediante una variable/constante podemos paralo con clearInterval(referencia)
    
*/ 

// setTimeout
// button.addEventListener("click" , () => {
//     setTimeout(saludar, 3000) // Si la funcion es externa no es necesario el parentesis ni la flecha
//     setTimeout(() =>{
//         console.log("Adios");
//     }, 4000)
// })

// const timeout = setTimeout(() =>{
//     console.log("Adios");
// }, 4000)

// button.addEventListener("click", () =>{
//     clearTimeout(timeout)
//     setTimeout(saludar,1000)
// })


const saludar = () =>{
    console.log("Hola")
}


// setInterval
let cont = 0

// const interval = setInterval(saludar, 3000);

const intervall = setInterval(() => {
    console.log(cont);
    cont++
},1000)

button.addEventListener("click", ()=>{
    clearInterval(intervall)
})
