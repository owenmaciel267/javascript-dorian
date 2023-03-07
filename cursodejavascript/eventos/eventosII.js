const form = document.getElementById("form")
const input = document.getElementById("input")
const button = document.getElementById("button")

// form.addEventListener("keyup" , (e) =>{
    //     console.log(e.explicitOriginalTarget.attributes[0].nodeValue); // esto lo que dispara el id del form
    // })
    
    // button.addEventListener("click" , (e) =>{
        //     console.log(e.target);
        // })
        
        // const gallery = document.getElementById("gallery")
        // gallery.addEventListener("click" , (e) => {
//     e.target.classList.add("red")
// })
// gallery.addEventListener("dblclick" ,(e) =>{
    //     e.target.classList.remove("red", "while")
    
    // })
    
    form.addEventListener("submit", (e) =>{
        e.preventDefault()  // preventDefault() lo que hace es que no se ejecute el evento predefinida
    console.log("nashe");
})

const link = document.getElementById("link")
link.addEventListener("click" , (e) =>{
    e.preventDefault()
    
})

button.addEventListener ("click" , () =>{
    input.value =" Has hecho click"
})

// Forzando un evento
button.click()