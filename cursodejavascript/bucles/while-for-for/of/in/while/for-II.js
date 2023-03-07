/*
    Bucle for of / for in

    simplifica el bucle for tradicional sin tener que darle un numero de vueltas ni realizar un incremento.

    let name = ["Paco","Jose","Paula","Maria"]

    for(let name of names){
        console.log(name);
    }

    for(let name in names){
        console.log(name);
    }

    Palabras reservadas

        break - Rompe el bucle
        continue - Se salta la(s) posiciones que le indiquemos y despues continua su ejecucion
*/

let names = ["Paco","Jose","Paula","Maria"];

// for(let name of names){
//     console.log(name);
// }

// for(let index in names ){
//     console.log(index);
// }


// for(let i=0; i < names.length; i++){
//     if (names[i]==="Paula"){
//         break
//     }
//     console.log(names[i]);
// }
//:__________________

for(let name of names){
    if (names==="Paula"){
        continue
    }
    console.log(name);
}

for(let index in names){
    if(names[index]==="Paula"){
        continue
    }
    console.log(index);
}