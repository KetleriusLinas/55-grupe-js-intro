function intervalCount(start, end, divider) {
// draudimas/tikrinimas kad butu pateiktas skaicius
    if (typeof start !== 'number') {
    return 'Intervalo pradzia turi buti skaicius';
}
    if (typeof end !== 'number') {
    return ' pabaiga turi buti skaicius';
}
    if (typeof divider !== 'number') {
    return 'Daliklis turi buti skaicius';
}
// draudimas/tikrinimas pateikti nesveikuosius skaicius (skaiciai su kableliais) NaN nera sveikasis skaicius ir jam sita logika tinka. 
if (start % 1 !== 0) {
    return 'Intervalo pradzia turi buti sveikasis skaicius';
}
if (end % 1 !== 0) {
    return 'Intervalo pabaiga turi buti sveikasis skaicius';
}
if (divider % 1 !== 0) {
    return 'Intervalo DALIKLIS turi buti sveikasis skaicius';
}
// pradzia negali buti didesne
if (start > end) {
    return 'Pradzia negali buti didesne nei intervalo pabaiga';
}

//     if (typeof start === 'string' || typeof start === 'boolean'
// || typeof start === 'boolean'
// || typeof start === 'boolean'
// || typeof start === 'boolean'
// ) {

    let count = 0;

    // 1) naivi versija, kai einame per kiekviena skaiciu
    // for (let i = start; i <= end; i++) {
    //     if (i % divider === 0) {
    //         count++;
    //     }
    // }

    // 2) labiau optimizuotas naivus variantas
    const trueStart = start;
    for (let i = trueStart; i <= end; i += divider) {
        count++;
    }

    // pasidaryti optimalesni variana
    // 3) galutinis tikslas yra formule, kurios uzuomina yra zemiau pateika lygtis/logika
    // count = (end-start) / divider;

    return `Skaičių intervale tarp ${start} ir ${end}, besidalijančių be liekanos iš ${divider} yra ${count} vienetai.`;
}

// console.log(intervalCount(0, 11, 3));
// console.log(intervalCount(0, 11, 5));
// console.log(intervalCount(0, 11, 7));

// console.log(intervalCount(1, 11, 3));
// console.log(intervalCount(1, 11, 5));
// console.log(intervalCount(1, 11, 7));

// console.log(intervalCount('asd', 11, 7));
// console.log(intervalCount(1, 'asd', 7));
console.log(intervalCount(1, 11, 'asd'));
console.log(intervalCount(true, 11, 7));
console.log(intervalCount(1, true, 7));
console.log(intervalCount(1, 11, true));
console.log(intervalCount(undefined, 11, 7));
console.log(intervalCount(1, undefined, 7));
console.log(intervalCount(1, 11, undefined));
// console.log(intervalCount(null, 11, 7));
// console.log(intervalCount(1, null, 7));
console.log(intervalCount(1, 11, null));
// console.log(intervalCount([], 11, 7));
// console.log(intervalCount(1, [], 7));
// console.log(intervalCount(1, 11, []));
// console.log(intervalCount({}, 11, 7));
console.log(intervalCount(1, {}, 7));
// console.log(intervalCount(1, 11, {}));
// console.log(intervalCount(intervalCount, 11, 7));
// console.log(intervalCount(1, intervalCount, 7));
console.log(intervalCount(1, 11, intervalCount));

console.log(intervalCount(0.1, 11, 7));
console.log(intervalCount(0, 11.1, 7));
console.log(intervalCount(0, 11, 7.1));

console.log(intervalCount(NaN, 11, 7)); // NaN nera sveikasis skaicius
// console.log(intervalCount(0, NaN, 7));
console.log(intervalCount(0, 11, NaN));

console.log(intervalCount(Infinity, 11, 7));
console.log(intervalCount(100, 11, 7));
console.log(intervalCount(0, Infinity, 7));
console.log(intervalCount(0, 11, Infinity)); // daliklis ne sveikasis skaicius

console.log(intervalCount(-Infinity, 11, 7));
console.log(intervalCount(0, -Infinity, 7));
console.log(intervalCount(0, 11, -Infinity));

console.log(intervalCount(0, 11, 3));
console.log(intervalCount(0, 11, 5));
console.log(intervalCount(0, 11, 7));




// math dalykai bus mokomi paskui
// const a = 3.1111;
// const b = a % 1;
// console.log(b);
// console.log(a - 3);

// const c = a - Math.floor(a);
// console.log(a);