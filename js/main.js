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
}
console.log(bikeMinWeight);