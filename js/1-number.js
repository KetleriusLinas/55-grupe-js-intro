/*
Kintamuju iniciavimas:
- const (default)
- let (kai reiksme turi galeti kisti)
- var (nenaudoti, nebent zinai ka darai)

NUMBER - skaiciai

- sveikieji, desimtainiai
- teigiami, neigiami
- Infinity, -Infinity

- NaN (skaiciaus tipo klaida) - nenormalus skaicius
if (isNaN = (a))
return ' Pirmas parametras NaN'
if (isFinite(a) === false) {
return ' Pirmas parametras NaN'
}
if ('' + b === 'NaN') {
return ' Pirmas parametras NaN'

}


Aritmetiniai operatoriai:
+, -, *, /, ** (kelimas laipsniu), % (dalybos liekana)

Aritmetiniai priskyrimo operatoriai:
+=, -=, *=, /=, **= (kelimas laipsniu), %= (dalybos liekana)

isFinite 
*/

const a = 1;
console.log(a);

const b = 2;
console.log(b);

const c = a + b;
console.log(c);

const luckyNumber = 7.77;
console.log(luckyNumber);

const n1 = 7 + 5;
console.log(n1);

const n2 = 7 - 5;
console.log(n2);

const n3 = 7 * 5;
console.log(n3);

const n4 = 7 / 5;
console.log(n4);

const n5 = 7 ** 5;
console.log(n5);

const n6 = 7 % 5;
console.log(n6);

console.log('----------------');

let age = 99;
console.log(age);

age = 100;
console.log(age);

age = 101;
console.log(age);

const pi = 3.141592654;
console.log(pi);

// console.clear();

let sum = 10;
console.log(sum);

sum = sum + 1;
console.log(sum);

sum = sum - 2;
console.log(sum);

sum = sum * 3;
console.log(sum);

sum = sum / 4;
console.log(sum);

let sum2 = 10;
console.log(sum2);

sum2 += 1;
console.log(sum2);

sum2 -= 2;
console.log(sum2);

sum2 *= 3;
console.log(sum2);

sum2 /= 4;
console.log(sum2);

// console.clear();

console.log('kvadratine saknis');

console.log(81 ** (1 / 2));
console.log(27 ** (1 / 3));

console.log(16 ** (1 / 2));
console.log(100 ** (1 / 2));
console.log(80 ** (1 / 2));

// console.clear();

//------------------------------------HOME WORK----------------------------------------------

const pirmas = 7;
const antras = 12;
const trecias = 2;

console.log(pirmas);
console.log(antras);
console.log(trecias);
console.log('----------------------------');

const string = 'drasus';
const string1 = 'stiprus';
const string2 = 'vikrus';

console.log(string);
console.log(string1);
console.log(string2);
console.log('----------------------------');

const array = [5, 9, 12, 5, 41];
const array1 = [12, 36, 5, 74, 100];
const array2 = [8, 11, 10, 14 ,70];

console.log(array);
console.log(array1);
console.log(array2);
console.log('----------------------------');

const arrayText = ['Labas', 'Lietuva', 'Kaip', 'sekas', 'tau?'];
const arrayText1 = ['As', 'Esu', 'Bit', 'Studiju', 'Studentas'];
const arrayText2 = ['Siandien', 'yra', 'grazi', 'diena', 'labai'];
console.log(arrayText);
console.log(arrayText1);
console.log (arrayText2);
console.log('---------------------Veiksmai su kintamaisiais---------------------');


const suma = pirmas + antras + trecias;
console.log(suma);
const sumaStr = `${string} ${string1} ${string2}`;
console.log(sumaStr);
