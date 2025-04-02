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
console.clear();

//repeat
console.log ('repeat');
console.log('a');

const symbol = 'labas';
const megaSymbol = symbol.repeat(3); // dirba tik sveikaisiais skaiciais, susiapvalina i zemesne puse

console.log(symbol);
console.log(megaSymbol);

// cia aprasytas metodas kaip tas repeat veikia.
function stringRepeat (text, count) {
    let result = '';

    //  < Math.floor(count) - apvalina i mazaja puse (ciklas dirbtu 4 kart net jei 3.5 ivestum)
    for (let i = 0; i < count; i++){
        result += text;
    }
    return result;
}
// pasirasom iskarto ko mum reikia , tai teksto ir kiekio kiek repeatnsim, taip zinom funkcijoj
// kintamuosius
console.log(stringRepeat('rikiki', 3));
console.log(stringRepeat('rikiki', 3.99999999));

//replace
console.log('---------------------');
console.log ('\nreplace');

const summer = 'vasara'.replace('a', '-');
console.log(summer); // pirma sutikta simboli keicia

// galima methodus jungti i grandine (chain'int)
// prijungtas methodas jungiasi jau nuo gauto rezultato ir keicia (2 a) raide. paskui (3) ir tt.
const summer2 = 'vasara'.replace('a', '-').replace('a', '-');
const summer3 = 'vasara'.replace('a', '-').replace('a', '-').replace('a', '-');
// jei daugiau prijungta jei yra tu raidziu, tai tiesiog nieko nevyksta ir niekas nesikeicia.
console.log(summer2);
console.log(summer3);

// const cloud = 'debeselis'.replace('u', '***'); // nera u raides tai jokio efekto
const cloud = 'debeselis'.replace('e', '***');
const cloud2 = 'debeselis'.replace('ebe', '***'); // galima ir kelis symbolius is eiles
// galima miksuoti methodus
const cloud3 = 'debeselis'.replace('e', '*'.repeat(8)); // veikia, nera praktiska, bet galima

console.log(cloud);
console.log(cloud2);
console.log(cloud3);


// pvz su sakiniais
const template = 'Vardas ejo i parduotuve pirkti Daiktas. ';
const name = 'Jonas';
const item = 'pomidotas';

const shop = template.replace('Vardas', name);
const shop1 = template.replace('Vardas', name).replace('Daiktas', item);

console.log(shop);
console.log(shop1);

const template2 = 'Klaseje sedi: V1, V2, V3, V4';
const classmates = template2.replace('V1', 'Jonas');
const classmates2 = template2.replace('V1', 'Jonas').replace('V2', 'Maryte').replace('V3', 'Petras').replace('V4', 'Ona');

console.log(classmates);
console.log(classmates2);

// replaceALL
console.log('---------------------');
console.log ('\nreplaceAll');

// keicia visas a raides 
console.log('vasara');
console.log('vasara'.replace('a', '-'));
console.log('vasara'.replaceAll('a', '-'));

const template3 = 'Vardas saunuolis. Vardas grazuolis. Vardas smalsuolis';
const multiName = template3.replaceAll ('Vardas', 'Petras');
console.log(multiName);

// istrinam raides is zodzio
console.log('ananasas'.replace('a', ''));
console.log('ananasas'.replaceAll('a', ''));
console.log('ananasas'.replaceAll('na', ''));


// const hi = 'Labas rytas, Lietuva!';
// const hiNormalSize = hi

// toUpperCase --- keicia visa teksta i diziasias raides
console.log('-----------toUpperCase----------');


console.log('labas'.toUpperCase());
console.log('vakaras'.toUpperCase());

// toUpperCase --- keicia visa teksta i mazasias raides
console.log('---------toLowerCase------------');


console.log('LABAS'.toLowerCase());
console.log('Vakaras'.toLowerCase());

// slice --- 'nupjausto', raides kurias indexavai
console.log('---------slice------------');

console.log('pomidoras'.slice());
console.log('pomidoras'.slice(0));
console.log('pomidoras'.slice(1));
console.log('pomidoras'.slice(2));

// pirmas indexas startas, antras yra endas. Nuo kur pradedam pjauti ir kur baigiam
console.log('pomidoras'.slice(0, 2)); // po
console.log('pomidoras'.slice(0, 3)); // pom
console.log('pomidoras'.slice(0, 4)); // pomi
console.log('pomidoras'.slice(1, 4)); // omi
console.log('pomidoras'.slice(2, 4)); // mi

// taip negali buti turi buti nuo mazesnio iki didesnio skaiciaus
console.log('pomidoras'.slice(3, 1)); // grazina tuscia

//vaziuos iki paskutines raides ir ja nupjaus. Pjaus is galo
console.log('pomidoras'.slice(0, -1)); // pomidora
console.log('pomidoras'.slice(0, -2)); // pomidor
console.log('pomidoras'.slice(3, -3)); // ido --- abi puses nupjauna

// teigiamas skaicius pjauna is pradzios, minusinis is galo
console.log('pomidoras'.slice(-4)); // oras --- paskutines 4 raides nupjauna
console.log('pomidoras'.slice(-6, -2)); // idor --- nuo mazesnio iki didesnio einama.