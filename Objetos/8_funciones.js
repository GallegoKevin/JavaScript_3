//FUNCIONES
function sumNumbers(){
    console.log(2 + 2);
}

//Función con Parámetros:

sumNumbers();
function message(name , lastName){
    console.log(`Hola mi nombre es ${name} y mi apellido es ${lastName}`);
}
message('Diego', 'Perez');


////////////////

sumNumbers(10, 20);
//Función con Parámetros y Operaciones:
function sumNumbersTwo(num1, num2) {
    console.log(num1 + num2);
}



///////////////


//Función initApp

function initApp() {
    console.log('...Iniciando APP');
    const user = 'JUAN';

   //if (user){
     //   authenticated(user);
    //}else{
    //    notAuthenticated
   // }

    user === 'JUAN' ? authenticated(user) : notAuthenticated();
}


//Funciones authenticated y notAuthenticated
function authenticated(username) {
    console.log(`Inicase sesio con ${username}`);
}

function notAuthenticated() {
    console.log(`No iniciaste sesion`);
}

initApp();

///////////////



console.log(addNumbers(10, 50));

// Declaración de la función addNumbers
function addNumbers(num1, num2) {
    return num1 + num2;
    // console.log(num1 + num2);
}

// console.log(addNumbers(10, 20));

const restNumbers = (num1, num2) => num1 - num2;
console.log(restNumbers(30, 10));

