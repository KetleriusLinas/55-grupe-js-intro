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
console.log(magic.indexOf(55)); // isveda indexo vieta. 4
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

console.log('--------------MAP------skaiciai-----------');


const k = [10, 2, 8, 4, 6]; // padauginti kiekviena nari * 2
const k2 = [];

// for'u pasidarius ---
//  MAP // ciklas

for (const n of k) {
    k2.push(n * 2);
}
console.log(k2);

// patrigubinti array su funkcija
function triple (n) {
    return n * 3;
}
// map - pasleptas ciklas
const k3 = k.map(triple)
console.log(k3);


const quadro = n => n * 4;
const k4 = k.map(quadro);
console.log(k4);


const k5 = k.map(n => n * 5);
console.log(k5);

// pasidare masyvo kopija
const k6 = k.map(n => n);
console.log(k6);

const k7 = k.map(n => n + 1);
console.log(k7);

console.log('--------------MAP------tekstai-----------');

const dict = ['pomidoras', 'agurkas', 'bulve'];
const dict2 = dict.map(w => w[0]); // sukuria nauja masyva ir isveda pirmasias raides
    console.log(dict2);
    
const dict3 = dict.map(w => w.length);
    console.log(dict3); // sukuria masyva ir isveda ilgius zodiu

const people = [
    {name: 'Jonas', age: 99},
    {name: 'Maryte', age: 88},
    {name: 'Petras', age: 77},
    {name: 'Ona', age: 66},
];
const people100 = people.map(person => `${person.name} liko ${100 - person.age} metai.`)
// sukurtas naujas objectas person.


 // sukurimas kiek liko metu iki 100
// [
//     'Jonas liko 1 metai.',
//     'Maryte liko 12 metai.',
// ]

console.log(people100);


const peopleNames = people.map(person => person.name);
console.log(peopleNames);

const peopleAge = people.map(person => person.age);
console.log(peopleAge);


// norit prideti i tokia paprasta rodykline funkcija, ja reikia isskleisti. 
const peopleMarried = people.map(person => {
    person.isMarried = true;
    person.luckyNumbers = 13;
    return person; 
});
console.log(peopleMarried);

console.log('--------------Filter-----------');
// FILTER

const p = [10, 2, 8, 4, 6];
const p5 = [];

// ipushini jei skaiciai didesni nei 5
for (const n of p) {
    if (n > 5) {
        p5.push(n)
    }
}
console.log(p5);

// filteris ciklas, pasiema kiekviena nari ir ji execute'ina.. 
//pasiema didesnius skaicius nei 6.
const p6 = p.filter(n => n > 6); // prafiltravo, pasieme tuos skaicius kurie tenina salyga
console.log(p6);

const p7 = p.filter( n => n < 7);
console.log(p7);

const p8 = p.filter( n => n > 2 && n < 8); // n => funkcija
console.log(p8);

const texts5 = ['labas', '', 'rytas', '', 'Lietuva'];
const texts5Updated = texts5.filter(t => t.length > 0); // isvede tekstus kurie daugiau nei 0
const texts5Updated2 = texts5.filter(t => t); // isveda irgi teksta nes "pozityvus tekstas"
// tuscias negatyvus -- bet nenaudoti taip, tik zinoti gerai
console.log(texts5Updated);
console.log(texts5Updated2);

console.clear();

console.log('-------------------fill-----------------');
// fill
const default5 = [0, 0, 0, 0, 0]; // visos masyvo reiksmes turi buti vienodos
const default7 = Array(7).fill(99); // array su 7 pozicijom jau (Array(7)). fill(99), uzpilde array viena reiksme
console.log(default7);

const zeros1 = Array(10); // sukuria masyva su tinkamu kiekiu poziciju
const zeros = Array(10).fill('abc'); // uzpildo masyva pasirinkta reiksme
console.log(zeros);

const negatives = Array(8).fill(false);
console.log(negatives);

const emptySpaces = Array(5).fill('');
console.log(emptySpaces);

const demo = [10, 2, 4, 6, 8];
console.log(demo);
demo.fill(777); // overaitina masyva ir pakeicia sena reiksme nauja. Bet dazniausiai naudojamas naujam masyvui.
console.log(demo)

console.log('-----------------every-------------------');
// every -- kiekvienas. jei visi tenkina salyga tada true, jei bent vienas netenkina tuomet false.

const trees = ['uosis', 'egle', 'azuolas', 'tuopa'];
const allTreesValid = trees.every(s => s.length > 0)
console.log(allTreesValid);

const allTreesNameSize5 = trees.every(s => s.length === 5); // arba visi tenkina, jei nors vienas netenkina vadinas visi netenkina salygos.
console.log(false);

console.log('-----------------some-------------------');
//some - bent vienas. jei bent vienas tenkina salyga tuomet true. false jei nei vienas netenkina.

const allTreesValid1 = trees.some(s => s.length > 0) // true
console.log(allTreesValid1);
const allTreesNameSize51 = trees.some(s => s.length === 5); // true
console.log(allTreesNameSize51);

const allTreesNameSize10 = trees.some(s => s.length === 10); // false , nei vienas nera lygus 10
console.log(allTreesNameSize10);


