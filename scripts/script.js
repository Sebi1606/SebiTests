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

function calculateVectors(vectorA, operation, vectorB) {
  console.log(vectorA, operation, vectorB);
  return [1, 2, 3, 4];
}

function calculateMatrix(matrixA, operation, matrixB) {
  console.log(matrixA, operation, matrixB);
  return [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
}