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

// visi tekstai(stringai) yra pozityvus ( gali buti ir simboliai vistiek skaitos kaip ne tuscias tekstas)
// isskyrus tuscia (' '); 

if ('') {
    console.log('taip');
} else {
    console.log('Ne');
}
