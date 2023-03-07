/*
Insertar y Eliminar Elementos II
    parent.insertBefore(newElement, referenceElement) - Insertar un elemento antes del elemento de referencia 

    Soporte Total
        parent.insertAdjacentElement(position, element)

        parent.insertAdjacentHTML(position, HTML)
        parent.insertAdjacentText(position, text)

    Position 
        beforebegin - Amtes de que empiece (hermano, anterior)
        afterbegin - Despues de que empiece (primer hermano)
        beforeend - Antes de que acabe (ultimo hijo)
        afterend - Despues de que acabe (hermano siguiente)

    parent.replaceChild(newChild, oldChild) - Reemplaza un hijo por otro
*/ 

const list = document.getElementById("list")
const newElement = document.createElement("li")
newElement.textContent = "Soy el elemento nuevo"

// list.insertBefore(newElement, list.children[0])

// Soporte total
// list.children[0].insertAdjacentElement("beforebegin", newElement) // - sin el "Children[]" lo que hace es meterlo fuera del "ul"
// list.insertAdjacentElement("afterbegin", newElement)
// list.insertAdjacentElement("beforeend", newElement)
// list.children[1].insertAdjacentElement("afterend", newElement)


// No se suele ver mucho
// list.children[0].insertAdjacentHTML("afterend", "<li>Elemento con HTML</li>")
// list.children[0].insertAdjacentText("afterend", "<li>Elemento de TEXT</li>") 


// Remplazando
// list.replaceChild(newElement, list.children[0])



// __________________________________________________



/*
    DOM  manipulation convenience methods - JQuery Like http://caniuse.com/#serarch=jQuery-like

    POSITION
        parent.before() - Antes de que empiece(hermano anterior)
        parent.prepend() - Despues de que empiece (primer hijo)
        parent.append() - Antes de que acabe(ultimo hijo)
        parent.after() - Despues de que acabe(hermano siguiente)

        child.replaceWith(newChild)
*/ 

//  POSITION CON JQUARY
// list.children[0].before(newElement)
// list.prepend(newElement)
// list.append(newElement)
// list.children[1].after(newElement)

    // list.children[0].replaceWith(newElement)

/*
    Clonar y eliminar elementos
        element.cloneNode(true|false) - Clona el nodo. Si le pasamos true clona todo el elemento con los hijos, si ke pasamos false clona solo el elemento sin hijos.

        element.remove() - Elimina el nodo del DOM.

        element.removeChild(child) - Elimina el nodo hijo del DOM.
*/ 

// CLONAR CON JQUARY
// list.before(list.cloneNode(true))
// list.after(list.cloneNode(true))

// Eliminar
// list.remove()

// Elimanar el nodo hijo
list.removeChild(list.children[1])