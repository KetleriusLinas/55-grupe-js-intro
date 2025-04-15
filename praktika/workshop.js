// imti tam tikrus skaicius is array ir su jais dirbtu.
// galima ir priskirti reiksme kinatamajam ir ji issikviesti logikoje
// let n = 3;

// for (let i = 0; i < 20; i+= 3) {
//     // console.log(i);
//     // if(i % 2 === 0) {
//     // if(i % n === 0) {
//         console.log(i);
//     // }
// }


// // jeigu reiktu issimti is ciklo (panaikinti) tam tikrus reiksmes-skaicius.
// for (let i = 0; i <= 14; i++) {
//     console.log(i);
//     if ( i == 7) {
//         i = 12;
//     }
// }


// let zodis = '';
// let n = ['labas', 'Kaip', 'sekas', 'tau', 'ponas'];

// for (let i = 0; i < n.length; i++) {
//     console.log(i);
// }

// console.log('--------kartojimas su funcijom----------');


// // let saule = '***';
// // let debeselis = '888888';

// // function funkcija (zenklas) {

// //     // console.log(debeselis + ' ' +  zenklas);
// //     return `rytas` + ' ' + saule;

// // }
// // console.log(funkcija(saule));
// // funkcija(debeselis);


// // true ar false ..... ?????
// if (funkcija() == true) {
//     //tada darom kazka
// } else if { (funkcija() == false)
// } else {
//     console.log ('padarete klaida');
// }




// kvadratu ir kubu pakelti


// for (let i = 0; i <= 5; i++) {
//     console.log(i + ' '  + 'Skaiciai kvadratu ' + i * i);
// }



// for (let i = 0; i <5; i++){
//     let a = '*';
//     console.log(a);
//     for (let n = i; n >= 1; n--)
//         a = a + '*';
// }


// for (let i = 0; i <= 5; i++) {
//     console.log(i + ' '  + 'Skaiciai kvadratu ' + i * i);
// }

// fibonacio seka

// let x = 1;
// let y = 2;
// let z = 0;

// for ( let i 1; i <= 10, i++) {
//     if (i === 1) {
//         console.log(x);
//     } else if
// }

// console.log('sveikas, juozai');

function greet(name){
    if(name === "Johnny") {
      return "Hello, my love!";
  } else {
    return "Hello, " + name + "!";
  }
}
console.log(greet('Vilma'));
console.log(greet('Johnny'));

console.log('----------find the difference in age---------');
console.log('----------su destytoja---------');

function differenceInAges(ages){
  let min = Infinity;
  let max = -Infinity;
for (let i = 0; i < ages.length; i ++) {
  if (ages[i] < min) {
    min = ages[i];
  }
  if (ages[i] > max) {
    max = ages[i];
  }
}
let dif = max - min;
  return [min, max, dif];
}

