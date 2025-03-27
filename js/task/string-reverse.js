// function stringReverse(text) {
//     let result = ' ';
// // 1 sprendimo budas
//     // logika : text -> text
//     for (let i = text.length - 1; i >= 0; i--) {
//         result += text[i];
//     }
//     return result;
// }

console.log (stringReverse('abd'));
console.log (stringReverse('sula'));
console.log (stringReverse('sedek'));
console.log (stringReverse('uzu'));
console.log (stringReverse('sachmatai'));
console.log (stringReverse('saskes'));

console.log (stringReverse([]));
console.log (stringReverse([1, 2]));
console.log (stringReverse(['abc', 'efre']));
console.log (stringReverse(true));
console.log (stringReverse(stringReverse));
console.log (stringReverse(null));
console.log (stringReverse(undefined));
console.log (stringReverse());


// 2 sprendimo budas
    // logika : text -> text
    // for (let i = text.length - 1; i >= 0; i--) {
    //     result += text[i];
    // }

    // function stringReverse(text) {
    //     let result = ' ';
    //     for ( let i = 0; i < text.length; i++) {
    //         text[0]
    //         result += text[text.length - i - 1]; // paslenkam pozicija per (-1)
    //     }
    //     return result;
    // }
    

    //3 sprendimo budas - stato simbolius is priekio

    // function stringReverse(text) {
    //     let result = ' ';
    //     for ( let i = 0; i < text.length; i++) {
    //        result = text[i] + result;
    //     }
    //     return result;
    // }

    function stringReverse(text) {
        if (typeof text !== 'string') { // patikrinimas ar string tipas, jei ne isveda netinkama tipa
            return 'Reikalinga string tipo reiksme'
        }

    let result = ' ';
// 1 sprendimo budas
    // logika : text -> text
    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i];
    }
    return result;
}
