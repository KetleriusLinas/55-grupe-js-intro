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

console.log('----------------pop--------------')
//isiema paskutinius array elemntus ir pastato juos i gala (desine) ir ji issaugo jei pasidarai kintamaji.
const number2 = [ 10, 2, 8, 4, 6];
console.log(number2);

number2.push(9);
console.log(number2);

const g1 = number2.pop();
const g2 = number2.pop();
console.log(number2, g1, g2);
console.log('-------------unshift--------------');
// ikelia emelentus i prieki
number2.unshift(1);
number2.unshift(2);
number2.unshift(3);
console.log(number2);
// isiema elementus is priekio >>. - nesu tikras
const g3 = number2.shift();
const g4 = number2.shift();
console.log(number2, g3, g4);

console.clear();
console.log('--------------includes-------------');
// ar egzistuoja sarase ta reiksme, arba ne. panasus methodai su string tipu, ir ju veikimo tipai.
const magic = [11, 22, 33, 44, 55];
console.log(magic.includes(5));
console.log(magic.includes(55));
console.log('--------------indexOf-------------');

console.log(magic.indexOf(5)); // isveda -1 jei nera tokios reiksmes
console.log(magic.indexOf(55)); // isveda 4 jei yra tokia reiksme
console.log('--------------join-------------');

const texts = ['agurkas', 'pomidoras', 'svogunas', 'paprika'];
// reikia sukurti sakini, reikalingi prduktai:.
const prduktai = `reikalingi prduktai: ${texts.join (', ')}`; // iterpia simbolius kuriuos idedi (. , !  .'') ir tt 
console.log(prduktai);

console.log('--------------reverse-------------');
// apsukti rezultatus -- tik masyve. (masyva apsukti)

console.log(texts);
texts.reverse();
console.log(texts);

console.log('--------------concat-------------');
// apjungti masyvus
const c1 = [1, 11];
const c2 = [2, 22];
const c3 = [3, 33];
const c4 = [4, 44];

const c12 = c1.concat(c2); // 1 ir 2 sujungiam
console.log(c12);

const c34 = c3.concat(c4); // 3 ir 4 sujungiam
console.log(c34);

const c123 = c1.concat(c2).concat(c3); // 1 ir 2 ir 3 sujungiam --- galima kiek nori sujungineti.
console.log(c123);

const c1234 = c1.concat(c2, c3, c4);  // sujungineti galim ir taip visus sujungs is eiles
console.log(c1234);

const c111 = c1.concat(c1, c1); // galima ir tuos pacius masyvus apjungti kelis kartus ar net perpanaudoti naudotus
console.log(c111);

console.log('-------------splice-------------');
// trina elementus is array nuo startines pozicijos iki end.
const h = [11, 22, 33, 44, 55];
console.log(h);

h.splice(0, 2); // nurodome startine pozicijo nuo kurios nutrinti viska. jei parenkam kelis parametrus tai nutrins nuo pradzios iki pabaigos (0 ... 2) istrina nuo 0 iki 2.
console.log(h);

