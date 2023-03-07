/*
    Array - Metodos II

    .form(iterable) - Convierte en array el elemento iterable

    .sort([callback]) - Ordena los elementos de un array alfabeticamente(valor unicode), si le pasamos un callback los ordena en funcion del algoritmo que le pasemos.

    .forEach(callback(currenValue, [index])) - Ejecuta la funcion indicada una vez por cada elemento del array

    .some(callback) - Comprueba  si a menos un elemento del array cumple la condicion 

    every(callback) - Comprueba si todos los elementos del array cumplen la condicion

    .map(callback) - Transform todos los elementos del array y devuelve un nuevo array 

    .filter(callback) - Filtra todos los elementos del array que cumplan una condicion y devuelve un nuevo array

    .reduce(callback) - Recuce todos los elementos del array a un unico valor

*/


// ___________________________

//form
// let word = "Hola mundo"

// console.log(Array.from(word));
// console.log(word.split(" "));


// ___________________________

//sort
// const letters = ["b", "c", "z" ,"a"]
// const numbers = [1,8,100,300,3 ]

// console.log(letters.sort());
// console.log(numbers.sort((a,b)=>a-b));


// ___________________________

//forEach
// const numbers = [12, 25, 47, 84, 98]

// numbers.forEach((numero)=>console.log(numero))

// numbers.forEach((numero, index)=>
//     console.log(`${numero} esta en la posicion ${index}`))


// ___________________________

//some - every

// const words = ["HTML", "CSS", "JavaScript", "PHP"]

// console.log(words.some(words => words.length>2));
// console.log(words.every(words => words.length>3));


// ___________________________

//map
// const numbers = [12, 25, 47, 84, 98]
// numbers.map((numbers) => console.log(numbers*2))

// const numbers2 = numbers.map((numbers) => numbers*2)
// console.log(numbers2);

// ___________________________

//filter
// const numbers = [12, 25, 47, 84, 98]
// const numbers2 = numbers.filter((number)=>number>80)
// console.log(numbers2);

//____________________________ 

//reduce
// const numbers = [12, 25, 47, 84, 98]
// console.log(numbers.reduce((a,b)=>a+b));

const users =[
    {
        name : "user1",
        online: true
    },
    {
        name : "user2",
        online: false
    },
    {
        name : "user3",
        online: true
    },
    {
        name : "user4",
        online: false
    },
    {
        name : "user5",
        online: true
    },
    {
        name : "user6",
        online: false
    }
]

const usersOnline = users.reduce((cont, user) => {
    if(user.online) cont++
    return cont
},0)
console.log(`Hay ${usersOnline} usuarios conectados`);