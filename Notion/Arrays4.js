//vectorAdd(vector1,vector2)

let vector1 = [];
let numberOfElements1 = parseFloat(prompt("Gib die Menge der Elemente für den ersten Vektor an"));
for (let i = 0; i < numberOfElements1; i++){
    let valueVector1 = parseFloat(prompt("Gib die Werte der Elemente für den ersten Vektor an"));
    vector1[i] = valueVector1;
};
console.log(vector1);

let vector2 = [];
let numberOfElements2 = parseFloat(prompt("Gib die Menge der Elemente für den zweiten Vektor an"));
for (let i = 0; i < numberOfElements2; i++){
    let valueVector2 = parseFloat(prompt("Gib die Werte der Elemente für den zweiten Vektor an"));
    vector2[i] = valueVector2;
};

console.log(vector2);

let result = [];
function vectorAdd(vector1,vector2, result){
    result[0] = vector1[0] + vector2[0];
    result[1] = vector1[1] + vector2[1];
    result[2] = vector1[2] + vector2[2];
    console.log(result);
};

vectorAdd(vector1,vector2, result);


// for (let i = 0; i < numberOfElements1; i++){
//     result[i] = vector1[i] + vector2[i];
// };