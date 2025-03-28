console.log('---------uzduotys su IF sarasais---------');
console.log('---------1---------');

let array = [1, 2, 18, 4, 5, 9 ,14 ,3, 20];
const target = 3;

for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
        console.log(`Taip yra toks skaicius ${array[i]}`);
    }
};
console.log('----------2--------');
let array1 = [];
// if (array <= 0) {
//     console.log('Sarasas tuscias');
// }
if (array1.length === 0) {
     console.log('Sarasas tuscias');
};
console.log('---------3---------');
// susirasti ar sarase yra teigiamu skaiciu
let array2 = [1, -2, 3, -4];
for (let i = 0; i < array.length; i++) {
    if (array2[i] > 0) {
    console.log (`Taip yra teigiamu skaiciu ${array2[i]}`)
    };
};
console.log('---------4---------');

let array3 = [2, 4, 6, 7, 9, 10];
for (let i = 0; i < array3.length; i++) {
    if (array3[i] % 2 === 0) {
        console.log(`Taip, ${array3[i]} skaiciai yra lyginiai`);
        // break; // sustabdo cikla po pirmo if ivygdimo
    }
};
console.log('----------5--------');

let array4 = [3, 5, -8, -10, 8, -81, 5, -1];
    for (let i = 0; i < array4.length; i++) {
        if (array4[i] < 0) {
            console.log(`saraso neigiami skaiciai: ${array4[i]}`)
        };
    };

console.log('----------6--------');

let array5 = [9, 5, -2, -10, 8, -11, 5, 9];
    // for (let i = 0; i < array5.length; i++) {
        if (array5[0] > array5[array5.length - 1]) {
            console.log('yra jis didesnis');
            // break;
        }; if (array5[0] <= array5[array5.length - 1]) {
            console.log ('Nera didesnis');
            // break;
        }; 
    // };
    console.log('---------7---------');


// let array6 = [1, 2, 3, 9];
let array6 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        if (array6.length > 5) {
            console.log('Taip didesnis nei penki')
        }; if (array6.length <= 5) {
            console.log('Mazesnis')
        };

console.log('---------8---------');

let array7 = ['Obuolys', 'bananas', 'vysnia', 10, -5, true];
        for (let i = 0; i < array7.length; i++) {
            if (typeof array7[i] === 'string')
                console.log('Taip, teksto tipo kintamieji')
            else {
            console.log('Ne, kito tipo kintamieji')
        };
    };
    console.log('---------------------9-------------------');

let array8 = [2, 5, 12, 4, 15, 20, 55, 18];
let bigNum = array8[0];
let isvestasUzrasas = false;

    for (let i = 0; i <= array8.length; i++) {
        if (array8[i] > bigNum) {
            bigNum = array8[i];
        } if (bigNum > 10 && !isvestasUzrasas) {
           console.log(`Taip, didziausias skaicius yra daugiau nei 10.`)
            isvestasUzrasas = true; // nustatome kad console.log buvo jau isesta ir sustabdo isvedimus
        };
    };
    console.log ('Didziausias skaicius yra:' + ' ' + bigNum); 

    console.log('--------------------10----- nesupratau--------------');

// visai nesupratau sito.
let array9 = [2, 2, 2, 5, 6, 7, 2, 9, 8, 2, 7, 2];
let arrayNumbers = array9.filter(num => num === 2); // pereina per masyva ir vienodas reiksmes isrenka
    if (arrayNumbers.length > 3) { 
        console.log(`Taip siame masyve yra daugiau skaicius 2 elementu, net ${arrayNumbers.length}`);
    };
