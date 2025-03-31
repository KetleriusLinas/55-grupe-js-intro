console.log('-------------Uzduotys su Funkcijomis--------------');
console.log('---------------1--------------');

// 1. Sukurkite funkciją, skirtą patikrinti, ar skaičius yra teigiamas
// const skaicius = 0;
function tikrinaArTeigiamas (skaicius) {
    if (typeof skaicius !== 'number') {
        return 'Tai ne skaicius';
}   if (!isFinite(skaicius)) {
        return 'Bloga reiksme'
}

    if (skaicius > 0) {
        return `Skaicius teigiamas`;
    } if (skaicius == 0) {
        return `Skaicius lygus`;
    }
    else {
        return `Neigiamas`;
    }
}

console.log(tikrinaArTeigiamas(-5));
console.log(tikrinaArTeigiamas(5));
console.log(tikrinaArTeigiamas(12));
console.log(tikrinaArTeigiamas(0));
// console.log();
// console.log(tikrinaArTeigiamas());
// console.log(tikrinaArTeigiamas([])); 
// console.log(tikrinaArTeigiamas(true));
// console.log(tikrinaArTeigiamas('abc'));
// console.log();
// console.log(tikrinaArTeigiamas(Infinity));
// console.log(tikrinaArTeigiamas(-Infinity));
// console.log(tikrinaArTeigiamas(null));
// console.log(tikrinaArTeigiamas(undefined));
console.log('---------------2--------------');
// 2. Sukurkite funkciją skaičiaus kvadratui apskaičiuoti.

// let skaicius = 10;
function kvadratas(a) {
const result = a * a;
    return result;
}
console.log(kvadratas(6));
console.log(kvadratas(-9));
console.log('---------------3--------------');

// . Sukurkite funkciją, kuri paima du skaičius ir išveda į console didesnįjį

function isvedaDidesniSkaiciu (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Not a number';
    }
        if (a > b) {
            return a;
        } else {
            return b;
        }
}
console.log(isvedaDidesniSkaiciu(2, -2));
console.log(isvedaDidesniSkaiciu('abc', -2));
console.log(isvedaDidesniSkaiciu(2, true));
// console.log(isvedaDidesniSkaiciu(Infinity, true));
// console.log(isvedaDidesniSkaiciu(2, -Infinity));
// console.log(isvedaDidesniSkaiciu(2, true));
console.log('---------------4--------------');

// Sukurkite funkciją, kuri patikrintų, ar eilutėje yra žodis „JavaScript“.

function eilutesTikrinimas (tekstas, zodis) {
  if (tekstas.includes(zodis)) {
    return 'Sakinyje yra sis zodis';
  } else {
    return 'Zodzio siame sakinyje nera';
  }
}
console.log (eilutesTikrinimas('Sveiki, mes mokomes python kalbos', 'python'));
console.log (eilutesTikrinimas('Sveiki, mes mokomes Java kalbos', 'JavaScript'));
console.log (eilutesTikrinimas('Sveiki, mes mokomes JavaScript kalbos', 'JavaScript'));

// KITOKS ISVEDIMAS I TERMINALA
// function eilutesTikrinimas (tekstas, zodis) {
//     if (tekstas.includes(zodis)) {
//       console.log ('Sakinyje yra sis zodis');
//     } else {
//       console.log ('Zodzio siame sakinyje nera');
//     }
//   }
//   eilutesTikrinimas('Sveiki, mes mokomes python kalbos', 'JavaScript');
//   eilutesTikrinimas('Sveiki, mes mokomes Java kalbos', 'JavaScript');
//   eilutesTikrinimas('Sveiki, mes mokomes JavaScript kalbos', 'JavaScript');
  
console.log('---------------5--------------');

// Sukurkite funkciją, tikrinančią, ar skaičius yra lyginis.

function skaiciausTikrinimas (number) {
    if (typeof number !== 'number' || !isFinite(number)) {
        return `Netinkama reiksme`;    
    }
    if (number == 0) {
        return `0, nesidalina`
    }
    if  (number % 2 === 0) {
        return `Skaicius: ${number} yra lyginis`;
    }else {
        return `Skaicius: ${number} yra nelyginis`;
    }
}

console.log(skaiciausTikrinimas(0));
console.log(skaiciausTikrinimas(5));
console.log(skaiciausTikrinimas(-18));
console.log(skaiciausTikrinimas(12));
// console.log(skaiciausTikrinimas(11.5));
// console.log(skaiciausTikrinimas('abc'));
// console.log(skaiciausTikrinimas(true));
// console.log(skaiciausTikrinimas(Infinity));

console.log('---------------6--------------');
// . Sukurkite funkciją, kuri į console išvestų priešingą reikšmę (jei skaičius teigiamas,
//     išvestų neigiamą, jei yra gaunamas žodis tai žodį turi parašyti atvirkčiai. Apsibrėžkite
//     kokio ilgio žodis turi būti gaunamas! ar 4, ar 5 ar kiek raidžių! imkite vieną
//     variantą kolkas

function stringReverse(text) {
    // if (typeof text !== 'string') { // patikrinimas ar string tipas, jei ne isveda netinkama tipa
    //     return 'Reikalinga string tipo reiksme'
    // }

let result = ' ';
// pradedam nuo paskutinio simbolio, jei jis auksiau neigu 0, tada numinusuojam viena.
    for (let i = text.length - 1; i >= 0; i--) {
    result += text[i];
}
        return result;
}
console.log(stringReverse('Labas'));
console.log(stringReverse('pasivaiksciojimaS'));
console.log(stringReverse('123'));
console.log(stringReverse('-25'));

console.log('---------------7--------------');

// Sukurkite funkciją, kuri apskaičiuotų stačiakampio plotą.
// a. Padaryti su sąrašo (array) tipo kintamuoju
// b. Padaryti su keliais skaičių tipo kintamaisiais

