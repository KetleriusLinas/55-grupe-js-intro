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
for (let i = 0; i < splitedString.length; i++) {
    if (splitedString.length >= 5) {
        longerThen5.push(splitedString[i].length);
        console.log(longerThen5);
        
    }        
}
    // return longerThen5;
}

console.log(returnsLongerThen5('Parašykite funkciją, kuri suskaičiuoja, kiek duotame tekste žodžių yra bent 5 simboliu ilgio'));
function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
  }
  console.log(findShort('Parašykite funkciją, kuri suskaičiuoja, kiek duotame tekste žodžių yra bent 5 simboliu ilgio'));