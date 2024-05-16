//Definición del Objeto

const person = {
    name: 'Juan',
    lastName: 'Perez',
    age : 30,
    jobTitle: 'Full Stack Developer',
    account : {
       name: 'Interbank',
       Number: 'CCI',
    },
};

// Congelar un Objeto

Object.freeze(person);
person.name = 'Jose';
console.log(person);


