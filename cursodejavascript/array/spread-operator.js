/*
    Spreen Operator (Operador de expansion)

    su sintaxis es: ...
*/ 

// const numbers = [-12, 2, 3, 23, 43, 2, 3]
// console.log(...numbers);


// Enviar elementos en un array a una funcion
// const addNumbers = (a,b,c) =>{
//     console.log(a+b+c);
// }
// addNumbers(1,2,3)

// let numbersToadd = [1,2,3]

// addNumbers(...numbersToadd)

// _____________________________

// Añadir un array a otro array 
// let user = ["Javier", "David", "Rosa", "Juan", "Mercedes"]

// let newUsers = ["Maria", "Jaime", "Laura"]

// user.push(...newUsers)
// console.log(user);


// _____________________________


// Copiar arrays
// let arra1 = [1,2,3,4,5 ]
// let arra2 = [...arra1]
// console.log(arra2);


// _____________________________

// Concatenar arrays
// let arra1 = [1,2,3,4,5 ]
// let arra2 = [6,7,8]

// let arrConcat = [...arra1, ...arra2]
// console.log(arrConcat);

// _______________________________


// Enviar un numero indefinido de argumentos a una funcion
// const numbers = [-12, 2, 3, 23, 43, 2, 3]
// const restParms = (...numbers) => {
//     console.log(numbers);
// }

// restParms(1,2,3)

// ____________________________

// Liberar math
const numbers = [-12, 2, 3, 23, 43, 2, 3]
// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));

// ______________________________

// Eliminar elementos duplicados
console.log([...new Set(numbers)]);
