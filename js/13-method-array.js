/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

methodai panasus i stringu. Jei pavadinimai sutampa tai ir veikimas panasus(sutampa)
*/
// istumti simboli i array'u -- visus duomenis galima pushint
const list = [];
console.log(list);

list.push(10);
console.log(list);

list.push(2);
console.log(list);

list.push(8);
console.log(list);

list.push(2, 6);
console.log(list);

list.push(3, 6, 9, 12);
console.log(list);

list.push('abc');
console.log(list);
console.log();

const numbers = [10, 2, 4, 8, 6];
// sugeneruoti nauja sarasa kuriame butu analogiski skaiciaii tik dvigubai didesni

const doubleNumbers = [];

for (let i = 0; i <numbers.length; i++) {
    const number = numbers[i];  // nera problemos del const nes jis kuriamas vis naujas for ir senas pamirstamas (i++)
    console.log('--->', number, number * 2); // taip turim padaryt
    doubleNumbers.push(number * 2); // ipushinam naujus duomenis i nauja array si kart (*2)
}
console.log(doubleNumbers);
console.log();


const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];
const nameSizes = [];
const nameFirstLetters = [];
const upperCaseNames = [];


for (let i = 0; i < names.length; i++) {
    const name = names[i];
    console.log('---', name, name.length);

    nameSizes.push(name.length);
    nameFirstLetters.push(name[0]);
    upperCaseNames.push(name.toUpperCase());


}
console.log(nameSizes);
console.log(nameFirstLetters);
console.log(upperCaseNames);
console.log();


const n1 = [1, 11, 111];
const n2 = [2, 22, 222, 2222];
const n12 = [];

for (let i = 0; i < n1.length; i++ ) {
    n12.push(n1[i]);
}
for (let i = 0; i < n2.length; i++ ) {
    n12.push(n2[i]);
}

console.log(n12);