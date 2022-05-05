// 1. Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

const napoleon = [1, 2, 3, 4, 5, 6];
const napoleonSecond = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let bestArray
let shortArray
if (napoleon.length > napoleonSecond.length) {
    shortArray = napoleonSecond;
} else {
    shortArray = napoleon;
}

while (napoleon.length !== napoleonSecond.length) {
    const rndNumber = getRndInteger(1, 100);
    shortArray.push(rndNumber);
}

console.log(napoleon, napoleonSecond);



//funzione che genera un numero casuale

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}