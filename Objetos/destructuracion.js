//Definición de Objeto

const person = {
    name: 'Juan',
    lastName: 'Perez',
    age: 30,
    jobTitle: 'Full Stack Developer',
    account: {
        name: 'Interbank',
        Number: 'CCI',
    }
};


//Acceso a Propiedades del Objeto

console.log(person.name);          
console.log(person.lastName);     
console.log(person.account.Number); 


//DESTRUCTURING (DESTRUCTURACIÓN DEL OBJETO)
const { name, lastName, account: { Number } } = person;
console.log(name);     
console.log(lastName);  
console.log(Number);   
