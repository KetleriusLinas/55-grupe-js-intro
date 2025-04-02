
// bazinis algoritmas (veikia)
function biggestNumber (list) { {
    // typeof sitoj vietoj netinka. Reikia tikrinti kad sarasas gautu tinkamas reiksmes????/
    // sitoj salygoj gali praeiti tik array
    // jei NE (!) array tada nepraeina, arba sarasas lygus 0 irgi netinka.
    if (!Array.isArray(list) || list.length === 0)
        return 'Duomenys turi buti sarase.';
}
    // Galima ir taip

    // if (list.length === 0) {
    //     return 'Duomenys turi buti sarase.';
    // }

    let biggest = -Infinity; // buvo pradinis diziausias 0; bet jis nepagristas jei minusinis sarasas tai jis nekeicia nk. 
    // let i = 1; galetume daryt, nes tai sutrumpintu interacija nes i = 0; ir list[0] netenkina salygos bereikalo prasisuka
    for (let i = 0; i < list.length; i++) {
        // jei normalus skaicius       arba     normali reiksme
        if (typeof list[i] !== 'number' || !isFinite(list[i])) {
            continue; // einam prie sekancio nario. ciklas daro sekancia interacija
        }
        if (list[i] > biggest){
            biggest = list[i];
        }
    }
    return biggest;
}

console.log(biggestNumber(1));
console.log(biggestNumber('labas'));
console.log(biggestNumber('Keba'));
console.log(biggestNumber('KebabaLABAS'));

console.log(biggestNumber([]));

console.log(biggestNumber([1]), '--->', 1);
console.log(biggestNumber([4]), '--->', 4);

console.log(biggestNumber([1, 2]), '--->', 2);
console.log(biggestNumber([20, 1]), '--->', 2);

console.log(biggestNumber([1, 2, 3]), '--->', 3);
console.log(biggestNumber([3, 2, 1]), '--->', 3);
console.log(biggestNumber([3, 10, 2, 8]), '--->', 3);


console.log(biggestNumber([-3, -1, -2]), '--->', 3);

console.log(biggestNumber([1, 2, 'abc']));
console.log(biggestNumber([1, 'adc', 2]));
console.log(biggestNumber(['adc', 2, 1])); // nepraeina testas

console.log(biggestNumber([-1, -2, true])); // typeof !== number sprendimo budas
console.log(biggestNumber([-1, true, -2]));
console.log(biggestNumber([true, -2, -1]));

console.log(biggestNumber([-1, -2, -Infinity])); 
console.log(biggestNumber([-1, -Infinity, -2]));
console.log(biggestNumber([-Infinity, -2, -1]));

console.log(biggestNumber([1, 2, Infinity])); 
console.log(biggestNumber([1, Infinity, 2]));
console.log(biggestNumber([Infinity, 2, 1]));