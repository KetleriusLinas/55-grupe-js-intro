// array sumavimas visu elementu

const a = [1, 2, 3, 4, 5];
let aSum = 0;

for (let i = 0; i < a.length; i++) {
    aSum += a[i];
}
console.log(aSum);

console.log('------------------------------------------------');



let b = 3;
let c = 2;

function addAB () {
    return b * c * b;
}

let d = addAB();
console.log (d);

console.log('------------------------------------------------');

function skaiciuojuMiskoGerybes (gerybe1, gerybe2, gerybe3) {
    let gerybiuSuma = gerybe1 + gerybe2 + gerybe3;
    return gerybiuSuma;
}
let udemes = 0;
let baravykai = 10;
let voveraites = 30;
let braskes = 10;
let silauoges = 25;
let melynes = 40;

skaiciuojuMiskoGerybes(voveraites, baravykai, melynes); // rezultatas funkcijos skaiciavimo
console.log(skaiciuojuMiskoGerybes(voveraites, baravykai, melynes));
skaiciuojuMiskoGerybes(15, 20, 10); // isvedu i terminala
console.log(skaiciuojuMiskoGerybes(15, 20, 10));


// pirminio skaicio skaiciavimas
let pirmin = 48;
for (let i = 2; i <= pirmin; i++) {
    if (i < pirmin && pirmin % i === 0) {
        console.log(` skaicius ${pirmin} nera pirminis, dalinasi is ${i}`)
        break;
    } else if (i === pirmin) {
        console.log(`skaicius ${pirmin} yra pirminis`);
    }
}
