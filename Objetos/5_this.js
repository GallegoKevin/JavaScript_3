//THIS

const user2 = {
    name: 'Diego',
    lastName: 'Perez',
    fullName(){
        return `Hola soy ${this.name} ${this.lastName}`;
    },
};

//devuelve las propiedade
console.log(Object.keys(user2));

//devuelve los valores
console.log(Object.values(user2));

//devuelve propiedad : valor 
console.log(Object.entries(user2));