console.log(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
console.log(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);

console.log('----------find the difference in age---------');
function differenceInAges (ages) {

  let max = Math.max(...ages),
      min = Math.min(...ages)
      diff = max - min
      
  return [min, max, diff]
};

console.log('--------Keep hydrated-----------');
console.log('----------su destytoja---------');

function litres(time) {
  return Math.floor(time * 0.5);
}
console.log(Math.floor(1.6));

console.log(litres(0));
console.log(litres(1));
console.log(litres(2));
console.log(litres(3));
console.log(litres(4));

console.log('--------calculate- testine kata----------');
console.log('----------su destytoja---------');

function magNumber(info) {
  let mag = 0;
  if(info[0] === 'PT92') {
    mag = Math.ceil ((3 * info[1]) / 17)
  }
  if(info[0] === 'M4A1' || info[0] === 'M16A2') {
    mag = Math.ceil ((3 * info[1]) / 30)
  }
  if(info[0] === 'PSG1') {
    mag = Math.ceil ((3 * info[1]) / 30)
  }
  return mag;
}

console.log(magNumber(5));
console.log('--------calculate- BMI----------');
console.log('----------su destytoja---------');


function bmi(weight, height) {
  let result = '';
  if (weight / (height ** 2) <= 18.5){
    result = 'Underweight';
  }
   else if(weight / (height ** 2) <= 25.0) {
    result = 'Normal';
 } else if (weight / (height ** 2) <= 30.0) {
    result = 'Overweight';
 } else  {
    result = 'Obese'
 }
 return result;
}

console.log(bmi(50, 1.80));
console.log(bmi(80, 1.80));
console.log(bmi(90, 1.80));
console.log(bmi(100, 1.80));

console.log('--------calculate- BMI----------');
console.log('----------kitoks kodas---------');

// const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
//                                     bmi <= 25 ? "Normal" :
//                                     bmi <= 30 ? "Overweight" : "Obese";

console.log('--------Function 2 - squaring an argument----------');
console.log('----------su destytoja---------');

// function square(num) {
//   return num * num;
// }
// console.log(square(5));

console.log('-------------------');

const square = num => num * num;
console.log(square(5));

// let current = '';
// function 
// if (current === green)

function updateLight(current) {
  // let current = '';
  if (current === 'green') {
    return 'yellow';
  } if (current === 'yellow') {
    return 'red';
  }   if (current === 'red') {
    return 'green';
  }
}
  console.log(updateLight('green'));
  console.log(updateLight('yellow'));
  console.log(updateLight('red'));

  console.log('----------neismasciau---------');


function multiTable(number) {
  let result = '';
  for (let i = 1; i <= 10; i++){ 
      result += `${i} * ${number} = ${i * number}\n`;
 }  
  return result.trim();
}
console.log(multiTable(5));
console.log(multiTable(1));

console.clear();

function digitize(n) {
  let result = [];
  let str = n.toString();

  for (let i = 0; i < str.length; i++) {
    result.push(Number(str[i]));
    }
  return result.reverse();
}

function digitize(n) {
  return String(n).split('').map(Number).reverse();// va kaip turejo but
}
console.log(digitize(35231), '--->', 13253);
console.log(digitize(0), '--->', 0);
console.log(digitize(12345), '--->', 54321);


// const n1 = [1, 11, 111];
// const n2 = [2, 22, 222, 2222];
// const n12 = [];

// for (let i = 0; i < n1.length; i++ ) {
//     n12.push(n1[i]);

function myFirstKata(a, b) {
  if (typeof(a) === "number" && typeof(b) === "number") {
   return a % b + b % a;
  } else {
     return false;
  }
}

console.log(myFirstKata(3, 5));
console.log(myFirstKata('hello', 5));
console.log(myFirstKata(67, 105));
console.log('---------------Neisprendziu!!!------------------');

// const getDrinkByProfession = (param) => name.toLowerCase();
// const getDrink = (parametras) => parametras.toLowerCase();

function getDrinkByProfession (param) {
     
const getDrink = (param) => {
  return param.toLowerCase();
}
const profession = getDrink(param);

     if (param === 'Jabroni') {
      return 'Patron Tequila';
     } 
     else if (param === 'School Counselor') {
      return 'Anything with Alcohol';
     } 
     if (param === 'Programmer') {
      return 'Hipster Craft Beer';
     } 
     if (param === 'Bike Gang Member') {
      return 'Moonshine';
     } 
     if (param === 'Politician') {
      return 'Your tax dollars';
     } 
     if (param === 'Rapper') {
      return 'Cristal';
     } 
     else {
      return 'Beer';
     } 
    
}
console.log(getDrinkByProfession('Jabroni'));
console.log(getDrinkByProfession('Programmer'));
console.log(getDrinkByProfession('ProGgrsSamGmer'));
// console.log(getDrink('abSroSni'));


function solution(a, b){
  if (a >= b) {
    return b + a + b;
  } else {
  return a + b + a;
}
}
// console.log(solution('45', '1'));
// console.log(solution('13', '200'));
// console.log(solution('Soon', 'Me'));
// console.log(solution('U', 'False'));

// const solution = (a, b) => {
//   return a + b + a;
// }
// const isAdult = years >= 18 ? 'suagues' : 'nesuauges';

console.log(solution('45', '1'));
console.log(solution('13', '200'));
console.log(solution('Soon', 'Me'));
console.log(solution('U', 'False'));



// function magNumber(info){
//   if (info[0] === "PT92") {
//       return  Math.ceil((3 * info[1]) / 17)
//     }
//   if (info[0] === "M4A1"){
//       return Math.ceil((3 * info[1]) / 30)
//     }
//   if (info[0] === "M16A2"){
//       return Math.ceil((3 * info[1]) / 30)
//     }
//   if (info[0] === "PSG1"){
//       return Math.ceil((3 * info[1]) / 5)
//     }
// }


function sumArray(array) {
  // Input validation: Check if the array is valid and has at least 3 elements
  if (!Array.isArray(array) || array.length <= 2) {
    return 0; // return 0 if the array is invalid or too short
  }

  const min = Math.min(...array); // suranda maziausia
  const max = Math.max(...array); // suranda didziausia

  const indexMin = array.indexOf(min);
  const indexMax = array.indexOf(max);

  // Remove the smallest value
  array.splice(indexMin, 1);

  // After removing the smallest element, the index of max might change, so we re-check the max index
  const indexMaxAdjusted = array.indexOf(max);

  // Remove the largest value
  array.splice(indexMaxAdjusted, 1);

  // Now sum the remaining elements
  const sum = array.reduce((acc, val) => acc + val, 0);

  return sum;
}

console.log(sumArray([2, 4, 6 ,8]));
console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray([ -6, -20, -1, -10, -12 ]));
console.log(sumArray(null));
console.log(sumArray([]));
