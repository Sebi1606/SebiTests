//Calculater in new with classes:

class Vector {
    constructor (name, values) {
        this.name = name;
        this.values = values;
    };
    add(...vectors){
        let vectorLength = this.values.length;
        for (let v of vectors){
            if( vectors.values.length !== vectorLength){
                alert("Falsche Eingabe der Vektoren");
            };
        };
        let resultValues = [...this.values];
        let numberOfVectors = parseFloat(prompt("Wie viele Vektoren?"));
        for (let v of Vector) {
            for (let i = 0; i < numberOfVectors; i++){
                resultValues[i] += vectors.values[i];
            };
        };
        return new Vector ('Summe', resultValues);    
    };
};
let v1 = new Vector("Vector 1", [1,2,3]);
let v2 = new Vector("Vector 2", [4,5,6]);
let v3 = new Vector("Vector 1", [7,8,9]); 

let result = v1.add(v2,v3);
console.log(result);
alert(result);













// let variableA = parseFloat(prompt("Erste Zahl des ersten Vektors"));
// let variableB = parseFloat(prompt("Zweite Zahl des ersten Vektors"));
// let variableC = parseFloat(prompt("Dritte Zahl des ersten Vektors"));
// let vectorA = [variableA, variableB, variableC];
// variableA = vectorA[0];
// variableB = vectorA[1];
// variableC = vectorA[2];


// let variableD = parseFloat(prompt("Erste Zahl des zweiten Vektors"));
// let variableE = parseFloat(prompt("Erste Zahl des zweiten Vektors"));
// let variableF = parseFloat(prompt("Erste Zahl des zweiten Vektors"));
// let vectorB = [variableD, variableE, variableF];
// variableD = vectorB[0];
// variableE = vectorB[1];
// variableF = vectorB[2];

// let vectorC = [];
// let vectorCAlsString = vectorC.join(",");

// let operation = prompt("Definiere die Rechenoperation (+, -, *, /)");


// function calculateVectors(vectorA, operation, vectorB, vectorC) {
//     vectorA = [variableA, variableB, variableC];
//     vectorB = [variableD, variableE, variableF];
//     vectorC = [result1, result2, result3];
//     let result1 = vectorC[0];
//     let result2 = vectorC[1];
//     let result3 = vectorC[2];
//     if (operation === "+") {
//         let result1 = variableA + variableD;
//         let result2 = variableB + variableE;
//         let result3 = variableC + variableF;
//         vectorC[0] = result1;
//         vectorC[1] = result2;
//         vectorC[2] = result3;
//     } else if (operation === "-") {
//         let result1 = variableA - variableD;
//         let result2 = variableB - variableE;
//         let result3 = variableC - variableF;
//         vectorC[0] = result1;
//         vectorC[1] = result2;
//         vectorC[2] = result3;
//     } else if (operation === "*") {
//         let result1 = variableA * variableD;
//         let result2 = variableB * variableE;
//         let result3 = variableC * variableF;
//         vectorC[0] = result1;
//         vectorC[1] = result2;
//         vectorC[2] = result3;
//     } else if(operation === "/") {
//         let result1 = variableA / variableD;
//         let result2 = variableB / variableE;
//         let result3 = variableC / variableF;
//         vectorC[0] = result1;
//         vectorC[1] = result2;
//         vectorC[2] = result3;
//     };
//     console.log(vectorCAlsString);
//     return vectorCAlsString;

//   };

// calculateVectors;
// console.log(vectorCAlsString);