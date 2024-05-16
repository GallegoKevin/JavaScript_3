//Objetos:
const developer = {
    name: 'Diego',
    lastName: 'cueva',
    age: 30,
};

const diego = {
    jobTitle: 'Frontend',
    company: 'UTP',
};

//ASSIGN
const unirObjetos = Object.assign(developer, diego);
console.log(unirObjetos);

//Operador Spread
const unirObjetos2 = { ...developer, ...diego };
console.log(unirObjetos2);
