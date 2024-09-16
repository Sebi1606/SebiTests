// //parseVector(source)

function createString(){
    let string = prompt("Gib Zahlenwerte für den String ein (z.B. 1,2,3):");
    return string;
};

function checkFormat(string){
    let anyNumbers = /^(-?\d+(\.\d+)?)(,(-?\d+(\.\d+)?))*$/;

    if (anyNumbers.test(string)) {
        alert("Die Eingabe ist gültig.");
        console.log("Eingabe:", string);
        return true;
    } else {
        alert("Der eingegebene String ist nicht gültig!");
        return false;
    }
};

function parseVector(string){
    let array = string.split(",");  
    console.log("Array:", array);
    return array;
};

// Hauptablauf
let inputString = createString();

if (checkFormat(inputString)) { 
    parseVector(inputString);   
}


































// function showInput(){
//     let showInputField = document.getElementById("inputField");
//     inputField.style.display = "block";
// };


// function parseVector(){
//     let vectors = {};
//     let vectorCount = parseFloat(prompt("Gib an, wie viele Vektoren du erstellen willst."));
//     for (let i = 0; i < vectorCount; i++){
//         let vectorName = prompt("Gib an, wie der Vektor heißen soll.")
//         let numberOfElements = parseFloat(prompt("Gib an, wie viele Elemete der Vektor haben soll"));
//     if ( numberOfElements.length > numberOfElements){
//             console.log("Eingabe ist ungültig!");
//         };
//         let value = prompt("Gib die Werte für den Vektor an.");
//         vectors[i] = vectorName;
//         vectors[i] = value;
//     };
//     console.log(vectors);
//     let vectorArray = [];
//     let allVectors = vectors.split(",");
//     vectorArray.push(vectors);
//     return vectorArray;
// };
// parseVector();








// function source(){
//     let vectorCount = prompt("Wie viele Vektoren willst du erstellen?");
//     let vectors = {};
//     let vectorsLength = parseFloat(prompt("Gib an, wie viele Elemente der Vektor haben soll"));
//     for (let i = 0; i < vectorsLength; i++){
//     }
//     for (let i = 0; i < vectorCount; i++){
//         let vectorName = prompt("Wie soll der Vektor heißen?");
//         let vectorValue = prompt("Welchen Wert, oder welche Werte soll der Vektor haben (bei mehreren Werten mit Komma getrennt)?");
//         let value = vectorValue;
//         vectors[i] = value;
//         vectors[vectorName] = vectorValue;
//     }
//     return vectors;
// };
// source();

// // function checkVectorFormat(vectors){
// //     let regex = /^(\d+,)*\d+$/;
// //     if (regex.test(vectors)){
// //         let numbersArray = vectors[name].concat("", vectors[name]);
// //         console.log(numbersArray);
// //     } else {
// //         console.log("Die Eingabe ist ungültig!");
// //     };
// //     return vectors;
// // };
// // checkVectorFormat();

// function parseVector(vectors){
//     let arrayOfNumbers = [];
//     let stringCombined = vectors.concat("",vectors);
//     arrayOfNumbers.push(vectors);
//     return arrayOfNumbers;
// };
// parseVector();



// //returns array of strings: String.prototype.split();
// //returns new string containing characters of the calling string from
// //(or between) the specified index (or indices);



// //Wichtige Webseite: https://ilu.th-koeln.de/ 
// //