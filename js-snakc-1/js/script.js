// 1. Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

const napoleon = [1, 2, 3, 4, 5, 6];
const napoleonSecond = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let bestArray
if (napoleon.length > napoleonSecond.length) {
    bestArray = "napoleon è l'array più lungo";
    do {
        napoleonSecond.push(numberOneToUndred());
    } while (napoleon.length > napoleonSecond.length);
} else if (napoleon.length < napoleonSecond.length) {
    bestArray = "napoleonSecond è l'array più lungo";
    do {
        napoleon.push(numberOneToUndred());
    } while (napoleon.length < napoleonSecond.length);
} else {
    bestArray = "gli array sono della medesima lunghezza";
}


console.log(bestArray);

console.log(napoleon);
console.log(napoleonSecond);

//funzione che genera un numero da 1 a 100 

function numberOneToUndred() {
    return Math.floor(Math.random() * 100) + 1;
}