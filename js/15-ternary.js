let zodis = '';

if (4 > 2) {
    zodis = 'daugiau';   
} else {
    zodis = 'maziau';
}
console.log(zodis);


let skaicius = 0;

if (7 <= 5) {
    skaicius = 7;
} else { 
    skaicius = 5;
}

console.log(skaicius);

//ternary operatorius
// klausimas ? teigiama : neigiama
const word = 4 > 2 ? 'daugiau' : 'maziau';
console.log(word);

const number = 7 <= 5 ? 7 : 5;
console.log(number);


const years = 16;
const isAdult = years >= 18 ? 'suagues' : 'nesuauges';

console.log(isAdult);

const value = '181';
            // if       sign skaicius ar ne?
const type = typeof value === 'number' ? 'skaicius' : 'ne skaicius';
console.log(type);

// visi skaiciai yra pozityvus ( visi isveda Taip) -- true
// isskyrus nuli                (0 isveda ne)      -- false

if (5) {
    console.log('taip');
} else {
    console.log('Ne');
}

// visi tekstai(stringai) yra pozityvus ( gali buti ir simboliai vistiek skaitos kaip ne tuscias tekstas)
// isskyrus tuscia (' '); 

if ('') {
    console.log('taip');
} else {
    console.log('Ne');
}

// visi array yra pozityvus []
// visi object yra pozityvus {}
if ([]) {
    console.log('taip');
} else {
    console.log('Ne');
}

// visi undefined yra negatyvus
// visi NaN yra negatyvus
if (NaN) {
    console.log('Taip');
} else {
    console.log('Ne');
}

console.log('--------------------------------');


//a = 0
// if (1)
//else (2)         

// galima issimetyti ( issiskaityti lenviau skaityt)
const a = 0 ? 1 : 2;
console.log(a);

const b = 1 ? 2 : 3;
console.log(b);

const c = 2 ? 3 ? 4 : 5 : 6;
console.log(c);

const d = 0 ? 1 : 2 ? 3 : 4;
console.log(d);

// bet taip nedaryti naudoti normalius if else.. tik 'vienam klausimui ternary', ar taip.. ar taip..
const e = 1 
? 2  // if 
    ? 3 //if
    : 4 //else
: 5  // else
    ? 6 //if
    : 7; // else
console.log(e);

//unari (vienas) =
// binari (du) = +, -, *, /
//ternary (trys) = ? :

