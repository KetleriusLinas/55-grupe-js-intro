function empty() {
    // logika - (bus rasomas kodas)
    // let a = 9;
    // let b = 10
    // console.log(a + b);

}

const a = empty();
console.log(a);

function penki() {
    return 5;
}

const c = penki();
console.log(c);

function hi() {
    return 'Labas rytas!'
}
const d = hi();
console.log(d);

//  Jonas -> Labas, Jonas!
//  Maryte -> Labas, Maryte!
//  petras -> Labas, petras!


function hiPerson(name) {
    return `Labas, ${name}!`;
    //return 'Labas, ' + name + '!'; - galima, bet pirmas tvarkingesnis
}
console.log(hiPerson('Jonas'));
console.log(hiPerson('Maryte'));
console.log(hiPerson('Petras'));
console.log(hiPerson('NAUJA EILUTE !!!!'));

// 2 + 2 = 4
// 7 + 5 = 12

function sum(num1, num2) {
    return num1 + num2;
}

const e = sum(2, 2);
console.log(e);

const f = sum(7, 5);
console.log(f);

const g = sum(-7, 15);
console.log(g);

console.clear();

// 100 -> 121 Euro
// 200-> 242 Euro
// 73 -> 88.33 Euro


// funkcijos ribuose deklaruojami parametrai yra tik toje funkcijoje
function priceWithVAT(price) {
    const updatedPrice = price * 1.21;
    console.log(price);

    return updatedPrice + ' Euro';
}

const p1 = priceWithVAT(100);
console.log(p1);

const p2 = priceWithVAT(200);
console.log(p2);

const p3 = priceWithVAT(73);
console.log(p3);

console.clear();

// Jonas -> Zodzis "Jonas" yra sudarytas is 5 raidziu.
// Marytee -> Zodzis "Maryte" yra sudarytas is 7 raidziu.
// Petras -> Zodzis "Petras" yra sudarytas is 6 raidziu.
// Ona -> Zodzis "Ona" yra sudarytas is 3 raidziu.

function nameLength(name) {
    const size = name.length;

    return `Zodis ${name} yra sudarytas is ${size} raidziu.`;
}

const nl1 = nameLength('Jonas');
console.log(nl1);

const nl2 = nameLength('Marytee');
console.log(nl2);

const nl3 = nameLength('Petras');
console.log(nl3);

const nl4 = nameLength('Ona');
console.log(nl4);


// 5 -> gautas skaicius: 5.
// -13 -> gautas skaicius: 5.
// 777 -> gautas skaicius: 777.

function gotNumber(n) {
    // return 'skaicius: ' + n + '.'; - rezultatas tas pats 2 budas tvarkingesnis
    return `gautas skaicius: ${n}`;
}

const gn1 = gotNumber(5);
console.log(gn1);

const gn2 = gotNumber(-13);
console.log(gn2);

const gn3 = gotNumber(777);
console.log(gn3);

console.clear();

// Petras turi 5 obuolius.
// Algis turi 52 obuolius.
// Kasparas turi 9 obuolius.

// function obuoliuSkaic(obuol) {
//     const v1 = 'Petras';
//     const v2 = 'Algis';
//     const v3 = 'Kasparas'
//     return `${v2} turi ${obuol} + obuolius`;
// }

// const o1 = obuoliuSkaic(5);
// console.log(o1);


// const o2 = obuoliuSkaic(52);
// console.log(o2);

// const o3 = obuoliuSkaic(9);
// console.log(o3);



//-------------------------------HOMEWORK--------------------------------
// 2, 2 -> 2 + 2 = 4
// 7, 5 -> 7 + 5 = 12
// -7, 15 -> -7 + 15 = 8

function sum(a, b) {
    const result = a + b;
    return `${a} + ${b} = ${result}`;
}

console.log(sum(2, 2));
console.log(sum(7, 5));
console.log(sum(-7, 15));
console.log('-------------------------------');
// sugeneruoti likusias funkcijas likusiems matematiniams ... (+, -, /, *)
//namu darbai

function sum1(a, b) {
    const result = a - b;
    return `${a} - ${b} = ${result}`;
}

console.log(sum1(2, 2));
console.log(sum1(7, 5));
console.log(sum1(-7, 15));
console.log('-------------------------------');

function sum2(a, b) {
    const result = a * b;
    return `${a} * ${b} = ${result}`;
}
console.log(sum2(2, 2));
console.log(sum2(7, 5));
console.log(sum2(-7, 15));
console.log('-------------------------------');

function sum3(a, b) {
    const result = a / b;
    return `${a} / ${b} = ${result}`;
}
console.log(sum3(2, 2));
console.log(sum3(7, 5));
console.log(sum3(-7, 15));
console.log('-----------------------------------------------');

function sum4(a, b) {
    const result = a / b + a * a;
    return `${a} / ${b} + ${a} * ${a} = ${result}`;
}
console.log(sum4(2, 2));
console.log(sum4(7, 5));
console.log(sum4(-7, 15));
console.log('-------------------------------');


