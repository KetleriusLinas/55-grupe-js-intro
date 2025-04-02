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
console.clear();

console.log('---------trim------------');
// trim
// naikina tik is priekio ir tik is galo space'us (tarpus) , per viduri ne
console.log('pomidoras'.trim());
console.log(`"${'     pomidoras'.trim()}"`); // panaikino tarpus trim'as
console.log(`"${'pomidoras         '.trim()}"`); // same
console.log(`"${'     pomidoras     '.trim()}"`); // panaikino
console.log(`"${'     pomidoras   labas     '.trim()}"`); // per viduri tarpus palieka

// mazai naudojami, labiau naudojama paprasta .trim
console.log(`"${'     pomidoras   labas     '.trimEnd()}"`); // nutrina tik gala
console.log(`"${'     pomidoras   labas     '.trimStart()}"`); // nutrina tik prieki

console.log('---------split------------');
// split--- splitina zodzius/tekstus

const t1 = 'zodis';
const t1Parts = t1.split();
const t1Parts2 = t1.split('o'); // kerpa zodi sioja vietoje ir iskerpa raide
const t1Parts3 = t1.split('d'); // tekste kerpa sioje vietoje kur raide d ir iskerpa ja ir padalina

const t2 = 'kultivatorius';
const t2Parts = t2.split('t'); // kul..iva...orius -- isplitina
console.log(t2Parts); 

console.log(t1Parts);
console.log(t1Parts2);
console.log(t1Parts3);

// naudingas metodas
const t3 = 'Labas rytas Lietuva';
console.log(t3);
const t3Parts = t3.split(' ');
console.log(t3Parts);


console.log('duona'.split('o')); // du,...na
console.log('duona'.split('u')); // d..ona
console.log('duona'.split('d')); // ' '...uona  --- skelia per d ir po kaire nebelieka teksto
console.log('duona'.split('n'));

// irasykite praleistas raides... (PROJEKTAS) ??? tik mintis
console.log('ana'.split('a')); //''...'n'...''

console.log('vasara'.split('a')); // 
console.log('vasara'.split('')); // isprintina pavienes raides 'v', 'a', 's', 'a', 'r', 'a'
console.log(''.split('')); // tuscia array'u spausdina


const t4 = 'labas. Ka tu. Ka tu veiki.';
const sentenceCount = t4.split('.').length - 1; // isskaiciavom sakiniu kieki. gavom 4 ir tada -1 ir teisingas ats. (kodel dar nezinau)

console.log(sentenceCount);

console.log('pomidoras'.split('dor')); // galima splitint ir per kelis simbolius tik kad eitu jie is eiles.

console.log('---------charCodeAt(0)------------');
// charCodeAt
// asci code ?? kompo abecele, vieta kurioje abeceles vietoje yra sis simbolis
console.log('A'.charCodeAt(0)); // masininis kodas 65
console.log('a'.charCodeAt(0)); // masininis kodas 97

if ('A' > 'a') {
    console.log ('daugiau');
} else {
    console.log('maziau');
};

if ('labas' > 'iki') {
    console.log ('daugiau');
} else {
    console.log('maziau');
};
// asci code ?? kompo abecele, vieta kurioje abeceles vietoje yra sis simbolis
console.log('l'.charCodeAt(0)); // 108
console.log('i'.charCodeAt(0)); // 105

// is masininio kodo galima suzinoti koks simbolis 
const s1 = String.fromCharCode(65);
console.log(s1);

const s2 = String.fromCharCode(260);
console.log(s2);

const s3 = String.fromCharCode(2600);
console.log(s3);

const s4 = String.fromCharCode(26000);
console.log(s4);

const s5 = String.fromCharCode(9845);
console.log(s5);

const s6 = String.fromCharCode(9875);
console.log(s6);

const s7 = String.fromCharCode(7878);
console.log(s7);

