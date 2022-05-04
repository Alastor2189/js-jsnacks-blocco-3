// 2. Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando a somma degli elementi è minore di 50.


numberEmpty = [];

let sum = 0;
let userNumber = "";
while (sum <= 50) {
    userNumber = parseInt(prompt("inserisci un numero"));
    sum += userNumber;
    if (sum <= 50) {
        numberEmpty.push(userNumber);
    }
}

console.log(userNumber);
console.log(numberEmpty);