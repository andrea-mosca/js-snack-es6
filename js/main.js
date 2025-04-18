//* Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

//* Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


// * SNACK 1

const bikes = [
    {name: "bike 1", weight: 21},
    {name: "bike 2", weight: 22},
    {name: "bike 3", weight: 3},
    {name: "bike 4", weight: 4},
    {name: "bike 5", weight: 25}
];

// per ogni bike presente in bikes verifica quale ha il peso minore e stampala
let bikeMinWeight = bikes[0];
for(let i = 1; i < bikes.length; i++){
    if(bikes[i].weight < bikeMinWeight.weight){
        bikeMinWeight = bikes[i];
    }
};
console.log(bikeMinWeight);


// * SNACK 2
const footballTeams = [
    {name:"squadra 1", points: 0, sufferedFouls: 0},
    {name:"squadra 2", points: 0, sufferedFouls: 0},
    {name:"squadra 3", points: 0, sufferedFouls: 0},
    {name:"squadra 4", points: 0, sufferedFouls: 0},
    {name:"squadra 5", points: 0, sufferedFouls: 0}
];

// funzione che genera numeri casuali
const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// numeri casuali assegnati ai punti e ai falli di ogni squadra
for(let i = 0; i < footballTeams.length; i++){
    footballTeams[i].points = generateRandomNumber(0, 80);
    footballTeams[i].sufferedFouls = generateRandomNumber(0, 500);
};

// creazione array che contenga solo nomi squadre e falli subiti
const teamsNameFouls = [];
for(let i = 0; i < footballTeams.length; i++){
    let currentTeam = {name: footballTeams[i].name, sufferedFouls: footballTeams[i].sufferedFouls};

    teamsNameFouls.push(currentTeam);
};
// stampa il nuovo array di ogetti
console.log(footballTeams);
console.log(teamsNameFouls);
