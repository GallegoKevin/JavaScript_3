
//Declaración de Variables Individuales
const personName = 'Juan';
const personLastName = 'Perez';
const personAge = 30;
const personJobTitle = 'Full Stack Developer';

console.log(personName);


//creación de Objetos

const person = {
    name: 'Juan',
    lastName: 'Perez',
    age : 30,
    jobTitle: 'Full Stack Developer',
    //account : {
     //   name: 'etc'
   // }
};

//Acceso a propiedades del objeto

console.log(person.name);
console.log(person.lastName);
console.log(person.age);

console.log(person ['name']);

//Agregar Propiedades al Objeto

console.log(person);
person.nationality = 'Peru';
console.log(person);


//Eliminar Propiedades del Objeto

delete person.name;
delete person.age;
delete person.nationality;

console.log(person);