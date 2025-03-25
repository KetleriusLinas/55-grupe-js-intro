/* 
ARRAY - sarasas, masyvas, listas

let k = 0;
k = k +1;
k += 1;
k++; // kada padidints priies panaudojima ar po
++k; // po panaudojimo

*/

const empty = [];
console.log(empty);


 const luckyNumbers = [7, 777, 13, 102, 55];
 console.log(luckyNumbers);

 const students = ['Jonas', 'Maryte', 'Migelis', 'Xuanas'];
 console.log(students);
 

 const firstNumber = luckyNumbers[0];
 console.log(firstNumber);

 console.log(luckyNumbers[1]);
 console.log(luckyNumbers[2]);
 console.log(luckyNumbers[3]);

 console.log(students[2]);
 console.log(students[3]);
 console.log(students[0]);


console.log(empty.length);
console.log(luckyNumbers.length);
console.log(students.length);
console.clear();

//const vardas = ['a', 'b', 'c']; // svarbu vienaaskaita daugiskaita ,

const numbers = [10, 2, 8, 4, 6];
const totalSum1 = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
console.log(totalSum1);

let totalSum2 = 0;
//const totalSum2 = 0; // klaida consst negalima keisti (totalsum2) reikia pasikeist i let jei keisis reiksmes.
totalSum2 = totalSum2 + numbers[0];
console.log(totalSum2);

totalSum2 = totalSum2 + numbers[1];
console.log(totalSum2);

totalSum2 = totalSum2 + numbers[2];
totalSum2 = totalSum2 + numbers[3];
totalSum2 = totalSum2 + numbers[4];
console.log(totalSum2);

// patogesnis budas
let totalSum3 = 0;
totalSum3 =+ numbers[0];
totalSum3 =+ numbers[1];
totalSum3 =+ numbers[2];
totalSum3 =+ numbers[3];
totalSum3 =+ numbers[4];
console.log(totalSum3);

const dictionary = ['pomidoras', 'agurkas', 'bulve', 'kefyras', 'druska', 'svogunu laiskai', 'lasiniai'];
// Patiekalui reikes: a,b,c,d 

const sentence1 = 'Patiekalui reikes: ' + dictionary[0] + ', ' + dictionary[1] + ', ' + dictionary[2] + ', ' + dictionary[3] + dictionary[4] + ', ' + dictionary[5] + ', '  + dictionary[6] + '.';
console.log(sentence1);

console.log();

let sentence2 = 'Patiekalui reikes: ';
sentence2 += dictionary[0] + ', ';
sentence2 += dictionary[1] + ', ';
sentence2 += dictionary[2] + ', ';
sentence2 += dictionary[3] + ', ';
sentence2 += dictionary[4] + ', ';
sentence2 += dictionary[5] + ', ';
sentence2 += dictionary[6] + '.';

console.log(sentence2);

// let sentence3 = 'Patiekalui reikes: ';
// sentence3 += dictionary[0] + ', ';
// sentence3 += dictionary[1] + ', ';
// sentence3 += dictionary[2] + ', ';
// sentence3 += dictionary[3] + ', ';
// sentence3 += dictionary[4] + ', ';
// sentence3 += dictionary[5] + ', ';
// sentence3 += dictionary[6] + '.';

// index += 1;
// sentence3 += dictionary[index] + ', ';
// console.log(sentence3);

console.log('----------------4----------------');
let k = 0;
k = k +1;
k += 1;
k++; // kada padidints priies panaudojima ar po
++k; // po panaudojimo

let i = 0;
let sentence4 = 'Patiekalui reikes: ';
sentence4 += dictionary[i++] + ',';
sentence4 += dictionary[i++] + ',';
sentence4 += dictionary[i++] + ',';
sentence4 += dictionary[i++] + ',';
sentence4 += dictionary[i++] + ',';
sentence4 += dictionary[i++] + ',';
console.log(sentence4);
console.log('----------------5----------------');

let j = 0;
let sentence5 = ' ++ Patiekalui reikes: ';
sentence5 += dictionary[++j] + ',';
sentence5 += dictionary[++j] + ',';
sentence5 += dictionary[++j] + ',';
sentence5 += dictionary[++j] + ',';
sentence5 += dictionary[++j] + ',';
sentence5 += dictionary[++j] + ',';
console.log(sentence5);
