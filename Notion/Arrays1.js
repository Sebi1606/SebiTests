//sum(array) Funktion schreiben

let array = [];

let anzahlElemente = parseFloat(prompt("Gib die Anzahl der Elemente für das Array an"));
for (let i = 0; i < anzahlElemente; i++){
    let wert = parseFloat(prompt("Gib ein Wert für ein Element an"));
    array[i] = wert;
};

console.log(array);

sum(array);

function sum(array){
    let summe = array.reduce((accumulator, currenValue) => accumulator + currenValue, 0);
    console.log(summe);
};
