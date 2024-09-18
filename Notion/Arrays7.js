// Calculator Funktion implementieren

function createVectors(){
    let numberOfVectors = parseFloat(prompt("Wie viele Vektoren?"));
    let vectors = [];
    for (let i = 0; i < numberOfVectors; i++){
        let vectorName = prompt("Gib dem Vektor einen Namen.");
        let vectorValue = prompt("Gib dem Vektor Werte (in Form von 1,2,3,4,...) ");
        let vectorArray = vectorValue.split(",").map(Number);
        vectors.push([vectorName, vectorArray]);
    };
    return vectors;
};
createVectors();

