/*
TYPEOF - duomenu tipo nustatymo operatorius

*/

function sum(a, b) {
    return a + b;
}

console.log(typeof 5);
console.log(typeof -5);
console.log(typeof 3.1475952);

console.log(typeof 'asd');
console.log(typeof '');

console.log(typeof true);
console.log(typeof false);
console.log(typeof []);

console.log(typeof [1, 5, 8 ,9 ,15]);
console.log(typeof [false]);
console.log(typeof ['a', 'b']);

console.log(typeof sum);

console.log(typeof undefined);

console.log(typeof null);

console.log(typeof {});
console.log();

const a = null; // budas pasiklausti ar nullas
if (null === null) {
    console.log('NULL');
}

const b = []; // pasiklausimas ar dirbi su masyvais (array)
if (Array.isArray(b)) {
    console.log('Array')
}

const c = 5;
if (Array.isArray(c)) {
 } else {
    console.log('Ne array')
}