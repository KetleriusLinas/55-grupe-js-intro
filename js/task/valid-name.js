/*
funkcija, kuri gavusi zodi is jo padaro korektiska varda
*/
// issikaldem atskirus gabalus pirmas simbovlis , // issikaldem  atskirus gabalus visi likusieji
function validName (name) {
    const firstLetter = name[0].toUpperCase(); 
    const restLetters = name.slice(1).toLowerCase();  

    return firstLetter + restLetters;
}


// bazine ideja vardas pirma taisykle Pirmoji raide didzioji, antra taisykle visos sekancios mazos
console.log(validName('jonas'), '-->', 'Jonas');
console.log(validName('maRYTE'), '-->', 'Maryte');
console.log(validName('PeTrAs'), '-->', 'Petras');
console.log(validName('ONA'), '-->', 'Ona');