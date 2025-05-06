console.log('Parašykite funkciją, kuri apskaičiuoja visų teigiamų skaičių sumą masyve');

// const array = [2, 4, 6, 8, -2, -4, 8, -6, 10, -2];

function arrayPossitiveSum (array) {
    let arrayCal = 0;
    for (let i = 0; i < array.length; i++) {        
        if (array[i] > 0) {
        arrayCal += array[i];
        }
    }
  
    return arrayCal;
}
console.log(arrayPossitiveSum([2, 4, 6, 8, -2, -4, 8, -6, 10, -2]));
console.log(arrayPossitiveSum([10, -2, -4, -5, -10]));

console.log('Parašykite funkciją, kuri suskaičiuoja, kiek duotame tekste žodžių yra bent 5 simboliu ilgio');

function returnsLongerThen5 (str) {
const splitedString = str.split(' ');
let longerThen5 = [];
for (const s of splitedString) {
    if (s.length > 4) {
        longerThen5.push(s);                
    }        
}
    return longerThen5.length;
}

console.log(returnsLongerThen5('Parašykite funkciją kuri suskaičiuoja kiek duotame tekste žodžių yra bent 5 simboliu ilgio'));

console.log('Parašykite funkciją, kuri sugrąžina true, jei masyve yra bent viena neigiama reikšmė');

function arrayNegativeBoolean (arr) {
    for (const a of arr) {
    if (a < 0) {
        return true;
        } 
    }
    return false; // reikejo return iskelti lauka, if else netiko.
}
console.log(arrayNegativeBoolean([2, 4, 6, 8, 10]));
console.log(arrayNegativeBoolean([2, 4, 6, 8, -2, -4, 8, -6, 10, -2]));
console.log(arrayNegativeBoolean([2, 4, 6, 8, -6, 10, -2]));

console.log('Parašykite funkciją, kuri skaičiuoja, kiek kartų duotas simbolis pasikartoja string');

function includesLetter (str) {
    
}