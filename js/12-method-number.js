/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

daugiau metodu visokiu!.
*/

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// isFinite ar baigtine reiksme ar ne
console.log(isFinite(5), Number.isFinite(5));
console.log(isFinite(-3.14), Number.isFinite(-3.14));
console.log(isFinite(Infinity), Number.isFinite(Infinity));
console.log(isFinite(NaN), Number.isFinite(NaN));
console.log(isFinite('aasdasdas'), Number.isFinite('aasdsad'));

console.log(isFinite([]), Number.isFinite([]));
console.log(isFinite({}), Number.isFinite({}));

// du viename tikrina ir numberi ir ar sveikasis(isFinite), siulo vistiek tikrinti per typeof
if (Number.isFinite()); // skirtingi irankiai, galima naudoti abu

console.log('--------isIntiger----------');
//
console.log(Number.isInteger(5));
console.log(Number.isInteger(-5));
console.log(Number.isInteger(0));
console.log(Number.isInteger(3.14));
console.log(Number.isInteger(-3.14));
console.log(Number.isInteger(NaN));
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(-Infinity));
console.log(Number.isInteger('asd'));
console.log(Number.isInteger(true));
console.log(Number.isInteger([]));
console.log(Number.isInteger({}));

console.log('--------isNaN----------');
// pirma tikrina ar yra skaiciau stipo ruodmo "number" ir tuomet tikrina ar esi NaN
// naudoti typeof vistiek (mazesne rizika suklysti)
console.log(Number.isNaN(5), isNaN(5));
console.log(Number.isNaN(3.14), isNaN(3.14));
console.log(Number.isNaN(Infinity), isNaN(Infinity));
console.log(Number.isNaN(NaN), isNaN(NaN));

console.log('--------parseFloat----------');

// // is stringo isiema skaicius tiek float tiek int

const userInput = '22';
const userNumber = parseInt(userInput); // parseInt -- dirba su sveikaisiais skaiciais
const date = userNumber + 5; // sujungia tekstus (jei be parseInt)
const date1 = userInput * 5; // js pats pakeicia tipa ir sudaugina kaip skaicius..
console.log(date);
console.log(date1);
console.log();

console.log(parseInt('65'));
console.log(parseInt('65.314')); // isveda be desimtainiu
console.log(parseInt('-65'));
console.log(parseInt('-65.314')); // isveda be desimtainiu

// parseInt ima kiekviena nuo pradziu simboli ir tikrina ar esi skaitmuo. tik gaves !number sustoja ir nebeistraukia nieko
console.log(parseInt('labas'));
console.log(parseInt('labas111'));
console.log(parseInt('222labas'));
console.log(parseInt('222labas222'));
console.log(parseInt(true));
console.log();

// is stringo isiema skaicius tiek float tiek int
// float naudoja dar skaicius ir po kablelio, (int) ne
console.log(parseFloat('44'));
console.log(parseFloat('44.4'));
console.log(parseFloat('-44'));
console.log(parseFloat('-44.4'));

console.log(parseFloat('55.66labas'));
console.log(parseFloat('labas55.66'));
console.log(parseFloat('55.66lab55.66as55.66'));
console.log(parseFloat('77.66.55'));
console.log(parseFloat('-5.-5'));
console.log(parseFloat('--55'));
console.log(parseFloat('+5-5'));
console.log('--------toFixed----------');

//  "paiema skaicius po kablelio kiek nustatai" matomai
const a = 12.3456789;
console.log(a);
console.log(typeof a);
// pakeite skaiciu i string tipa:
const b = a.toFixed(4);
console.log(b);
console.log(typeof b);
// atkeite string tipa i number tipa
const c = parseFloat(b);
console.log(c);
console.log(typeof c);


console.log(12.3456789.toFixed(2));
console.log(3.14.toFixed(2));
console.log(3.14.toFixed(4));
console.log(3.14.toFixed(6));

