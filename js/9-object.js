/* 
OBJECT - objectas, (kitose kalbose siek tiiek panasu i: hashmap, dictionary)

*/

const empty = {};
console.log(empty);


const person = {
    name: 'Jonas', 
    age: 99,
    isMarried: true,

};
console.log(person);

// istraukti is objecto viena ar kita dali. Buinai reikalingos kabutes ''.

console.log(`Sveiki, name vardas ${person['name']}, man yra ${person['age']} metai.`);
console.log('--------------------');

console.log(`Sveiki, name vardas ${person.name}, man yra ${person.age} metai.`);



// standartine sintakse, kai paiimti reiksme. su ${}.
console.log(person['name']);
console.log(person['age']);
console.log(person['isMarried']);

// supaprastinta sintakse. veikia ribotai, tam tikrose aplinkybese. 
// Maziau sansu suklysti, patogiau naudoti.
console.log(person.name);
console.log(person.age);
console.log(person.isMarried);

// raktas turi buti vientisas( vienas zodis) - Visi object raktai turi buti stringai. jei vienas zodis jis pats susideda ir pavercia juos stringais.
// raktus kurti be kabuciu vientisus zodzius, skaityt ir rasyt daug 
const demo = {
    color: 'red',
    5: 777,
    '55': 77788,
    'is married': true,
};

console.log(demo['color']);
console.log(demo['5']);
console.log(demo[5]);
console.log(demo['55']);
console.log(demo[55]);
console.log(demo['is married']);

// neina isvesti i supaprastinta sintakse. tik color galima isvesti
console.log(demo.color);

console.log('--------------------');

const pc = {
    cpuCores: 8,
    ram: 16,
    diskSpace: 512,
    diskType: 'ssd',
    os: 'win10',
}

console.log(pc.cpuCores);

pc.ram = 32;

console.log(pc);

pc.os = 'win98';

console.log(pc);
console.log('--------------------');


const student = {
    name: 'Maryte',
    age: 88,
    isMarried: false,
    phoneNumbers: [],
    parents: [
        {
            name: 'Petras',
            age: 77,
            phoneNumbers: [11111111, 33333333],
        },
        {
            name: 'Ona',
            age: 66,
            phoneNumbers: [2222222, 4444444444],
        },
            ],
};

// neisspauzdina numeriu tevu.
console.log(student);
console.log(student.name);
console.log(student.phoneNumbers.length);
console.log(student.parents.length);
console.log(student.parents[0].name);
console.log(student.parents[1].name);
console.log(student.parents[0].phoneNumbers.length);
console.log(student.parents[1].phoneNumbers[1]);
console.log('--------------------');





