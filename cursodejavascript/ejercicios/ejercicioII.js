//Ejercicio 1 pedir nombre/edad y deciar cuantos años tendra el año que viene


// let nombre = prompt("Indique su nombre");
// let edad = parseInt(prompt("Indique su edad"));

// let mas = 3;

// console.log(`Hola  "${nombre}" su edad es ${edad} y el año que viene tendra ${edad+1}`);



// Ejercicio2 calcular el area de una figura

// let figura = prompt("Ingrese cual de las siguiente figuras desea calcular su area: triangulo, restangulo u circulo");

// let base;
// let altura;
// let radio;


// switch(figura){
//     case  'triangulo':
//         base=prompt("Ingresa la base del triangulo")
//         altura=prompt("Ingresa la altura del triangulo")

//         console.log(`El area de un triangulo es de ${(base*altura)/2}`);
//             break;

//     case "restangulo": 
//         base=prompt("Ingresa la base del restangulo")
//         altura=prompt("Ingresa la altura del restangulo")

//         let r2 = base*altura;
//         console.log(`EL area de un restangulo es de ${r2}`);
//             break;
    
//     case "circulo":
//         radio=prompt("Ingresa el radio del circulo");

//         console.log(`El area del circulo es ${Math.PI * Math.pow(radio,2)}`);
//         break
    
//     default:
//         console.log("Este dato no es aceptado");
//             break;
// }



//Ejercicio 3 pedir un numero y ver si es par o no

// let numero = parseInt(prompt("introduce un numero"))

// for(let i=1 ; i<=numero ; i++){
//     if(i%2==0){
//         console.log(`${i} - es par`);
//     }else{
//         console.log(`${i} - no es par`);
//     }
// }



//Ejercicio 4 Pedir un numero y ver si es primo o no 


// let num = parseInt(prompt("introduce un numero"))
// let divisores = 0


// if(num === 1){
//     console.log("El numero no es primo");
// }else{
//     for(let i=2; i<num; i++){
//         if(num % i==0){
//             console.log(`${num} / ${i} = ${num/i} No es primo`);
//             divisores++
//             break;
//         }
//     }
// }

// if(divisores===0){
//     console.log(`${num} es primo`);
// }


//Ejercicio5 escribi un programa que pida un numero entero mayor qie cero y calcule su factorial

// let num = parseInt(prompt(" Ingrese un numero"))
// let result=1


// for(let i=num ; i>0; i--){
//     result *= i 
// }
// console.log(`El factorial de ${num} es ${result}`); 



//ejercicio 6 Escribe un programa que permita ir introduciendo una serie indeterminada de numero mientreas su suma no supere 50

// let suma=0;
// let cont=0;

// while (suma<50){
//     suma +=parseInt(prompt("introduce un numero para añadir a la suma")) 
//     cont++
// }
// console.log(`La suma total es de :${suma}`);
// console.log(`La cantidad de numero introducidos es de ${cont}`);




//Ejercicio 8 crea 3 array el primero tendra 5 numero el segundo se llamara pares y el tercero imprares

// const num=[3,43,21,20,56]
// let pares=[]
// let impares=[]


// for(const number of num){
//     let random = Math.round(Math.random()*10+1)
//     const result= number*random

//     console.log(`${number} * ${random} = ${result} `);

//     if(number%2===0){
//         pares.push(result)
//     }else{
//         impares.push(result)
//     }
// }
// console.log(num);
// console.log(pares);
// console.log(impares);


// Ejercicio 8 Dado un array de letras, solicita un numero de DNI y calcula que letra le corresponde el numero no puede ser negativo ni tener mas de 8 digitos. la posicion de la letra es el resultado del modulo del numero introducido entre 23
    
    // const letras =["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"]


    // const dni = prompt("introduce tu Dni")

    // if(dni.length==8 && parseInt(dni)>0 ){
    //     console.log(`Su DNI es ${dni}${letras[dni%23]}`);
    // }

    //Ejercicio 9 Solicita al usuario una palabra y mostrar pór consola el numero de consonantes, vocales y logitud de la palabra


    // const palabra = prompt("Introduce una palabra").toLocaleLowerCase()

    // let consonantes=0
    // let vocales=0

    // for(const letra of palabra ){
    //     if(letra=="a" || letra=="e" || letra=="i" || letra=="o" || letra=="u"){
    //         vocales++
    //     }else{
    //         consonantes++
    //     } 
    // }
    // console.log(`Tu palabra tiene ${vocales} vocales, y tiene ${consonantes} consonantes  y tiene un total de ${palabra.length()} letras`);


    //Ejercicio 10 Dadp im array que contiene ["azul", "amarillo", "rojo" , "verde", "rosa"] determina si un color introducido por el usuario a traves de un prompt se encuentra dentro de un array o no.

    const colores=["azul", "amarillo", "rojo" , "verde", "rosa"]
    const color =prompt("introduce un color").toLocaleLowerCase()

    if(colores.indexOf(color) != -1){
        console.log(`Tu color se encuentra en el arrat`);
    }else{
        console.log(`Tu color no esta definido`);
    }