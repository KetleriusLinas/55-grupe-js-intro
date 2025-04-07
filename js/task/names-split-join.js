/*
Funkcija gauna sakini, kuris atrodo taip:
"Siuo metu klaseje yra: jonas, Maryte, peTRas, ONA"
funkcijos darbas grazinti teisingai perasyta sakyni, reikia istaisyti vardus. (Jonas, Maryte,Petras,Ona)
*/
// iskaidom problema:
// - atsiskiriame vardus is orginalaus teksto
// - konvertuojame teksta i mazasias raides
// - issiskaidyti individualius vardus i masyva
// - ciklas eina per individualius vardus
//      - pasiima pirma raide
//      - ja padidina
//      - apjungia i gakutini normalu varda
// - pagaminame galutini reikiama sakini

function correctSentence (text) {
    const parts = text.split(': '); // atskiriame teksta nuo sios vietos
    const names = parts[1] // isivedam antra teksto dali i kintamaji
        .slice(0, -1)           // , nupjaunam (taska), 
        .toLowerCase()          // paverciam viska mazosiom raidemm
        .split(', ');           // atskiriam ( per kableli, tarpa). Jau teksta esam pasiruose
    console.log(parts);
    console.log(names);


for(let i = 0; i < names.length; i ++){
    const name = names[i];
    const firstLetter = name[0].toUpperCase();  // pakeli pirma raide i didziaja
    const restName = name.slice(1);             // kerpam nuo 1 zodzio simbolio
    const newName = firstLetter + restName;     // sujungiam zodzius Didziaja raide su likusiu tekstu
    // console.log(name, '----', firstLetter + restName);
    const newName1 = firstLetter + restName;
    names[i] = newName;                         // perasom, buvusia bloga perdarem ir idejom nauja pataisyta reiksme.
 
}
    console.log(names);
    return parts[0] + ': ' + names.join(', ') + '.';
}

console.log(correctSentence('Siuo metu klaseje yra: jonas, Maryte, peTRas, ONA'));
