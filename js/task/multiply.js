

// - NaN (skaiciaus tipo klaida) - nenormalus skaicius
// if (isNaN = (a))
// return ' Pirmas parametras NaN'
// if (isFinite(a) === false) {
// return ' Pirmas parametras NaN'
// }
// if ('' + b === 'NaN') {
// return ' Pirmas parametras NaN'



console.log('---------------Funkcijos---------------');

function tusciaFunkcija() {
    return false;
}
console.log(tusciaFunkcija());


console.log('------------------------------------');

function daugyba(num1, num2) {
// if (typeof num1 !== 'number')

    if (typeof num1 !== 'number') {
        return 'Pirmasis skaicius turi buti skaicius';
    }
    if (typeof num2 !== 'number') {
        return 'antras skaicius turi buti skaicius';
    }
    if (isNaN (num1)) {
    return ' Pirmas parametras NaN';
    }
    if (isNaN (num2)) {
        return ' antras parametras NaN';
        }
    if (isFinite(num1) === false) {
        return ' Pirmas parametras boolean';
    }
    if (isFinite(num2) === false) {
        return ' antras parametras boolean';
    }
    if (num1 === Infinity || num1 === -Infinity) {
        return 'Pirmasis skaicius negali begalybe';
    }
    if (num2 === Infinity || num2 === -Infinity) {
        return 'antras skaicius neagali begalybe';
    }
    const result = num1 * num2;
    return result;
    // return num1 * num2;
}
const e = daugyba(2, 4); // galima buvo iskart i console isvesti, teisingiau taip
console.log(e);
console.log(daugyba(-2, 4));

const f = daugyba(4, 5);
console.log(f);
console.log(daugyba(-7, -4.3));

const g = daugyba(5, 2);
console.log(g);
console.log(daugyba(-5, 0));

console.log(daugyba('labas', -3));
console.log(daugyba(3, 'vakaras'));
console.log();
console.log(daugyba (NaN, 5)); // tikrinam NaN
console.log(daugyba (5, NaN));
console.log(daugyba (NaN, NaN));
console.log(daugyba (false, NaN));


console.log(daugyba (2.84, -3.5));
console.log(daugyba (2.99, -5));
console.log(daugyba (2, 3.5));
console.log(daugyba (Infinity, 3));
console.log(daugyba (-Infinity, 2));
console.log(daugyba (Infinity, -Infinity));
console.log(daugyba (2, 3.5));

