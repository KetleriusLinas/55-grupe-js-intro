
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
