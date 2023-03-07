/*
    Estructura del switch

    switch (evaluacion){
        case n1:
            codigo
            break;
        case n2:
            codigo
            break;
        ...
        default:
            codigo
            break;
    }


*/

let num = 2;


//sintaxis simple
switch(num){
    case 1:
        console.log(`${num} es el valor 1`);
    break;
    case 2:
        console.log(`${num} es el valor 2`);
    break;
    default:
        console.log(`${num} no es ni el valor 1 ni el 2`);
    break;
}


//sintaxis multiple

switch(num){
    case 1:
    case 3:
    case 5:
        console.log(`${num} es impar`);
    break;
    case 2:
    case 4:
        console.log(`${num} es par`);
    break;

}

// sintaxis multiple encadenada 


