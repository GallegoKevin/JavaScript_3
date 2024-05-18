// Definición del Objeto

const employee = {
    name: 'Juan',          
    lastName: 'Perez',  
    age: 30,              
    jobTitle: 'Full Stack Developer', 
    account: {             
        name: 'Interbank',
        Number: 'CCI',      
    }
};

// Congelar un Objeto

Object.freeze(employee);  // Se congela el objeto 'employee', haciéndolo inmutable

// Intento de modificar una propiedad del objeto congelado
employee.name = 'Jose';   // Este cambio no tendrá efecto porque el objeto está congelado

console.log(employee);
// Salida esperada (no cambia debido a Object.freeze):
