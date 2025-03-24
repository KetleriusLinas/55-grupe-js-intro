/* 
BOOLEAN - logine reiksme
 - True
 - False

 loginiai operatoriai:'
     && - and (ir) (prioritetas, kaip daugybos) skaiciuojamas pirmas
     || - or (arba)

 */

const isEven = true;
const osOdd = false;

console.log('&& -----------');
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(true && true);

console.log('|| -----------');
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(true || true);



console.log('Ar mergina eis i pasimatyma?');

const arGrazus = true;
const arTurtingas = true;

console.log(arGrazus && arTurtingas);

console.log('Ar vaikinas eis i pasimatyma?');

const arGrazi = false;
const arTurtinga = true;

console.log(arGrazi || arTurtinga);
console.clear();


// skaiciuoja is eiles true && false ( is ju suskaiciuotas) || su situo skaiciuojamas KLAIDA ( pirma skaiciuoja (and) && paskui (or) ||)
console.log(1, true && true || true);
console.log(2, true && true || false);
console.log(3, true && false || true);
console.log(4, true && false || false);
console.log(5, false && true || true);
console.log(6, false && true || false);
console.log(7, false && false || true);
console.log(8, false && false || false);
console.log('---------------------------')
// pirma skaiciuoja (and) && paskui (or) ||
console.log(1, true || true && true);
console.log(2, true || true && false);
console.log(3, true || false && true);
console.log(4, true || false && false);
console.log(5, false || true && true);
console.log(6, false || true && false);
console.log(7, false || false && true);
console.log(8, false || false && false);
console.log('---------------------------')

//ND: Surasyti visas imanomas kombinacijas, su  && ir ||, kai yra naudojamas 4 boolean reiksmes.
// ND: kiek gavosi kombinaciju?
//pvz:
// console.log(true && true && true && true);
// console.log(true && true && true && false);
// console.log(true && true && false && true);
// console.log(true && true && true || true);
console.clear();

console.log('---------------------------');
console.log(true && true && true && true);
console.log(true && true && true && false);
console.log(true && true && false && true);
console.log(true && true && false && false);
console.log(true && false && true && false);
console.log(true && false && false && true);
console.log(true && false && false && false);
console.log(false && true && true && true);
console.log(false && true && true && false);
console.log(false && true && false && true);
console.log(false && true && false && false);
console.log(false && false && true && true);
console.log(false && false && true && false);
console.log(false && false && false && true);
console.log(false && false && false && false);
console.log('---------------------------');

console.log(true && true && true || true);
console.log(true && true && true || false);
console.log(true && true && false || true);
console.log(true && true && false || false);
console.log(true && false && true || false);
console.log(true && false && false || true);
console.log(true && false && false || false);
console.log(false && true && true || true);
console.log(false && true && true || false);
console.log(false && true && false || true);
console.log(false && true && false || false);
console.log(false && false && true || true);
console.log(false && false && true || false);
console.log(false && false && false || true);
console.log(false && false && false || false);
console.log('---------------------------');

console.log(true && true || true || true);
console.log(true && true || true || false);
console.log(true && true || false || true);
console.log(true && true || false || false);
console.log(true && false || true || false);
console.log(true && false || false || true);
console.log(true && false || false || false);
console.log(false && true || true || true);
console.log(false && true || true || false);
console.log(false && true || false || true);
console.log(false && true || false || false);
console.log(false && false || true || true);
console.log(false && false || true || false);
console.log(false && false || false || true);
console.log(false && false || false || false);
console.log('---------------------------');

console.log(true || true || true || true);
console.log(true || true || true || false);
console.log(true || true || false || true);
console.log(true || true || false || false);
console.log(true || false || true || false);
console.log(true || false || false || true);
console.log(true || false || false || false);
console.log(false || true || true || true);
console.log(false || true || true || false);
console.log(false || true || false || true);
console.log(false || true || false || false);
console.log(false || false || true || true);
console.log(false || false || true || false);
console.log(false || false || false || true);
console.log(false || false || false || false);
console.log('---------------------------');

console.log(true || true || true && true);
console.log(true || true || true && false);
console.log(true || true || false && true);
console.log(true || true || false && false);
console.log(true || false || true && false);
console.log(true || false || false && true);
console.log(true || false || false && false);
console.log(false || true || true && true);
console.log(false || true || true && false);
console.log(false || true || false && true);
console.log(false || true || false && false);
console.log(false || false || true && true);
console.log(false || false || true && false);
console.log(false || false || false && true);
console.log(false || false || false && false);
console.log('---------------------------');

console.log(true || true && true && true);
console.log(true || true && true && false);
console.log(true || true && false && true);
console.log(true || true && false && false);
console.log(true || false && true && false);
console.log(true || false && false && true);
console.log(true || false && false && false);
console.log(false || true && true && true);
console.log(false || true && true && false);
console.log(false || true && false && true);
console.log(false || true && false && false);
console.log(false || false && true && true);
console.log(false || false && true && false);
console.log(false || false && false && true);
console.log(false || false && false && false);
console.log('---------------------------');

const a = (15 * 6);
console.log(a);
//console.log(15 * 6);



