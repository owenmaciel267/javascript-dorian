/*
    Atributos
        element.getAttribute("Atribute")
        element.setAttribute("Atribute")

    Clases  
        element.Classlist.add("class","class"...)
        element.ClassList.remove("class","class"...)
        element.ClassList.contains("class")
        element.ClassList.replace("oldClass","newClass"...)
        
        element.ClassList.toggle("class")[,force] 
    Atributos directos
        id
        value

        toggle() mostrará u ocultará los elementos con id 'target'. Dependiendo del estado (visible u oculto) del elemento con id 'target' se ocultará o mostrará, en este caso el elemento es un botón.
*/ 


const title = document.getElementById("title")
const names = document.getElementById("name")

console.log(title);
console.log(names);

// console.log("hola");

// Atributos
// console.log(names.getAttribute("type"));
// names.setAttribute("type", "date")


// Clases
// title.classList.add("owen-maciel", "Mac-lean") // agregar clases
// title.classList.remove("owen-maciel")

// if(title.classList.contains("title")){
//     console.log("Title tiene la clase -title-");
// }else{
//     console.log("Title no tiene la clase title");
// }

// title.classList.replace("title", "titulo")


// Atributos directos
// console.log(title.innerHTML); toma las etiquetas dentro del elemento
// console.log(title.textContent);

// console.log(names.value);
// console.log(names.value.length); evalua si hay algo escrito o no


