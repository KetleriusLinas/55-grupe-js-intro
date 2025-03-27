function digitCount (n) {
    if (typeof n !== 'number') {
    return 'Reikalingas skaicius';
}
 
// variantas 1
    // if (n === Infinity || n === -Infinity || isNaN(n)) {
    //     return 'Reikalingas normalus skaicius';
    // }

    // variantas 2 -- isFinete visas tas 3 reiksmes patikrina ( infinity, - infinity, isNaN)
    // tikrina ar jis baigtinis skaicius.
        if (!isFinite(n)) {
        return 'Reikalingas normalus skaicius';
    }
    
    const numToString = ' ' + n;
    // const numToString = n.toString().length; // tinka bet jis pavers viska i teksta pvz (5.5)
    // bus 3 simboliai isvesti??? -pasidaryti testa nesu tikras del cia.
    let count = numToString.length;
    // tikrina del sveikuju skaiciu ir jei gauna simboli ne skaiciu ji numinusuoja
    if (n % 1 !== 0) {
        count --;
    }
    if (n < 0) {
        count --;
    }
    // return numToString; // tinka be t
    return count;
}

console.log(digitCount());
console.log(digitCount(undefined));
console.log(digitCount('78565521'));
console.log(digitCount(578913256334));
console.log(digitCount(true));
console.log(digitCount("asdasdasdsad"));

console.log(digitCount(digitCount));
console.log(digitCount(null));
console.log(digitCount({}));
console.log(digitCount([]));
console.log(digitCount(Infinity));
console.log(digitCount(-Infinity));
console.log(digitCount(NaN));

console.log(digitCount(5), '-->', 1);
console.log(digitCount(589), '-->', 3);
console.log(digitCount(5844567875424), '-->', 13);
console.log(digitCount(5.5), '-->', 2);

console.log(digitCount(-5584), '-->', 1);
console.log(digitCount(-585559), '-->', 3);

// nebegali atvaizduoti ir isreiskia kita reiksme 1e+21 ir pns.
// console.log(digitCount(10000000000000000000000), '-->', 13);

// console.log(digitCount(10000000000000000000000), '-->', 13);


