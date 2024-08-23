//sum(array) Funktion schreiben


//Ein Array erstellen
let array = [];
//Die Länge des Arrays festlegen lassen --> das Array kann nun beliebig viele Elemente haben

array.lentgh = parseFloat(prompt("Lege fest, wie viele Elemente das Array haben soll"));
//Funktion die alle Elemente des Arrays entgegennimmt und miteinander addiert

let anzahl = array.lentgh;
let variable = [];
for (let i = 0; i < anzahl; i++){
    let variableName = prompt("Gib der Variable einen Namen");
    let wert = parseFloat(prompt("Gib einen Wert für die Variable ein"));
    let variableObject = {
         name: variableName,
         wert: parseFloat(prompt("Gib einen Wert für die Variable an"))
    };
    array.push(variableObject);
};

function sum(array){
    let summe = array.reduce((accumulator, currenValue) => accumulator + currenValue, 0);
    return summe;
};




//Funktion verarbeitet alle Werte des Arrays zu einem Wert und verarbeitet diesen dann.
//Durch "accumulator" wird ist der Startwert, ab dem die Funktion ausgerichtet wird.
//Durch "currentValue" wird der derzeitige Wert in der Funktion gespeichert mit dem weitergerechnet werden soll.
//Dann wird immer zu dem currentValue den nächsten Wert durch den accumulator addiert 
//Am Ende wird die "summe" als das das Ergebnis Definiert wird ausgegeben.
//Diese Schleife läuft so lange durch, bis alle Werte des Arrays verabeitet wurden.
