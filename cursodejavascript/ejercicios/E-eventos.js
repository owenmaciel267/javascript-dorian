const form = document.getElementById("form")
const submit = document.getElementById("submit")


form.addEventListener("keyup" , (e) =>{
    console.log(e.key);
})

submit.addEventListener("mouseenter" , (e)=>{
    submit.classList.remove("enviar", "red")
    // e.preventDefault()
    console.log("nashe     sdasdas  s da s");
})
submit.addEventListener("mouseleave" , (e)=>{
    submit.classList.remove("red", "enviar")   
    // e.preventDefault()
    console.log("no ana");
})
submit.addEventListener("dblclick" , (e)=>{
    submit.classList.remove("enviar", "red")
})
