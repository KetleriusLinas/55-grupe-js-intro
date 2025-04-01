/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

*/

console.log('Labas');
console.log('Labas' [0]);
console.log('Labas' [1]);
console.log('Labas' [2]);
console.log('Labas' [3]);
console.log('Labas' [4]);

console.log();
const text = 'Pomidoras';
console.log(text[0]);
console.log(text[text.length - 1]);

// lengvesnis budas istraukti simboli is "zodzio"
console.log('--', text.at(0));
console.log('--', text.at(1));
console.log('--', text.at(2));
console.log('--', text.at(-1));
console.log('--', text.at(-2));
console.log('--', text.at(-3));

// include
// tikrina ar yra tokia raide zodyje. grazina true/false
console.log ('\nincludes')
console.log ('Vasara'.includes('V')); // taip V (dizioji yra)
console.log ('Vasara'.includes('v')); // nera
console.log ('Vasara'.includes('a'));
console.log ('Vasara'.includes('A'));
console.log('----');

// pasiprogramuot sias funkcijas
// ismoksi pasiprogramuoti paciam methodus ir suprasti ka jis daro
// function includes(text) {
//     return false;
// }

//galima net zodzius isrinkti jei reikia.
console.log ('VasaraArbaZiema'.includes('Arba'));
console.log ('VasaraArbaZiema'.includes('aaaaaa'));
console.log ('VasaraArbaZiema'.includes('iema'));
console.log('----');

console.log ('\nstartsWith')
//startsWith -- kuo prasideda zodis/
console.log('Pomidoras'.startsWith('a'));
console.log('Pomidoras'.startsWith('p'));
console.log('Pomidoras'.startsWith('P'));
console.log('Pomidoras'.startsWith('Pomi'));
console.log('Pomidoras'.startsWith('Pomidoras'));
console.log('Pomidoras'.startsWith('doras'));

console.log ('\nendsWith')
//startsWith -- baigiasi kuo
console.log('Pomidoras'.endsWith('a'));
console.log('Pomidoras'.endsWith('ra'));
console.log('Pomidoras'.endsWith('s'));
console.log('Pomidoras'.endsWith('as'));


// index'o vieta (zodyje pomidoras , a raide yra pozicijoje 7)
console.log ('\nindexOf');
console.log('Pomidoras'.indexOf('a'));
console.log('Pomidoras'.indexOf('o'));
console.log('Pomidoras'.indexOf('om')); // grazino 1. grazina nuo pirmos rastos pozicijos P=0; o=1;
console.log('Pomidoras'.indexOf('p'));    // jei neranda pozicijos grazina reiksme -1.
console.log('Pomidoras'.indexOf('x'));    // jei neranda pozicijos grazina reiksme -1.
console.log('Pomidoras'.indexOf('xXx'));  // jei neranda pozicijos grazina reiksme -1.

console.log('Pomidoras'.indexOf('o', 2)); // gali nurodyti nuo kurios pozicijos pradeti ieskoti.
console.log('----');

console.log('Kulverstukas'.indexOf('u'));
console.log('Kulverstukas'.indexOf('u', 0));
console.log('Kulverstukas'.indexOf('u', 1));
console.log('Kulverstukas'.indexOf('u', 2));

const k = 'Kulverstukas';
console.log(k.indexOf('u') + 1);
