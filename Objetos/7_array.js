//ARRAYS

const values = ['Diego', 'Jose', 'Juan'];
const arrNumbers = [20, 30, 40, 50, 60];
const arrObjects = [
    { id: 1, name: 'Diego' },
    { id: 1, name: 'Diego' },
    { id: 1, name: 'Diego' },
];

//     0          1          2
//    3 elementos

// Acceso a elementos específicos del array 'values'
console.log(values[0]); 
console.log(values[1]); 
console.log(values[2]); 

// Cantidad de caracteres en un string
console.log(values[0].length); 

// Cantidad de elementos en un array
console.log(values.length); 


//string length (cantidad de caracteres)
//aarray length (cantidad de elemntos)




//Imperativa

for (let i = 0; i < values.length; i++) {
    console.log(values[i]);
}

//Declarativa

values.forEach((value) =>{
    console.log(value);
});

//console.log(arrObjects[2]);



//ARRAYS2

const values2 = ['Diego', 'Jose', 'Juan'];

// MUTABILIDAD (Modifica el estado original)

values2.push('Maria');
values2.push('Pedro');
values2.pop('Maria');
values2.pop('Pedro');

console.log(values2);

// INMUTABILIDAD (No modifica el estado original)

const nuevoArreglo = [...values2, 'Maria'];
console.log(nuevoArreglo);

