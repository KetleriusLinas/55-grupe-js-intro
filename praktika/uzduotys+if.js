console.log('--------------uzduotys su IF-------------------');
console.log('----------------------1-----------------------');


const a = 3;
    if (a > 0){
    console.log('Taip');
}   else {
    console.log ('Ne');
}

// Patikrinkite, ar skaičius dalijasi iš 5.
// a. Pavyzdys: Pavyzdys: Patikrinkite, ar skaičius = 15 dalijasi iš 5.
console.log('----------------------2-----------------------');

const b = 15;
    if (b / 5){
    console.log('Taip');
}   else {
    console.log ('Ne');
}

// 3. Patikrinkite, ar teksto tipo kintamajame yra daugiau nei 5 simboliai.
// a. Pavyzdys: Patikrinkite, ar eilutėje str = 'hello' yra daugiau nei 5 simboliai.
console.log('----------------------3-----------------------');

const str = 'hello';

    if (str.length > 5){
    console.log('Taip');
}   else  {
    console.log ('Ne');
} 
//   if (str.length == 5) {
//     console.log('Simboliu lygiai 5');
// }

console.log('----------------------4-----------------------');


// 4. Patikrinkite, ar asmuo turi teisę balsuoti (amžius didesnis arba lygus 18 metų).
// a. Pavyzdys: Patikrinkite, ar asmuo turi teisę balsuoti, jei jo amžius = 20 metų.

const turiTeiseBalsuot = 20;

    if (turiTeiseBalsuot >= 18 ){
    console.log('Taip, turi teise balsuoti');
}   else  {
    console.log ('Ne, neturi teises balsuoti');
} 

console.log('----------------------5-----------------------');


// . Patikrinkite, ar asmuo yra paauglys (nuo 13 iki 19 metų).
// a. Pavyzdys: Patikrinkite, ar amžius = 15 metų atitinka paauglio amžių..

const arPauglys = 15;

    if (13 <  arPauglys && arPauglys <= 19 ){
    console.log('Taip, pauglys');
}   if (arPauglys > 19) {
    console.log('sauges');
}   if (arPauglys < 13) {
    console.log('vaikas');
}

console.log('----------------------6-----------------------');

// Patikrinkite, ar skaičius yra nelyginis.
// a. Pavyzdys: Patikrinkite, ar skaičius = 7 yra nelyginis

const nelyginis = 7;

    if (nelyginis <= 0) {
        console.log ('skaicius yra netinkamas');
    }else  if (nelyginis % 2 !== 0){
        console.log('Nelyginis skaicius');
    }else {
        console.log('lyginis');
    }

    console.log('----------------------7-----------------------');

//     7. Patikrinkite, ar eilutė lygi "JavaScript".
// a. Pavyzdys: Patikrinkite, teksto kintamasis = "JavaScript" yra lygus "JavaScript"

const tekstas = 'JavaScript';

    if (tekstas === 'JavaScript') {
        console.log('Tekstas yra vienodas');
}   else {
    console.log('Nera lygus');
};
console.log('----------------------8-----------------------');

// . Patikrinkite, ar skaičius yra nuo 10 iki 20 (imtinai).
// a. Pavyzdys: Patikrinkite, ar skaičius = 15 yra tarp 10 ir 20.

const imtinai = 15;
// if (typeof imtinai !== 'number' || isFinite(imtinai)) {
//     console.log('Net neskaicius');
// }

if (10 <=  imtinai && imtinai <= 20 ){
    console.log('Taip, skaicius tinka');
}   if (imtinai > 20) {
    console.log('Netinka, perdidelis');
}   if (imtinai < 10) {
    console.log('Netinka, permazas');
}
console.log('----------------------9-----------------------');

// Patikrinkite, ar skaičius yra didesnis arba lygus 100.
// a. Pavyzdys: Patikrinkite, ar skaičius = 150 yra didesnis arba lygus 100

const skaiciusDidesnis = 150;

    if (typeof skaiciusDidesnis !== 'number' || isNaN(skaiciusDidesnis)) {
        console.log('Tai, nera skaicius');
    }

    if (100 <  skaiciusDidesnis){
    console.log('Taip, skaicius didesnis');
}   else if (skaiciusDidesnis === 100) {
    console.log('Skaicius lygus');
}   else {
    console.log('Netinka, permazas');
}





