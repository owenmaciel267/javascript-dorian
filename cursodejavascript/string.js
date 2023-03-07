/*
Propiedades 

    length -> Devuelve la longitud de una cadena 
*/ 
let cadena = "Hola mundo ";

// console.log(cadena.length);


/*
    MEtodos 
    Todos los metodos devuuelvem una cadena nueva, la cadena original no se modificada

    toUpperCase() -> Devulve ña cadena a mayusculas

    ToLowerCase(); -> Devuelve la cadena en minuscula.

    indexOff(string) -> Devuelve la posicion en la que se encuentra el string, si no lo encuentra devuelve -1.

    replace (valor a busca, valor nuevo) -> Remplaza eñ fragmento de la cadena que le digamos y pone el valor nuevo

    substring (inicio [,Fin]) -> Entra los caracteres desde inicio hasta fin (el final no se incluye)

    Si no se incluye el final extra hasta el final.
    slice(inicio [,final]) -> igual que substring pero admite valores negativos, si ponemos valores negativos empezara desde atras 
        Si no se incluye el final extrae hasta el final

        (2, 4) -> Empieza a contar en el tercer caracter y los 4 ultimos no lo sonidera


    trim() -> Elimina los espacios al inicio y al final de la cadena

    --ES6--

    strarsWith(valor [,inicio])-> Sirve para saber si la cadena empieza con ese valor. Devuelve true o false.

    endsWith(valor[,longitud])-> Sirve para saber si la cadena termina con ese valor. Devuelve true o false.

    includes(valor[,inicio])-> Igual que indexOf Pero devuelve true o false.

    repeat(valor) ->Repite el string el numero de veces que le indiquemos

*/

// Asi se guarda una variable
// let cadenaMayudcula = cadena.toUpperCase();
// console.log(cadenaMayudcula);
// console.log(cadena.toUpperCase());

// ____________________________

// console.log(cadena.toLowerCase());

// ____________________________


// console.log(cadena.indexOf("Hola"));

// ____________________________

// console.log(cadena.replace(" mundo ",  " Como estas "));

// ____________________________

// console.log(cadena.substring(4, 8));
// console.log(cadena.substring(4));

// ____________________________


// console.log(cadena.slice(3, -3));

// ____________________________

let cadena1 = " Hola mi gente que onda por ahi  "

// console.log(cadena1.trim());

// console.log(cadena.startsWith("H"));

// console.log(cadena.endsWith("m",6));

// ____________________________


// console.log(cadena.endsWith("o"));
// console.log(cadena.endsWith("a",4 ))

// ____________________________

// console.log(cadena.includes("a",2));

// ____________________________

// let cadena2 = " Hola";

// console.log(cadena2.repeat(4));

// ____________________________


// Template String

let nombre = " Jorge";
let apellido = " Mac lean";
let edad = 40;

// Eso seria de la manera larga
console.log("hola "+nombre+" "+apellido+" Tienes "+edad+" años")



// Pero asi es con Template
console.log(`Hola ${nombre} ${apellido} tienes ${edad} años.`);

console.log(`Hola ${nombre} ${apellido} tienes ${edad+1} años.`);