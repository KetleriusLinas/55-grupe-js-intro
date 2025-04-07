// function declaration


const n1 = 7;
const n2 = 5;

// 1) function declaration

function sum (a, b) {

    return a + b;
}

console.log(`${n1} + ${n2} = ${sum(n1, n2)} `);

// 2) kintamajam priskirta anonimine funkcija
const minus = function minus (a, b) { // vardo iskelimas kaip kintamojo.
    return a - b;
}
console.log(`${n1} - ${n2} = ${minus(n1, n2)} `);

// 3) arrow function
const multi = (a, b) => { // kur labai primityvi logika, labai paprasta gali rasyti taip. Geriau pirmuou budu.
    return a * b;
}
console.log(`${n1} * ${n2} = ${multi(n1, n2)} `);

// 3a) 
// jei logikoks bloke yra tik viena salyga , galima nerasyti {return}
const div = (a, b) => a / b;

console.log(`${n1} / ${n2} = ${div(n1, n2)} `);

// 3b) arrow function
// jei parametru bloke yra tik vienas parametras
// tai galima nerasyti ()
const sqr = a => a * a;
console.log(`${n1} * ${n1} = ${sqr(n1)} `);
console.log(`${n2} * ${n2} = ${sqr(n2)} `);


// Funkcija grazina vardo pirma raide
const firstLetter = (name) => name[0];

console.log(firstLetter('Jonas'));
console.log(firstLetter('Maryte'));

// funkcija grazina pataisyta varda
const corretName = (name) => name[0].toUpperCase() + name.slice(1).toLowerCase();
// const corretName = (name) => {
//     const first = name[0].toUpperCase();
//     const rest = name.slice(1).toLowerCase();
//     return first + rest;
// }
console.log(corretName('jonas'));
console.log(corretName('MarYte'));
console.log(corretName('ONA'));

// Funkcija grazina atbulini teksta

const reverseString  = text => text.split('').reverse().join('');
// su split pasivertem i masyva (ir tuomet galima reverse, su array methodu)
//     return text.split('').reverse().join(''); 
// }

console.log(reverseString('labas'));
console.log(reverseString('kedes'));
console.log(reverseString('sula'));
console.log('--------------------------------------');
