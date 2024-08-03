 //Das ist mein erstes Arbeiten mit GitHub!
 console.log("Mein erstes Mal arbeiten mit Github");
let count = 0;
for (let i = 0; i < 100; i++){
    if (isPrimeNumber(i)){
        count++;
    }
};

function isPrimeNumber(number){};

function countPrimeNumber(limit){
    let number1 = 1;
    let number2 = 2;
    let array = [];
    let result = number1 +number2;
    while ((result = (number1 + number2) % number2) <= limit){
        if (result !== 0){
            return result;
        };
        if (result === 0){
            return faslse;
        };

    };
};
