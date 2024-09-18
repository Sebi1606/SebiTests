//Challenge 1: Primzahlrechner:

function calculatePrimeNumbers(limit) {
  let count = 0;
  let primeNumbers = [];
  for (let i = 0; i <= limit; i++){
    if (isPrimeNumber(i)){
        count++;
        primeNumbers.push(i);
    }
  }
  return primeNumbers;
}

function isPrimeNumber(number){
  if (number <= 1){
      return false;
  };
  for (let i = 2; i <= Math.sqrt(number); i++){
      if (number % i === 0) {
          return false;
      };
  };
  return true;
}

//Challenge 2: Vektorrechner:

function calculateVectors() {
  let vectorA = document.getElementById("vector-a").value.split(",").map(Number);
  let vectorB = document.getElementById("vector-b").value.split(",").map(Number);
  let operation = document.getElementById("vector-operator").value.trim();
  if (vectorA.length !== vectorB.length) {
    alert("Beide Vektoren müssen die gleiche Anzahl von Elementen haben!");
    return;
  }
  let result = [];
  for (let i = 0; i < vectorA.length; i++) {
    if (operation == "+") {
      result.push(vectorA[i] + vectorB[i]);
    } else if (operation == "-") {
      result.push(vectorA[i] - vectorB[i]);
    } else if (operation == "*") {
      result.push(vectorA[i] * vectorB[i]);
    } else if (operation == "/") {
      if (vectorB[i] !== 0) {
        result.push(vectorA[i] / vectorB[i]);
      } else {
        alert("Division durch 0 ist nicht erlaubt!");
        return "Rechnung fehlerhaft";
      }
    } else {
      alert("Ungültiger Operator! Bitte +, -, *, / verwenden.");
      return "Rechnung fehlerhaft";
    }
  }
  document.getElementById("vector-result").textContent = result.join(", ");
  return result;
}



//Challenge 3: Matrixrechner:

function calculateMatrix(matrixA, operation, matrixB) {
  console.log(matrixA, operation, matrixB);
  return [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
}