
//uzddavinys:
//ciklas, cikle

const n = 4; 
// daugybos lenteles ciklas
console.log(`${n} * 1 = ${n * 1}`);
console.log(`${n} * 2 = ${n * 2}`);
console.log(`${n} * 3 = ${n * 3}`);
console.log(`${n} * 4 = ${n * 4}`);
console.log('-------------------');


for (let n = 1; n <= 5; n++) {
    console.log('n:', n);

    for (let i = 1; i < 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
    }
}

// for (let i = 0; i < 10; i++) {
//     console.log(`${n} * ${i} = ${n * i}`);
// }
