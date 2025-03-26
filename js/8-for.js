/*
FOR (loop) - ciklas


*/
// (let i = 0;) - starto salyga nuo kiek pradeda
// (i < 5;) - tesia iki kol tenkina sia salyga (gali but ir daugiau)
// i++ - prideda po viena ir vis tesia iki kol tenkina
for (let i = 0; i < 5; i++) { 
    console.log( 'number:', i);
}

console.log('-------------------');
console.log('number:', 0);
console.log('number:', 1);  // tas ptas kaip su for ciklu, tik viskas ilgiau ir netvarkinga
console.log('number:', 2);
console.log('number:', 3);
console.log('number:', 4);
console.log('number:', 5);
console.log('number:', 6);
console.log('-------------------');

for (let i = 0; i < 5; i++){ 
    console.log( 'number:', i);
}
console.log('-------------------');

for (let i = 5; i >= 0; i--){ 
    console.log( 'number:', i);
}
console.log('-------------------');

// 0, 1, 2 ,3 ,4,
//0, 2, 4, 6, 8, 10 ......

// i+=2 prideda po 2 ne po viena kaip priimtina i++
for (let i = 0; i < 11; i += 2) {
    console.log('kas du:', i)
}
console.log('-------------------');

// gali buti bet kokia raide, bet dazniausiai zymima i, nes (index) 

for (let k = 4; k < 5; k += 0.1) {
    console.log(k)
}
console.log('-------------------');

// jei reiktu dirbti su desimtainiais skaiciais 0.1 
for (let k = 0; k < 10; k++) {
    console.log(k / 10)
}
console.log('-------------------');
//skaiciuoja su paklaida deimtaine
console.log(0.1 + 0.2);
// jei reiktu skaiciuoti desimtainiais skaiciais. (su for ciklu)
console.log((10 + 20) / 100);
console.log((399 + 20) / 100);
console.log('-------------------');


for (let i = 0; i < 4; i++) {
    console.log('Labas');
}
console.log('-------------------');

const n = 4; 
// daugybos lenteles ciklas
console.log(`${n} * 1 = ${n * 1}`);
console.log(`${n} * 2 = ${n * 2}`);
console.log(`${n} * 3 = ${n * 3}`);
console.log(`${n} * 4 = ${n * 4}`);
console.log('-------------------');

for (let i = 0; i < 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
}
