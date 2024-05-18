const individual = {
    name: 'Juan',
    lastName: 'Perez',
    age: 30,
    jobTitle: 'Full Stack Developer',
    account: {
        name: 'Interbank',
        Number: 'CCI',
    }
};

console.log(individual.name); // 'Juan'
console.log(individual.lastName); // 'Perez'
console.log(individual.account.Number); // 'CCI'

// Destructuración
const { name, lastName, account: { Number } } = individual;
console.log(name); // 'Juan'
console.log(lastName); // 'Perez'
console.log(Number); // 'CCI'
