class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad

        this.datos = `Me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad}años`
    }

    saludar(){
        return `Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`
    }
}
const juan = new Persona("Juan","Gracia",25) 
const Marta = new Persona("Marta","Gracia",24)

console.log(juan);
console.log(juan.saludar());

console.log(Marta);
console.log(Marta.saludar());
