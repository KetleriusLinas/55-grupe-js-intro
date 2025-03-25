
// uzdavinys yra pazymiu vikurkio skaiciavimas
function marksAverage(list) {
    // patikrinti ar gavome masyva
    // jei masyvas. sumuojame visus skaicius ir ju kieki:
let sum = 0;
let count = 0;
    //      einampe per visa masyva ir imame kiekviena skaiciu
    //      jei sutinkame ne skaiciu,nera sveikasis ir nuo 1 iki 10(imtinai ==), tai ignoruoji

    //      jei sutinkame ne skaiciu, tai ji ignoruojame
    //      jei sutinkame skaiciu, padidiname suma 
    //      jei sutinkame skaiciu, padidiname kieki 



    // [10, 2, 'n']
    return sum / count;
}


console.log(marksAverage([]));
console.log(marksAverage([10]));
console.log(marksAverage([2]));
console.log(marksAverage(['n']));
console.log(marksAverage([10, 2, 8, 4, 6]));
console.log(marksAverage([8, 4, 7]));
console.log(marksAverage(['n']));
console.log(marksAverage([8, 'n', 4, 7]));
console.log(marksAverage(['n', 10, 2, 8, 4, 6]));



console.log(marksAverage('labas'));
console.log(marksAverage(true));

// cosnt a = arr[0] + arr[1] + arr[2] - kai nezinai kiek masyve yra 'pazymiu'