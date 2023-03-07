/*  DOM - Crear e insertar elementos

    Crear un elemento: document.createElement(element).
    Escribir texto en un elemento: element.textContent = texto.
    Escribir HTML en un elemento: elemente.innerHTML = codigo HTML

    Añadir un elemento al DOM: parent.appendChild(element)
    
    Fragmento de codigo: document.createDocumentFragment()
*/ 

const days =["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]

const title = document.getElementById("title")
const daysList = document.getElementById("daysList")
const selectDays = document.getElementById("daysSelect")



// Crear un element
// const itemList = document.createElement("li")
// Escribir en un elemento
// itemList.textContent = "Lunes"
// Agregar al HTML
// dayslist.appendChild(itemList)

// console.log(itemList);



title.innerHTML = "Dom - <span>Crear e insertar elementos I<span>"


// recorriendo el array y agregando los item del array
// for(const day of days){
//     dayslist.innerHTML += `<li>${day}</li>`
// }


const fragment = document.createDocumentFragment()

for(const day of days){
    const itemList = document.createElement("LI")
    itemList.textContent = day
    fragment.appendChild(itemList)
}



const fragment2 = document.createDocumentFragment()
daysList.appendChild(fragment)

for(const day2 of days){
    const selectIteam = document.createElement("option")
    selectIteam.textContent = day2
    fragment2.appendChild(selectIteam)
}
selectDays.appendChild(fragment2)


