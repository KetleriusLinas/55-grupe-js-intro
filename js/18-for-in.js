const person = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};
// const keys = ['age', 'isMarried', 'name'];
const keys = Object.keys(person); // issausdinami Objecto raktai. 

for (const key of keys) {
    console.log(person[key]);
    
}
// For-in yra tik object'ams
// analogas
for (const key in person) {
    console.log(person[key]);
}

//1)
const text = 'pavasaris';
const symbols = {};

// kuriami objecta -- paprasta reiksme
// symbols['L'] = 1;
// symbols['a'] = 1;
// symbols['b'] = 1;
// symbols['a'] += 1;
// symbols['s'] = 1;

// suskaiciuoja ir sukuria objecta
for (const s of text) {
    if(symbols[s]) {
        symbols[s]++;
    } else {
        symbols[s] = 1;
    }
}

console.log(symbols);

let max = 0;
for (const s in symbols) {
    if (symbols[s] > max) {
        max = symbols[s];
    }
}
console.log('');

console.log(max);

// isveda daugiausiai panaudota raide
const maxSymbols = [];
for (const s in symbols) {
    if (symbols[s] === max) {
        maxSymbols.push(s);
    }
}
console.log(maxSymbols);

//2)
// const counts = {
//     'L' : 1,
//     'a' : 2,
//     'b' : 1,
//     's' : 1,
// };

// //3)
// const max = 2;
// const letter = 'a';
// console.log('-------------------------');


// const obj = {
//     name: 'Maryte',
// };

// console.log(obj);
// obj.age = 88;
// console.log(obj);

// // jei object turi toki rakta ji, overite'ina --- Jei neturi tai ji sukuria 
// obj['isMarried'] = false;
// console.log(obj);
