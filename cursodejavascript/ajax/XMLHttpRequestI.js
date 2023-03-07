// Ptotocolo HTTP:
// https://es.wikipedia.org/wiki/Protocolo de transfe
// rencia_de_hipertexto */
// Codig0s de estado de respuesta HTTP:
// https://developer . mozilla.
// org/es/docs/Wleb/HTTP/Status/

const button = document.getElementById("button")

button.addEventListener("click", ()=> {
    let xhr
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest()
    }else{
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/ditto")

    xhr.addEventListener("load", (data)=>{
        console.log(data);
    })

    xhr.addEventListener("load", (data)=>{
        dataJSON(JSON.parse(data.target.response))

        for(const info of dataJSON){
            const ListIntem = document.createElement("LI")
            ListIntem.textContent = `${info.id} - ${info.name}`
            ListIntem.appendChild(ListIntem)
        }
    })

    xhr.send()
})