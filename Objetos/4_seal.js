// Definición del Objeto

const user = {
    name: 'Juan',        
    lastName: 'Perez',     
    age: 30,              
    jobTitle: 'Full Stack Developer', 
    account: {             
        name: 'Interbank', 
        Number: 'CCI',      
    }
};

// Sellar el Objeto
Object.seal(user);  
// Intento de modificar una propiedad del objeto sellado
user.name = 'Jose'; // Este cambio sí se realiza porque el objeto está sellado
console.log(user);