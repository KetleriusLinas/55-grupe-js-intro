console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);


// abs neigiamus skaicius pavercia teigiamais, teigiamus palieka teigiamais
console.log('\nabs');
console.log(Math.abs(5));
console.log(Math.abs(-5));

//cbrt kubine saknis
console.log('\ncbrt');
console.log(Math.cbrt(8));
console.log(Math.cbrt(27));
console.log(Math.cbrt(64));

// ceil(ang. lubos) - Apvalinimas skaiciaus i virsu (auksciau)
console.log('\nceil');
console.log(Math.ceil(8));
console.log(Math.ceil(8.9));
console.log(Math.ceil(8.5));
console.log(Math.ceil(8.000001));

// floor   - apvalinimas i apacia (zemiau)
console.log('\nfloor');
console.log(Math.floor(8));
console.log(Math.floor(8.9));
console.log(Math.floor(8.5));
console.log(Math.floor(8.999999));
console.log(Math.floor(-4.99999));

// round - normalus apalinimas 04.999 < 0.5 ++++
console.log('\nround');
console.log(Math.round(8));
console.log(Math.round(8.2));
console.log(Math.round(8.4));
console.log(Math.round(8.5));
console.log(Math.round(8.9));

// trunc minusa apvalina i didziaja puse -4 > -4.999999
console.log('\ntrunc');
console.log(Math.trunc(8));
console.log(Math.trunc(9));
console.log(Math.trunc(4.5));
console.log(Math.trunc(4.000001));
console.log(Math.trunc(4.99999));
console.log(Math.trunc(-4.99999));

// hypot trikampio istrizaine (izambine) ?? pitagoro teorema
console.log('\nhypot');
console.log(Math.hypot(3, 4));
console.log(Math.hypot(4, 5));
console.log(Math.hypot(4, 5, 6));

// max - isveda didziausia reiksme esancia
console.log('\nmax');
console.log(Math.max(-10, 2, 8, 4, 6)); // jei turi iskart skaicius kuriuos palyginsi tinka.
console.log(Math.max('asds', 2, 8, 4, 6));
console.log(Math.max(-10, 2, 8, 4, 'asds'));
// const list = [10, 2, 8, 4, 6];
// console.log (Math.max(list));

// min - isveda maziausia reiksme esancia
console.log('\nmin');
console.log(Math.min(-10, 2, 8, 4, 6));
console.log(Math.min('asds', 2, 8, 4, 6));
console.log(Math.min(-10, 2, 8, 4, 'asds'));

// pow kelimas laipsniu pirmas skaicius kuri kelsime laipsniu, antras laipsnis
// techniskai nereikia geriau naudoti ** (dvigubos zvaigzdutes operatoriu)
console.log('\npow');
console.log(Math.pow(2, 0), 2 ** 0);
console.log(Math.pow(2, 1), 2 ** 1);
console.log(Math.pow(2, 2), 2 ** 2);
console.log(Math.pow(2, 3), 2 ** 3);
console.log(Math.pow(2, 4), 2 ** 4);
console.log(Math.pow(2, 5), 2 ** 5);
console.log(Math.pow(2, 6), 2 ** 6);
console.log(Math.pow(2, 7), 2 ** 7);
console.log(Math.pow(2, 8), 2 ** 8);
console.log(Math.pow(2, 9), 2 ** 9);
console.log(Math.pow(2, 10), 2 ** 10);

// sign - panasus kaip abs ''pakeicia reiksme'' ???
console.log('\nsign');
console.log(Math.sign(8));
console.log(Math.sign(-8));

// sqrt kellia kvadratu , geriau naudoti (** 0.5) -- kvadratine saknis
console.log('\nsqrt');
console.log(Math.sqrt(4), 4 ** 0.5);
console.log(Math.sqrt(9), 9 ** 0.5);
console.log(Math.sqrt(81), 9 ** 0.5);
console.log(Math.sqrt(2), 2 ** 0.5);
console.clear();
// random [0..1) imtinai nuo 0 iki 1 (0 gali gauti teoriskai), (1 neimanoma) tik tarp ju.
console.log('\nrandom');
console.log(Math.random());
console.log(Math.random());
// random skaicius nuo 0 iki 10. [0..9], [0..10)

// random skaicius nuo: 3 arba 7
// [0..1) = [0..0.5) + [0.5 .. 1) 


let count3 = 0;
let count7 = 0;
for (let i = 0; i < 100; i++) {
    if (Math.random() < 0.5) {
        // console.log(3);
        count3++; // jei iskrenta 3 prideda viena - taip suskaiciuoja kiek kartu iskrito
    } else {
        // console.log (7);
        count7++;
    }
}

console.log(count3, count7);
// [13..13] + 1, skirtumas +1 visada.. ?? 
// [13 ... 149] - imtinai 
// lygtis


// bus reikalinga sita!!
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomNumber(1, 10));


const counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i = 0; i < 10000; i++) {
    const index = randomNumber(0, 9); // indexas [0..9]
    counts[index]++; // iskrito skaiciukas, pakeite masyve pagal [0..9] indexa random skaiciukus kelia siame masyve.
}
console.log(counts);
console.log();

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomNumber(1, 10));


const counts2 = [0, 0, 0];
for (let i = 0; i < 10000; i++) {
    const index = randomNumber(0, 1); // naudoja array 1 ir 2 vietas, trecios nennaudoja
    counts2[index]++; 
}
console.log(counts2);