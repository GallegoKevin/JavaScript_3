//THIS

const person = {
    name: 'Diego',
    lastName: 'Perez',
    fullName(){
        return `Hola soy ${this.name} ${this.lastName}`;
    },
};

//devuelve las propiedade
console.log(Object.keys(person));

//devuelve los valores
console.log(Object.values(person));

//devuelve propiedad : valor 
console.log(Object.entries(person));