/*
    Recorrer el DOM

    Padre - parent (Node del que desciende)
        - parentNode - Devuelve el node padre (que puede o no ser un elemento)
        - parentElement - Devuelve el node elemento padre

        NOTA
        Los nodos del tipo Document y DocumentFragment nunca van a tener un elemento padre, parentNode devolvera siempre null

    Hijos - child (Node que disciende de un padre)
        - childNodes - Devuelve todos los node hijos
        - children - Devuelve todos los nodos elemento hijos.
        - firstChild - Devuelve el primer node hijo
        - firstElementChild - Devuelve el primer nodo elemento hijo.
        - lastChild - Devuelve el ultimo nodo hijo
        - lastElementChild - Devuelve el ultimo nodo elemento hijo 
        hasChildNodes() - Devuelve true si el nodo tiene hijos y false si no tiene 

    Hermanos - siblings (Nodo al mismo nivel)
        - nextSibling - Devuelve el siguiente nodo hermnao 
        - nextElementSibling
        - previousSibling
        - previousElementSibling
    
    Cercano(selector) - Selecciona el nodo mas cercano que cumpla con el selector, aun que es experimental
*/ 

const parent = document.getElementById("parent")

// Padre
// console.log(parent.parentElement);

// Hijos
// console.log(parent.childNodes) // devuelve todos los nodo hijos
// console.log(parent.children); // devuelve todos los elementos hijos
// console.log(parent.firstChild); // devuelve el primer nodo hijo
// console.log(parent.firstElementChild); //devuelve el primer elemento hijo
// console.log(parent.lastChild); // devuelve el ultimo node hijo
// console.log(parent.lastElementChild); // devuelve el ultimo node elemento hijo
// console.log(parent.hasChildNode); // Devuelve true si el nodo tiene hijos y false si no tiene 


// Hermanos
console.log(parent.nextSibling); // Devuelve el siguiente node hermano
console.log(parent.parentElement.nextElementSibling);
console.log(parent.previousSibling);
console.log(parent.parentElement.previousElementSibling); // primero hay que ver si ese elemento tiene un hermano sino deberemos saltar al padre de ese elemento/node

// La forma de buscar hermanos es:
// con "next" hacia abajo y "previous" hacia arriba