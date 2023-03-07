/*
    Operador Ternario

    Se utiliza cuando una condicion sera true o false, al igual que el if.
    Su ejecucion puede tener una o varias sentencias, en este casi iran separados por comas y entre parentesis

    (Condicional)? true : false

    (Condicional)?
            (Primera sentencia,
            Segunda sentencia)
            :
            (Primera sentencia,
            Segunda sentencia)

*/

let num = 2;

// (num % 2 == 0)?
//     console.log(`${num} es par`)
//     :
//     console.log(`${num} no es par`);


    (num % 2 == 0)?
    (
        console.log(`${num} es par`),
        console.log(`${num} es par 2`)
    )
    :
    (
        console.log(`${num} no es par`),
        console.log(`${num} no es un numero par`)
    )
