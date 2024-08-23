//invert(array)

let array = [];
let numberOfElements = parseFloat(prompt("Gib an, wie viele Elemente das Array haben soll"));
for (let i = 0; i < numberOfElements; i++){
    let value = parseFloat(prompt("Gib die Werte für das Array an"));
    array[i] = value;
};

console.log(array);

invert(array);

function invert(array){
    array.reverse();
    console.log(array);
};