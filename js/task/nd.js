//------------------------------Kintamuju iniciavimas----------------------------------------
console.log('---------Kintamuju iniciavimas---------');
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
console.log(arrayText[0], arrayText[1], arrayText[2], arrayText[3], arrayText[4]);

console.log(arrayText1);
console.log(arrayText1[0], arrayText1[1], arrayText1[2], arrayText1[3], arrayText1[4]);

console.log (arrayText2);
console.log(arrayText2[0], arrayText2[1], arrayText2[2], arrayText2[3], arrayText2[4]);
// ---------------------------------Veiksmai su kintamaisiais--------------------
console.log();
console.log('-------Veiksmai su kintamaisiais--------');

const suma = pirmas + antras + trecias;
console.log(suma);
console.log('----------------------------');

const sumaStr = `${string} ${string1} ${string2}`;
const sumaStr1 = string + ' ' + string1 + ' ' + string2;
console.log(sumaStr1);
console.log(sumaStr);
console.log('----------------------------');

const arraySum = `${array[0]} - ${array[1]} + ${array[2]} - ${array[3]} + ${array[4]}`;
const arraySum1 = array[0] - array[1] + array[2] - array[3] + array[4];
console.log(arraySum);
console.log(arraySum1);

const array1Sum = `${array1[0]} - ${array1[1]} + ${array1[2]} - ${array1[3]} + ${array1[4]}`;
const array1Sum1 = array1[0] - array1[1] + array1[2] - array1[3] + array1[4];
console.log(array1Sum);
console.log(array1Sum1);

const array2Sum = `${array2[0]} - ${array2[1]} + ${array2[2]} - ${array2[3]} + ${array2[4]}`;
const array2Sum1 = array2[0] - array2[1] + array2[2] - array2[3] + array2[4];
console.log(array2Sum);
console.log(array2Sum1);
console.log('----------------------------');

const sumString = arrayText[4]+ ', ' + arrayText[3] + ', ' + arrayText[2] + ', '+ arrayText[1] + ', ' + arrayText[0];
console.log(sumString);


const sumString1 = arrayText1[4]+ ', ' + arrayText1[3] + ', ' + arrayText1[2] + ', '+ arrayText1[1] + ', ' + arrayText1[0];
console.log(sumString1);


const sumString2 = arrayText2[4]+ ', ' + arrayText2[3] + ', ' + arrayText2[2] + ', '+ arrayText2[1] + ', ' + arrayText2[0];
console.log(sumString2);
//--------------------------------Kintamuju palyginimai----------------------------
// console.clear();
console.log();
console.log('-----------Kintamuju palyginimai------------');

const a = 13;
const b = 8;

if(a > b) {
    console.log('Pomidoras');
    
} else {
    console.log('Bndyti dar karta');
}

if(a < b) {
    console.log('Pomidoras');
    
} else {
    console.log('Bndyti dar karta');
}

if(a == b) {
    console.log('Pomidoras');
    
} else {
    console.log('Bndyti dar karta');
}

if(a != b) {
    console.log('Pomidoras');
    
} else {
    console.log('Bndyti dar karta');
}

if(a >= b) {
    console.log('Pomidoras');
    
} else {
    console.log('Bndyti dar karta');
}

if(a <= b) {
    console.log('Pomidoras');
    
} else {
    console.log('Bndyti dar karta');
}
console.log('------------------------');

const c = 'pomidoras';
console.log(c.length);
const d = 'bandyti dar karta';
console.log(d.length);

if(c.length > d.length) {
    console.log('Pomidoras');
    
} else {
    console.log('Bndyti dar karta');
}

if(c.length < d.length) {
    console.log('Pomidoras');
    
} else {
    console.log('Bndyti dar karta');
}

if(c.length == d.length) {
    console.log('Pomidoras');
    
} else {
    console.log('Bndyti dar karta');
}

if(c.length != d.length) {
    console.log('Pomidoras');
    
} else {
    console.log('Bndyti dar karta');
}

if(c.length >= d.length) {
    console.log('Pomidoras');
    
} else {
    console.log('Bndyti dar karta');
}

if(c.length <= d.length) {
    console.log('Pomidoras');
    
} else {
    console.log('Bndyti dar karta');
}
console.log('--------------------------');

console.log(arrayText[0].length, arrayText[1].length, arrayText[2].length, arrayText[3].length, arrayText[4].length);

console.log(arrayText1[0].length, arrayText1[1].length, arrayText1[2].length, arrayText1[3].length, arrayText1[4].length);

console.log(arrayText2[0].length, arrayText2[1].length, arrayText2[2].length, arrayText2[3].length, arrayText2[4].length,);

const j = arrayText[0].length + arrayText[1].length + arrayText[2].length + arrayText[3].length + arrayText[4].length;
console.log(j);

const k = arrayText1[0].length + arrayText1[1].length + arrayText1[2].length + arrayText1[3].length + arrayText1[4].length;
console.log(k);

const l = arrayText2[0].length + arrayText2[1].length + arrayText2[2].length + arrayText2[3].length + arrayText2[4].length;
console.log(l);

if(j > k) {
    console.log('Pomidoras');
    
} else {
    console.log('Bndyti dar karta');
}

if(j < k) {
    console.log('Pomidoras');
    
} else {
    console.log('Bndyti dar karta');
}

if(j == k) {
    console.log('Pomidoras');
    
} else {
    console.log('Bndyti dar karta');
}

if(j != k) {
    console.log('Pomidoras');
    
} else {
    console.log('Bndyti dar karta');
}

if(j >= k) {
    console.log('Pomidoras');
    
} else {
    console.log('Bndyti dar karta');
}

