//avg(array) --> Durchscnitt berechnen

let array = [];
let anzahlElemente = parseFloat(prompt("Gib die Länge für das Array an"));
for (let i = 0; i < anzahlElemente; i++){
    let wert = parseFloat(prompt("Gib die Werte für das Array an"));
    array[i] = wert;
};

console.log(array);

avg(array);

function avg(array){
    let averageValue =  array.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / array.length;
    console.log(averageValue);
};