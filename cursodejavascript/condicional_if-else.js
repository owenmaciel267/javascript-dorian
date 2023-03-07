// condicional simple

// let num = 5;

// if (num>0){
//     console.log(`${num} es mayor a 0`);
// }


// Condicional compuesta


// if(num1>= 0){
    //     console.log(`${num1} Es mayor que 0`);
    // }else{
        //     console.log(`${num1} Es menor que 0`);
        // }
        
// Condicional multiple
        
let num1 = 0;
let num2 = 5;



// if(num1>0){
//     console.log(`${num1} Es mayor que 0`);
// }else if(num1<0){
//     console.log(`${num1} Es menor que 0`);
// }else{
//     console.log(`${num1} Es igual a 0`);
// }


// Operadores logicos

/*
    && -> And
*/ 
/*
    ||-> o
*/ 
//Tambien se puede anidar if, que seria poner un if dentro de otro if.

// if (num1 && num2 > 0) {
//     console.log(`${num1} y ${num2} son mayores a 0`);
// }


let palabra = "holaa";

if (palabra.length> 4){
    console.log(`${palabra} tiene mas de cuatro letras`);
}else if (palabra.length < 4){
    console.log(`${palabra} tiene menos de 4 letras`);
}else {
    console.log(`${palabra} tiene 4 letras`);
}