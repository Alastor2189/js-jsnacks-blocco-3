// 3. Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

let teams = [{
        nome: "AC Milan",
        pointClass: 0,
        foulsReceived: 0
    },
    {
        nome: "Cagliari Calcio",
        pointClass: 0,
        foulsReceived: 0
    },
    {
        nome: "Alastor United",
        pointClass: 0,
        foulsReceived: 0
    },
    {
        nome: "Ichnusa FC",
        pointClass: 0,
        foulsReceived: 0
    },
    {
        nome: "Mirto AS",
        pointClass: 0,
        foulsReceived: 0
    },
]

console.log("Array prima dell'inizio del campionato", teams);

teams = teams.map(function(singleTeam) {
    return {
        nome: singleTeam.nome,
        pointClass: numberOneToUndred(),
        foulsReceived: numberOneToUndred()
    };
});

console.log("Array post campionato", teams);


//generiamo numeri casuali da 1 a 100
function numberOneToUndred() {
    return Math.floor(Math.random() * 100) + 1;
}