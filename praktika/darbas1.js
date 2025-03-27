

let zodisIlgas = 'LabasVakarasStoruli';

// let vienaRaide = zodisIlgas.slice(-1);
// chartAt isiimineja raides .
let vienaRaide = zodisIlgas.charAt(3);

console.log(vienaRaide);

let a = zodisIlgas.charAt(7);
let b = zodisIlgas.charAt(2);
let c = zodisIlgas.charAt(15);
let d = zodisIlgas.charAt(5);
let e = zodisIlgas.charAt(12);

let visasZodis = a + c + a + e;
console.log(visasZodis);

let raide = ' ';
let pilnasZodis = ' ';
for (let i = zodisIlgas.length - 1; i >= 0; i--) {
    raide = zodisIlgas.charAt(i);
    pilnasZodis += raide;
}

console.log(pilnasZodis);


// for cikle, dar vienas for ciklas.
// isveda i = 0, 3 reiksmes, i = 1, 3 reiksmes, i = 2, 3 reiksmes.

for (let i = 0; i < 3; i++) {
    console.log('i: ---> ' + i)
    for (let j = 0; j < 3; j++) {
        console.log('j: ' + j)
        }
        for (let k = 0; k < 3; k++) {
            console.log('k: ----> ' + k)
    }
}

// const ad = 4;
const da = -8;
function skaicius(abc) {
    if (da < 0) {
        return 'neigiamas skaicius';
    } else {
        return 'bloga reiksme';
    }
}

//kintamaisiais apsirasyti geriau.

// console.log(skaicius(ad));
console.log(skaicius(da));

// console.log(skaicius(-6));
// console.log(skaicius(9));

