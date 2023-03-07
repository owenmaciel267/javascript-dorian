/*
    Crea una clase libro 
    La clase libro tendra titulo, autor, año y genero.
    Crea un metodo que devuelva toda la informacion del libro 
    Pide 3 libros y guardalos en un array
    Los libro se intrudciran al arrancar el programa piediendo los datos con prompt.
    Validar que los campos no se introduzcan vacios
    Validar que el año sea un numero y que tenga 4 digitos
    Validar que el genero sea: aventuras, terror o fantasia
    Crea una funcion que muestre los autores ordenados alfabeticamente 
    Crea una funcion que pída un genero y muestre la informacion de los libros que pertenezca a ese genero usando genero usado un el metodo que devuelva la informacion
    */ 


    class book{
        constructor(title, author, year,gender){
            this.title = title
            this.author = author
            this.year = year
            this.gender = gender
        }
        getAuthor(){
            return this.author
        }
        getGender(){
            return this.gender
        }

        bookInfo(){
        return `${this.title} es un libro de ${this.gender} escrito en el año ${this.year} por ${this.author}`
        }
    }


    let books =[]


    while(books.length < 3 ){
        let title=prompt("Introduce el titulo del libro")
        let author=prompt("Introduce el nombre del autor")
        let year=prompt("Introduce en el año que se escribio")
        let gender=prompt("Introduce el genero del libro").toLowerCase()

        if(title != "" 
            && author != "" 
            && !isNaN(year) 
            && year.length == 4 
            && (gender == "aventura" || gender == "terror" || gender
            == "fantasia" )) {

            books.push(new book(title, author, year, gender))
        }
    }


    const showAllBooks = () => {
        console.log(books);
    }

    // Autores ordenados alfabeticamente
    const showAuthor = () => {
        let authors = []

        for(const book of books){
            authors.push(book.getAuthor());
        }
        console.log(authors.sort());
    }

    // buscar genero
    const showGender = () =>{
        const gender = prompt(" Introduce un genero a buscar")

        for(const book of books){
            if(book.getGender() == gender){
                console.log(book.bookInfo());
            }
        }

    }

    // ShowAllBooks() 
    // showAuthor()
    showGender()

