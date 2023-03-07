/*
- Son estructuras que nos permiten almacenar varios datos y agruparlos.
- Se puede llenar con cualquier tipo de dato valido en JavaScript y deben ir separados por comas 
- Se puede mezclar tipos de datos, pero no es recomendable.
- Se declara con llaves cuadradas o corchete []
- Pueden declararse vacias o con un contenido ya establecido 
- Piedem añadirse o eliminarse en el momento que querramos 

    let array = [] // array vacio
    let numero = [1,2,3,4,5] //Array con contenido inicial
*/

// let numero=[1,2,3,4,5];
// console.log(numero);
// console.log(numero[4]);


// let palabra = ["hola", "estamos", "en", "casa"];
// console.log(palabra);
// console.log(palabra[0]);

// console.log(`La palabra "${palabra[1]}" tiene ${palabra[1].length} letras`);


//-_________________________-

/*
Array - Propiedades
.length - Devuelve el numero de posiciones que tiene el array

_________________________

Array - Metodos
Array.isArray(variable a evaluar) - Devuelve true si la valirable es un array.

-------------------------

        Eliminar un elemento
        .shift() - Eliminar el primer elemento del array y devuelve ese elemento.
        .pop() - Elimina el ultimo elemento del array y devuelve ese elemento.
        
        -_____________________-
        Añadir elementos 
        .push(element1, element2,...) - Añade uno o mas elementos al final del array y devuelve la nueva longitud.
        .unshift(elememt1, element2,...) - Añade uno o mas elementos al comienzo del array devuelve la nueva longitud. 
        
        */
    let numero=[21,2,3,4,5];

       //propiedades
    // console.log(numero.length);
    
///________________________

       //metodos
    let number = 4;
    // console.log(Array.isArray(number));
    // console.log(Array.isArray(numero)); -> isArray evalua si es un array

///_____________________________________

    // Eliminar un elemento

    // El elemento que eliminamos podemos guardarlo en una variable
    // let deleteElement = numero.shift();

    numero.shift(); // Elimina el primer elemento 
    console.log(numero);
    numero.pop();
    console.log(numero); // Elimina el ultimo elemento

///______________________________

    // Añadir elementos 
/*
    Podemos asignar en modo de variable el valor que agreguemos en el array.
    let newLength = numero.unshift
*/


    console.log(numero);
    numero.push(5,6, 1); // push añade un elemento al final del array
    console.log(numero);

    numero.unshift(0,1); // unshift añade elementos al inicio del array
    console.log(numero);


    //como buscar un alemento en el array

    /*
        .indexOf() - Devuelve el primer indice del elemento que coincide con el valor especificado, o -1 si ningun valor es encontrado.
    */ 
    console.log(numero.indexOf(6));
    // Esto busca el primer numero en especifico/letra/palabra

    /*
        .lastIndexOf() - Devuelve el ultimo indece del elemento que coincida con el valor especifico, o -1 si ningun elemento es enxontrado.
    */ 
    console.log(numero.lastIndexOf(1));
    // Este funciona igual que el anterior pero con la diferencia que empieza desde atras.

    /*
        .reserve() - Invierte el orden de los elementos del array.
    */
    console.log(numero.reverse());
    console.log(numero.reverse());

    /*
        .join(separador) - Devuelve un string con el separador que indiquemos, por defecto son comas.
    */ 
    console.log(numero.join("-"));
    // Esto se puede guardar en una variable
    // let arrayString = numero.join("-");



    /*
        .splice(a,b, items) - Cambia el contenido de un array eliminando elementos existentes y/o agrega nuevos elemento.
            a - indice de inicio
            b - numero de elemento(opcional)
            items - elementos a añadir en el caso de que se añadan.(opcional)
    */ 
    console.log(numero);
    // numero.splice(3); Elimina desde la posicion "a" hasta el final
    // numero.splice(2,2) Elimina desde la posicion "a" los numeros de valores que le indiquemos 
    numero.splice(2,2,10); // Si "b" es un valor distinto de 0 elimina el numero de calores que indiquemos en "b" y añade los valores de items a partir de la posicion "a"
    // Pero si no queremos que se elimine nada debemos poner el valor de "a", el valor de "b" tiene que ser 0 y en items se agrega lo que querramos
    console.log(numero);

    /*
        .slice(a,b) - Extrae elementos de un array desde el indice "a" hasta el indice "b". Si no existe "b" lo hace desde "a" hastas el final, si no existe ni "a" ni "b" hace una copia del original.
    */ 
    let newnumero = numero.splice(2);
    console.log(numero);
    console.log(newnumero);
