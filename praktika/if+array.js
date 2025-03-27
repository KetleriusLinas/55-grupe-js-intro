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
        
// . Patikrinkite, ar sąraše yra tik teksto tipo kintamieji
// a. Pavyzdys: Patikrinkite, ar [„obuolys“, ‚bananas‘, „vyšnia“] yra tik tekstai.
let array7 = ['Obuolys', 'bananas', 'vysnia', 10, 5, 84, -24];
        for (let i = 0; i < array7.length; i++) {
            if (typeof array7[i] === 'string')
                console.log('Taip, teksto tipo kintamieji')
        }; 

        
        // }; if (typeof array7[i] !== 'string') {
        //     console.log('Ne, kintamieji kito tipo')
        // };