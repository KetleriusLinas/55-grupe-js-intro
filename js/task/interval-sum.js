console.log('-----------------ciklo uzdaviniai----------------')
// tokie ciklai sunaudoja daug resursu kompo (uzdavinys teisingas bet praktiskai nera optimalus)
// ilgai skaiciuos
function intervalSum (start, end) {
    let sum = 0;

for (let i = start; i <= end; i++) {
    sum += i;
}

    return sum;
}
console.log(intervalSum(0, 0));
console.log(intervalSum(0, 4));
console.log(intervalSum(0, 100));
console.log(intervalSum(-50, 50));
console.log(intervalSum(-70, 30));
console.log(intervalSum(574, 815));

console.log('----------uzdavinio optimizavimas---------------')


// iskaiciuoja greiciau ir be klaidu
// galima taip skaiciuoti kai labai dideli skaiciai, kutu atveju gerai ir ciklas
function intervalSum (start, end) {
    let sum = 0;

if (start === 0) {
    sum = (end * (end + 1)) / 2;
} else {
    for (let i = start; i <= end; i++) {
        sum += i;
    }
}
    return sum;
}
console.log(intervalSum(0, 0));
console.log(intervalSum(0, 4));
console.log(intervalSum(0, 10000));
console.log(intervalSum(-50, 50));
console.log(intervalSum(-70, 30));
console.log(intervalSum(0, 1000_000_000));




// skaiciuoja ghz ( proco naudoja)
// console.log(intervalSum(0, 100_000)); // 100_000_000_000
// 4.999999999897965e+21 isskaiciavo

// skaiciaus standartine israiska
// 1 = 1*10^0
// 10 = 1*10^1
// 31.10 = 3.141 * 10^1
// 1_000_000 = 1 * 10^6


// const a = 1.45e5; // e laipsnis, pastumia kableli i viena ar i kita puse
// console.log(a);

