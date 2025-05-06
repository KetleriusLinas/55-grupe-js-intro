
const a1 = [1, 11, 111, 1111];
const a2 = [2, 22, 222, 2222];
const a3 = [3, 33, 333, 3333];
const a4 = [4, 44, 444, 4444];

//siekiamybe gauti:
// [1, 11, 111, 1111, 2, 22, 222, 2222]
// iskopijuoja is masyvo ir sukelia i nauja masyva

const a12 = a1.concat(a2);
console.log(a12);

const b12 = [...a1, ...a2];
console.log(b12);

const b423 = [...a4, ...a2, ...a3];
console.log(b423);

const b333 = [...a3, ...a3, ...a3];
console.log(b333);

// [7, 4, 44, 444, 88];
// masyva galima sukurti ir prideti tik dali. kopijuojant viska kopijuoja, negalima tik poros elementu kopijuoti
const c1 = [7, ...a4, 88];
console.log(c1);

console.log('-----------------------');


const o1 = {name: 'Jonas'};
const o2 = {age: 99};
const o3 = {isMarried: true};

// jei objectas konstruojamas viskas {} skliaustose daroma
const o12 = {...o1, ...o2};
console.log(o12);

const o123 = {...o1, ...o2, ...o3};
console.log(o123);

const p1 = {a: 1};
const p2 = {b: 2};
const p3 = {c: 3, a: 7};

const p12 = {...p1, ...p2}; // turi a rakta
console.log(p12);

const p123 = {...p1, ...p2, ...p3}; // irgi turi a rakta, ji overaitina a:1  --- ji pakeite i a:7
console.log(p123);

const p312 = {...p3, ...p1, ...p2}; // irgi turi a rakta, ji overaitina a:7 --- ji pakeite i a: a
console.log(p312);

// su objektais pakeicia. 
// su masyvais juos sudeda.

const p4 = {d:4,... p3}; // galima irgi savo konstruoti ir plius ikopijuoti dar.. SVARBIAUSIA eiliskumas nes jie viens kita gali keisti.
console.log(p4);
console.log('-----------------------');


// sukuri nauja masyva ...
const marks = [10, 2, 8, 4, 6];
const [first, second, ...rest] = marks;

console.log(first);
console.log(second);
console.log(rest);

// saraso   pirmas,     antras     ir visi like nariai
const marks2 = [first, second, ...rest];

console.log(marks2);

const names = ['Jonas', 'Maryte', 'Petras', ' Ona'];
const n1 = names[0]; // 'senamadiskas' variantas
const n2 = names[1];
const n34 = names.slice(2)  // istraukia tam tikrus narius is saraso (nuo 2 pozicijos)

console.log(n1);
console.log(n2);
console.log(n34);

const [x, y, ...z] = names;  // su destrukturyzavimu - --- taip galima
// const [...z, x, y] = names;   // taip negalima --- tik vienas budas 
// pradzioj issirenkam ka reikia, paskutinis tik gali buti (rest...) 
console.log(x);
console.log(y);
console.log(z); /// ...z surenka likusias reiksmes  (apart jau isrnktu x, y)

// const [...z] = names; // issitrauke visa masyva lauk (kitaip sakant pasidare masyvo kopija)
// console.log(z);

// const mix = [1, 'asd'];
const mix = [1, 'asd', true, [], {}, undefined];  // masyvo viduje esasntis elementai , neturi itakos viska isimti galim
const [m1, m2, m3, ...mRrest] = mix;

console.log(m1);
console.log(m2);
console.log(m3);
console.log(mRrest);
console.log();


const person = {
    address: 'Miestas g.7',  // tik ARRAY turi indexus [0],[1],[2] todel isimti itakos neturi, ir kai destrukturizuoji, nepanaudotus
    // duomenis (raktus) surenka ir isveda -- sudeda i nauja objekta.
    name: 'Jonas',
    age: 99,
    isMarried: true,
};
// ka destrukturizuoji tokie ir skliaustai (arrai tai []), (masyva {}) ir tt.
const { name, age, ...p} = person;

