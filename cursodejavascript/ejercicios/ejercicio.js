/*
    Ordena 3 numero de mayoe a menor
    Permutaciones con 3 elementos
    Posibilidades 3! = 3*2*1
    abc - 321
    acb - 312
    bac - 231
    bca - 123
    cab - 213
    cba - 123

*/

const numers = document.getElementById('numbers');//document.getElementById -> sirve para agarrar una etiqueta del html
const result = document.getElementById('result');

let a = prompt ('Introduzca el primer numero'); // "prompt-> sirve para pedir un numero por pantalla"
let b = prompt ('Introduzca el segundo numero');
let c = prompt ('Introduzca el tercer numero');

numers.textContent = `Los numeros introducidos son ${a}, ${b}, ${c}`

//ejercicio

if (a>=b && a>=c){
    if (b>c){
        result.textContent = `El resultado es ${a}, ${b}, ${c}` // text.Content -> Sirve para imprimero un elemento en el html
    }else{
        result.textContent = `El resultado es ${a}, ${c}, ${b}`
    }
}else if (b>=a && b>=c){
        if(a>c){
            result.textContent = `El resultado es ${b}, ${a}, ${c}`
        }else{
            result.textContent = `El resultado es ${b}, ${c}, ${a}`
        }
}else if (c>=a && c>=b){
    if(a>b){
        result.textContent = `EL resultado es ${c}, ${a}, ${b}`
    }else {
        result.textContent = `El resultado es ${c}, ${b}, ${a}`
    }
}
