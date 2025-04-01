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

console.log('---------------7 a.--------------');

// Sukurkite funkciją, kuri apskaičiuotų stačiakampio plotą.
// a. Padaryti su sąrašo (array) tipo kintamuoju
// b. Padaryti su keliais skaičių tipo kintamaisiais

// P = a * b;

function staciakampioPlotas (a, b) {
const result = a * b;
        return result;
}
console.log(staciakampioPlotas(5, 7));
console.log(staciakampioPlotas(7, 10));
console.log(staciakampioPlotas(2, 6));

console.log('---------------7 b.-- ne pats------------');
function staciakampioPlotas1 (skaiciai) {

let a = skaiciai[0];
let b = skaiciai[1];
    if (typeof a !== 'number' || typeof b !== 'number'){
        return 'Turi buti skaiciai'
}
        return a * b;
}
// let skaiciai = [5, 5];
let skaiciai = ['abc', 5];
console.log(staciakampioPlotas1(skaiciai));



console.log('---------------8--------------');

// 8. Sukurkite funkciją, kuri tikrina, ar skaičius dalijasi iš 3.

function dalijasiIsTriju (number) {
    if (typeof number !== 'number' || !isFinite(number)) {
        return `Netinkama reiksme`;    
    }
    if (number == 0) {
        return `0, nesidalija`
    }
    if  (number % 3 === 0) {
        return `Skaicius: ${number} dalijasi`;
    }else {
        return `Skaicius: ${number} nesidalija`;
    }
}

console.log(dalijasiIsTriju(0));
console.log(dalijasiIsTriju(5));
console.log(dalijasiIsTriju(-18));
console.log(dalijasiIsTriju(12));
// console.log(dalijasiIsTriju(11.5));
// console.log(dalijasiIsTriju('abc'));
// console.log(dalijasiIsTriju(true));
// console.log(dalijasiIsTriju(Infinity));

console.log('---------------9--------------');

// Sukurkite funkciją, kuri tikrina, ar teksto tipo kintamasis prasideda raide 'a'.

//startsWith -- kuo prasideda zodis/
function kintamojoTikrinimas (zodis) {
    if (typeof zodis !== 'string' || isFinite(zodis)) {
        return `Netinkama reiksme`
    }
// let pirmaRaide = a;

    // for (let i = 0; i < zodis.length; i++) {
        if ( zodis[0] == 'a') {
            return `Taip, string tipo kintamasis ${zodis} prasideda raide a`;
            // return `Taip, string tipo kintamasis prasideda raide a`;
        } else {
            return `Ne, ${zodis}, prasideda kita raide`;
    }
    }
// }
// console.log('labas'.startsWith('a'));
// console.log('asilas'.startsWith('a'));
// console.log('pumpuras'.startsWith('a'));
// console.log('aciu'.startsWith('a'));

console.log (kintamojoTikrinimas('labas'));
console.log (kintamojoTikrinimas('asilas'));
console.log (kintamojoTikrinimas('pumpuras'));
console.log (kintamojoTikrinimas('aciu'));

// console.log (kintamojoTikrinimas(123));
// console.log (kintamojoTikrinimas(Infinity));
// console.log (kintamojoTikrinimas(null));
// console.log (kintamojoTikrinimas(true));

// Sukurkite funkciją trijų skaičių vidurkiui rasti.
console.log('---------------10--------------');

function skaiciuVidurkis (a, b, c) {
    if (typeof a !== 'number' || !isFinite(a)) { // isFinite tikrina ar baigtinis skaicius (!) reik
        return `netinkama reiksme: ${a}`;
    } if (typeof b !== 'number' || !isFinite(b)) {
        return `netinkama reiksme: ${b}`;
    }if (typeof c !== 'number' || !isFinite(c)) {
        return `netinkama reiksme: ${c}`;
    }
// const result = (a + b + c) / 3;
    return (a + b + c) / 3;
}
console.log(skaiciuVidurkis(3, 3, 3));
console.log(skaiciuVidurkis(13, 2, 10));
console.log(skaiciuVidurkis(-8, -17, -12));
// console.log(skaiciuVidurkis('abc', 9, 15));
// console.log(skaiciuVidurkis(13, 'abc', 15));
// console.log(skaiciuVidurkis(5, 9, 'abc'));
// console.log(skaiciuVidurkis(true, 9, 15));
// console.log(skaiciuVidurkis(13, true, 15));
// console.log(skaiciuVidurkis(5, 9, true));
// console.log(skaiciuVidurkis(NaN, 9, 15));
// console.log(skaiciuVidurkis(13, NaN, 15));
// console.log(skaiciuVidurkis(5, 9, NaN));
console.log('---------------11--------------');

// . Sukurkite funkciją, grąžinančią teksto tipo kintamojo ilgį
function kintamojoIlgis (text) {
    if (typeof text !== 'string' || isFinite(text)) {
        return `bloga reiksme`
    }
    return text.length;
}
console.log(kintamojoIlgis('labas'));
console.log(kintamojoIlgis('rabarbaras'));
console.log(kintamojoIlgis('vakaras'));

// console.log(kintamojoIlgis(-Infinity));
// console.log(kintamojoIlgis(Infinity));
// console.log(kintamojoIlgis(true, 9, 15));
// console.log(kintamojoIlgis(true));
// console.log(kintamojoIlgis());
// console.log(kintamojoIlgis(-15));
// console.log(kintamojoIlgis(NaN));
console.log('---------------12--------------');

// 12. Sukurkite funkciją dviem eilutėms sujungti

function eilutesSujungti (a, b) {
// const sum = a + b;
    return a + '' + b;
}
console.log(eilutesSujungti('Siandien, sviecia saule', 'vakaras, tikrai, kad vakaras'));
console.log(eilutesSujungti('labas, as esu Linas', ' vakaras, tikrai, kad vakaras'));
console.log(eilutesSujungti('ryt ryte, ridensis rutulis', 'diena, tai ne vakaras'));
console.log(eilutesSujungti(12, 15));

console.log('---------------13--------------');
// 13. Sukurkite funkciją, kuri tikrina, ar skaičius yra tarp dviejų reikšmių (imtinai).

function tikrinaTarpReiksmiu (skaicius) {
    if (typeof skaicius !== 'number' || !isFinite(skaicius)) {
        return 'Ne skaicius'
    }
    if (10 <=  skaicius && skaicius <= 20 ){
        return 'Taip, skaicius tinka';
    }   if (skaicius > 20) {
        return 'Netinka, perdidelis';
    }   if (skaicius < 10) {
        return 'Netinka, permazas';
    }
}
console.log(tikrinaTarpReiksmiu(10));
console.log(tikrinaTarpReiksmiu(-15));
console.log(tikrinaTarpReiksmiu(15));
// console.log(tikrinaTarpReiksmiu(true));
// console.log(tikrinaTarpReiksmiu(Infinity));
// console.log(tikrinaTarpReiksmiu(NaN));
// console.log(tikrinaTarpReiksmiu('abc'));
// console.log(tikrinaTarpReiksmiu(null));