// is objecto nera kaip issimti visu likusiu raktu.. TIK destrukturizavimas
// const pName = person.name;
// const pAge = person.age;
console.log(name);
console.log(age);
console.log(p);

const {address, ...pp} = p; // ir toliau galima traukti is objecto (...rest) ir toliau dirbti ir dar panaudoti likusia dali
console.log(p.address); // toliau galima jaudoti ir is (p objecto) issitraukineti informacija kaip is normalaus objecto
console.log(p.isMarried);


console.log('----------destrukturizavimo uzdavinys-------------');

const students = [
    {name: 'Jonas', age: 99},
    {name: 'Maryte', age: 88},
    {name: 'Petras', age: 77},
    {name: 'Ona', age: 66},

];
// Studentui, vardu Jonas yra 99 metai.

// for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     const name = student.name; // laikini kintamieji - informacijos gylesniam istraukimui
//     const age = student.age;    // laikini kintamieji - informacijos gylesniam istraukimui

//     const result = `Studentui, vardu ${name}, yra ${age} metai.`
// //     console.log(student); // pasitikrinam
// //     console.log(student.name);
// //     console.log(student.age);
//      console.log(result);
     
// };

// sutrumpinta versija
for (const student of students) {
    const name = student.name; // laikini kintamieji - informacijos gylesniam istraukimui
    const age = student.age;    // laikini kintamieji - informacijos gylesniam istraukimui
    const result = `Studentui, vardu ${name}, yra ${age} metai.`;
    console.log(result);
};
console.log('----trumpiau---');

// dar trumpesne su desstrukturizavimu
for (const student of students) {
    const {name, age} = student;
    const result = `Studentui, vardu ${name}, yra ${age} metai.`;
    console.log(result);
};
console.log('---daar---trumpiau---');

// dar trumpesne su desstrukturizavimu
for (const {name, age} of students) {
    const result = `Studentui, vardu ${name}, yra ${age} metai.`;
    console.log(result);
};

console.clear();

const numbers = [
    [0],
    [1, 11],
    [2, 22, 222],
    [3, 33, 333, 3333],
    [4],
    [5],
    [6],
];

// masyvo pirmas skaicius yra X, ir dar yra Y papildomu skaiciu.

for (const numberList of numbers) {

    const [first, ...rest] = numberList // si viena eilute, atstoja po apacia tas dvi eilutes
    // const first = numberList[0];
    // const rest = numberList.slice(1);
    // console.log(numberList);
    
    const result = `Pirmas skaicius yra ${first} ir dar yra ${rest.length}. papildomu skaiciu`
    console.log(result);
    
}
// for (let i = 0; i < numbers.length, i++) {
// }
console.log();
console.log('----------destrukturizavimo trecia dalis-------------');

// Math.min(1);
// Math.min(1, 2, 3, 4);

// min radimo funkcija
// kaip array ieskom maziausio

//[1, 2, 3] --> {}
function min (...list) { // ... list surenka visas nepanaudotas reiksmes
    // console.log(list);
    let minimum = Infinity;

    for (const number of list) {
        if (number < minimum) {
            minimum = number;
        }
    }

    return list[0];
}

console.log(min(1));
console.log(min(1, 2, 3));
console.log(min(-1, -2, -3));
console.log(min(-1, -2, -3, -2, -3, -2, 3));

// irgi veikia be funkcijos
// console.log(Math.min(1));
// console.log(Math.min(1, 2, 3));
// console.log(Math.min(-1, -2, -3));
// console.log(Math.min(-1, -2, -3, -2, -3, -2, 3));
console.log();

const ddd = [1, 2, 3];
console.log(Math.min(...ddd));
console.log(Math.max(...ddd));

// (...) ir destrukturyzavimas, spread ir dar ....
// ...ddd = 1, 2, 3

const f = [...ddd];
console.log(f);