if(j <= k) {
    console.log('Pomidoras');
    
} else {
    console.log('Bndyti dar karta');
}
console.log('--------------------------');

if(j > l) {
    console.log('Pomidoras');
    
} else {
    console.log('Bndyti dar karta');
}

if(j < l) {
    console.log('Pomidoras');
    
} else {
    console.log('Bndyti dar karta');
}

if(j == l) {
    console.log('Pomidoras');
    
} else {
    console.log('Bndyti dar karta');
}

if(j != l) {
    console.log('Pomidoras');
    
} else {
    console.log('Bndyti dar karta');
}

if(j >= l) {
    console.log('Pomidoras');
    
} else {
    console.log('Bndyti dar karta');
}

if(j <= l) {
    console.log('Pomidoras');
    
} else {
    console.log('Bndyti dar karta');
}
console.log('--------------------------');

if(k > l) {
    console.log('Pomidoras');
    
} else {
    console.log('Bndyti dar karta');
}

if(k < l) {
    console.log('Pomidoras');
    
} else {
    console.log('Bndyti dar karta');
}

if(k == l) {
    console.log('Pomidoras');
    
} else {
    console.log('Bndyti dar karta');
}

if(k != l) {
    console.log('Pomidoras');
    
} else {
    console.log('Bndyti dar karta');
}

if(k >= l) {
    console.log('Pomidoras');
    
} else {
    console.log('Bndyti dar karta');
}

if(k <= l) {
    console.log('Pomidoras');
    
} else {
    console.log('Bndyti dar karta');
}
// console.clear();

//--------------------------------Funkcijos----------------------------
console.log('---------------Funkcijos---------------');

function tusciaFunkcija() {
    return false;
}
console.log(tusciaFunkcija());


console.log('----------------persidaryti--------------------');

function daugyba(num1, num2) {
    // if (typeof num1 !== 'number')
    
        if (typeof num1 !== 'number') {
            return 'Pirmasis skaicius turi buti skaicius';
        }
        if (typeof num2 !== 'number') {
            return 'antras skaicius turi buti skaicius';
        }
        if (isNaN (num1)) {
        return ' Pirmas parametras NaN';
        }
        if (isNaN (num2)) {
            return ' antras parametras NaN';
            }
        if (isFinite(num1) === false) {
            return ' Pirmas parametras boolean';
        }
        if (isFinite(num2) === false) {
            return ' antras parametras boolean';
        }
        if (num1 === Infinity || num1 === -Infinity) {
            return 'Pirmasis skaicius negali begalybe';
        }
        if (num2 === Infinity || num2 === -Infinity) {
            return 'antras skaicius neagali begalybe';
        }
        const result = num1 * num2;
        return result;
        // return num1 * num2;
    }
    console.log(daugyba(2, 4));
    console.log(daugyba(-2, 4));
    console.log(daugyba(4, 5));
    console.log(daugyba(-7, -4.3));
    
    console.log(daugyba(5, 2));
    console.log(daugyba(-5, 0));
    
    console.log(daugyba('labas', -3));
    console.log(daugyba(3, 'vakaras'));
    console.log();
    console.log(daugyba (NaN, 5)); // tikrinam NaN
    console.log(daugyba (5, NaN));
    console.log(daugyba (NaN, NaN));
    console.log(daugyba (false, NaN));
    
    
    console.log(daugyba (2.84, -3.5));
    console.log(daugyba (2.99, -5));
    console.log(daugyba (2, 3.5));
    console.log(daugyba (Infinity, 3));
    console.log(daugyba (-Infinity, 2));
    console.log(daugyba (Infinity, -Infinity));
    console.log(daugyba (5, 3.5));

console.log('-----------------pasikartot-------------------');

// function skaitmenuKiekisSkaiciuje(kintamasis) {
//     // Patikriname, ar kintamasis yra skaičius
//     if (typeof kintamasis !== 'number' || isNaN(kintamasis)) {
//       console.log('Pateikta netinkamo tipo reikšmė.');
//       return; // Baigiame funkciją, jei tipas netinkamas
//     }
  
//     // Skaičiuojame skaitmenų kiekį
//     let skaitmenuKiekis = kintamasis.toString().length;
  
//     // Grąžiname skaitmenų kiekį
//     return skaitmenuKiekis;
//   }
  
//   // Testavimas
//   console.log(skaitmenuKiekisSkaiciuje(5)); 
//   console.log(skaitmenuKiekisSkaiciuje(781)); 
//   console.log(skaitmenuKiekisSkaiciuje(37060123456));
//   console.log(skaitmenuKiekisSkaiciuje(true));
//   console.log(skaitmenuKiekisSkaiciuje("asd"));
//   console.log(skaitmenuKiekisSkaiciuje(NaN));

//   console.log('----------------GPT--------------------');

// function didziausiasSkaiciusSarase(kintmasis) {
//     if (kintamasis !== string)
//         console.log('Pateikta netinkamo tipo reikšmė.');
//     return;
// }
// console.log(didziausiasSkaiciusSarase[]);

// Sąrašas su skaičiais
// let skaiciai = [1, 5, 3, 9, 2, 8];

// // Kintamasis didžiausiam skaičiui saugoti
// let didziausiasSkaicius = skaiciai[0];

// // Naudojame for ciklą, kad pereitume per sąrašą
// for (let i = 1; i < skaiciai.length; i++) {
//     if (skaiciai[i] > didziausiasSkaicius) {
//         didziausiasSkaicius = skaiciai[i];
//     }
// }

// // Išvedame didžiausią skaičių
// console.log("Didžiausias skaičius:", didziausiasSkaicius);
