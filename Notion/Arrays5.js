//Vektoren addieren, subtrahieren, multiplizieren und dividieren


//Das ganze als Opeator, dass man den ganzen Code nicht sooo oft schreiben muss:

function vectorTask(vector1,vector2, operator){
    let result = [];
    if (operator === "+") {
        for (let i = 0; i < vector1.length; i++){
            result[i] = vector1[i] + vector2[i];
        };
    } else if (operator === "-") {
        for (let i = 0; i < vector1.length; i++){
            result[i] = vector1[i] - vector2[i];
        };
    } else if (operator === "*"){
        for (let i = 0; i < vector1.length; i++){
            result[i] = vector1[i] * vector2[i];
        };
    } else if (operator !== "/"){
        for (let i = 0; i < vector1.length; i++){
            result[i] = vector1[i] / vector2[i];
        };
    } else  {
        console.log("Eine Division durch Null ist nicht erlaubt!!!");
    };
    console.log(result);
};


function calculate(){
    let result = [];
    let vector1 = inputToVector("vector1");
    let vector2 = inputToVector("vector2");
    document.getElementById("result").innerText = "BlaBlaBla";
    let operator = prompt("Gib an, welcher mathematische Operator (+, -, *, /) genutzt werden soll");
    if (operator === "+") {
        for (let i = 0; i < vector1.length; i++){
            result[i] = vector1[i] + vector2[i];
        };
    } else if (operator === "-") {
        for (let i = 0; i < vector1.length; i++){
            result[i] = vector1[i] - vector2[i];
        };
    } else if (operator === "*"){
        for (let i = 0; i < vector1.length; i++){
            result[i] = vector1[i] * vector2[i];
        };
    } else if (operator !== "/"){
    } else  {
        console.log("Eine Division durch Null ist nicht erlaubt!!!");
    };
    alert(result);
};

function isVectorInFormat(input){
    const vectorRegex = /^\[\s*(-?\d+(\.\d+)?\s*,\s*)*-?\d+(\.\d+)?\s*\]$/;
    return vectorRegex.test(input);
}

function inputToVector(inputId){
    let variable = document.getElementById(inputId);
    console.log(variable);
    let value = variable.value;
    isVectorInFormat(inputId);
    return value;
}



function createVector(){
    let vector = [];
    let numberOfElements = parseFloat(prompt("Gib die Menge der Elemente für den ersten Vektor an"));
    for (let i = 0; i < numberOfElements; i++){
        let valueVector = parseFloat(prompt("Gib die Werte der Elemente für den ersten Vektor an"));
        vector[i] = valueVector;
    }
   return vector; 
}

















// //Addieren:

// let vector1 = [];
// let numberOfElements1 = parseFloat(prompt("Gib die Menge der Elemente für den ersten Vektor an"));
// for (let i = 0; i < numberOfElements1; i++){
//     let valueVector1 = parseFloat(prompt("Gib die Werte der Elemente für den ersten Vektor an"));
//     vector1[i] = valueVector1;
// };
// console.log(vector1);

// let vector2 = [];
// let numberOfElements2 = parseFloat(prompt("Gib die Menge der Elemente für den zweiten Vektor an"));
// for (let i = 0; i < numberOfElements2; i++){
//     let valueVector2 = parseFloat(prompt("Gib die Werte der Elemente für den zweiten Vektor an"));
//     vector2[i] = valueVector2;
// };

// console.log(vector2);

// let result = [];
// function vectorAdd(vector1,vector2, result){
//     result[0] = vector1[0] + vector2[0];
//     result[1] = vector1[1] + vector2[1];
//     result[2] = vector1[2] + vector2[2];
//     console.log(result);
// };

// vectorAdd(vector1,vector2, result);

// //Subtrahieren:
// let vector1 = [];
// let numberOfElements1 = parseFloat(prompt("Gib die Menge der Elemente für den ersten Vektor an"));
// for (let i = 0; i < numberOfElements1; i++){
//     let valueVector1 = parseFloat(prompt("Gib die Werte der Elemente für den ersten Vektor an"));
//     vector1[i] = valueVector1;
// };
// console.log(vector1);

// let vector2 = [];
// let numberOfElements2 = parseFloat(prompt("Gib die Menge der Elemente für den zweiten Vektor an"));
// for (let i = 0; i < numberOfElements2; i++){
//     let valueVector2 = parseFloat(prompt("Gib die Werte der Elemente für den zweiten Vektor an"));
//     vector2[i] = valueVector2;
// };

// console.log(vector2);

// let result = [];
// function vectorSubtraction(vector1,vector2, result){
//     result[0] = vector1[0] - vector2[0];
//     result[1] = vector1[1] - vector2[1];
//     result[2] = vector1[2] - vector2[2];
//     console.log(result);
// };

// vectorSubtraction(vector1,vector2, result);


// //Multiplikation:

// let vector1 = [];
// let numberOfElements1 = parseFloat(prompt("Gib die Menge der Elemente für den ersten Vektor an"));
// for (let i = 0; i < numberOfElements1; i++){
//     let valueVector1 = parseFloat(prompt("Gib die Werte der Elemente für den ersten Vektor an"));
//     vector1[i] = valueVector1;
// };
// console.log(vector1);

// let vector2 = [];
// let numberOfElements2 = parseFloat(prompt("Gib die Menge der Elemente für den zweiten Vektor an"));
// for (let i = 0; i < numberOfElements2; i++){
//     let valueVector2 = parseFloat(prompt("Gib die Werte der Elemente für den zweiten Vektor an"));
//     vector2[i] = valueVector2;
// };

// console.log(vector2);

// let result = [];
// function vectorMultiplication(vector1,vector2, result){
//     result[0] = vector1[0] * vector2[0];
//     result[1] = vector1[1] * vector2[1];
//     result[2] = vector1[2] * vector2[2];
//     console.log(result);
// };

// vectorMultiplication(vector1,vector2, result);


// //Division:

// let vector1 = [];
// let numberOfElements1 = parseFloat(prompt("Gib die Menge der Elemente für den ersten Vektor an"));
// for (let i = 0; i < numberOfElements1; i++){
//     let valueVector1 = parseFloat(prompt("Gib die Werte der Elemente für den ersten Vektor an"));
//     vector1[i] = valueVector1;
// };
// console.log(vector1);

// let vector2 = [];
// let numberOfElements2 = parseFloat(prompt("Gib die Menge der Elemente für den zweiten Vektor an"));
// for (let i = 0; i < numberOfElements2; i++){
//     let valueVector2 = parseFloat(prompt("Gib die Werte der Elemente für den zweiten Vektor an"));
//     vector2[i] = valueVector2;
// };

// console.log(vector2);

// let result = [];
// function vectorDivision(vector1,vector2, result){
//     result[0] = vector1[0] / vector2[0];
//     result[1] = vector1[1] / vector2[1];
//     result[2] = vector1[2] / vector2[2];
//     console.log(result);
// };

// vectorDivision(vector1,vector2, result)