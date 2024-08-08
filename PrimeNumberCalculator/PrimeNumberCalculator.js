console.log("Mein erstes Mal arbeiten mit Github");
let count = 0;
let primeNumbers = [];
for (let i = 0; i < 100; i++){
    if (isPrimeNumber(i)){
        count++;
        primeNumbers.push(i);
    }
};

//Überprüft, ob die Zahl kleiner oder gleich 1 ist (solche Zahlen sind keine Primzahlen).
//Prüft dann, ob die Zahl durch irgendeine Zahl von 2 bis zur Quadratwurzel der Zahl teilbar ist.
//Wenn sie teilbar ist, ist sie keine Primzahl.
//Wenn sie durch keine dieser Zahlen teilbar ist, ist sie eine Primzahl.
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
};

//Die Schleife läuft von 0 bis 100.
//Für jede Zahl wird die Funktion isPrimeNumber aufgerufen.
//Wenn die Zahl eine Primzahl ist, wird sie mit console.log ausgegeben.
for (let i = 0; i <= 100; i++){
    if (isPrimeNumber(i)){
        console.log(primeNumbers);
    };
};

//Noch mit do while Schleife:
// do {
//     isPrimeNumber;
// }
// while (i <= 100);