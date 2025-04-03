// 3 --> 3.00 Eur
// 3.99 --> 3.99 Eur

function moneyFormat(money) {
    return money.toFixed(2) + ' Eur';
}

console.log(moneyFormat(3));
console.log(moneyFormat(3.1));
console.log(moneyFormat(3.5));
console.log(moneyFormat(3.99));

console.log();
//nesuskaiciuoja visko nes skaiciu po kablelio yra ir tt (mindfuck)
function moneyFormat2(money) {
// is money gauti reikia dali po kablelio.
// 3.1 --> money atimam sveikaja daly 3
const decimalPart = (money - Math.floor(money)) * 100;
console.log(decimalPart);
// kiek yra skaitmenu po kablelio?
// const count = 
// jeigu, po kablelio yra du skaitmenys - nieko nedarom (su skaiciais)
if (decimalPart === 0) {
    return money + '.00 Eur'
}
if (decimalPart % 10 === 0) {
    return money + '0 Eur'
}
// jeigu po kablelio yra 1 skaitmuo - pridedame 1 nuli.
//nera skaitmenu po kablelio pridedame - 2 nulius

    return money + ' Eur';
}

console.log(moneyFormat2(3));
console.log(moneyFormat2(3.1));
console.log(moneyFormat2(3.5));
console.log(moneyFormat2(3.99));
console.log();

function moneyFormat3(money) {
    const strMoney = '' + money; // gauni tekstini skaiciu , kad galetum naudoti string methodus indexOf
//  3.4
    const dotPosition = strMoney.indexOf('.'); // gausim skaiciu kuris == 4. 
    // galima atlikti tekstinius methodus

    if (dotPosition === -1) {
        return money + '.00 Eur';
    }

    const afterDot = strMoney.slice(dotPosition + 1); // stringas kuriame yra '4'

    if (afterDot.length === 1) {
        return money + '0 Eur'
    }
    if (afterDot.length === 2) 
        return money + ' Eur'
}
console.log(moneyFormat3(3));
console.log(moneyFormat3(3.1));
console.log(moneyFormat3(3.5));
console.log(moneyFormat3(3.99));