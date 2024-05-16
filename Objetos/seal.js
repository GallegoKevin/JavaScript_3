

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

// Sellar el Objeto

Object.seal(person);
person.name = 'jose';
console.log(person);
