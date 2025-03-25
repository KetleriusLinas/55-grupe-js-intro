/* 
Reikalinga funkcija, kuri gauna teksa, kuri grazina rezultata, priklausomai nuo teksti ilgio.
- jei tuscias: "tuscias tekstas"
- jei maziau 10 simboliu: "trumpas tekstas is n(simboliu kiekis) simboliu"
- jei maziau 20 simboliu: "Tekstas is n simboliu."
- jei ilgesnis: "Ilgas tekstas is n simboliu."
*/

function textSize (text) {
    if (text.length === 0) {
        return "tuscias tekstas.";
    } 
    if (text.length < 10) {
            return `trumpas tekstas is ${text.length} simboliu`;
    }
    if (text.length < 20) {
        return `Tekstas is ${text.length} simboliu.`
    }
        // return 'trumpas tekstas is ${text.length} simboliu';
        return `Ilgas tekstas is ${text.length} simboliu`
   
}

console.log(textSize('')); // testukai del logikos
console.log(textSize('Labas'));
console.log(textSize('Virs desimt '));
console.log(textSize('virst dvidesimt tuei but'));
console.log('------------------------');

function textSize2 (text) {
    if (text.length === 0) {
        return "tuscias tekstas.";
    } 
    else if (text.length < 10) {
            return `trumpas tekstas is ${text.length} simboliu`;
    }
    else if (text.length < 20) {
        return `Tekstas is ${text.length} simboliu.`
    }
        // return 'trumpas tekstas is ${text.length} simboliu';
        return `Ilgas tekstas is ${text.length} simboliu`
   
} // 2 variantas kaip parasyti

console.log(textSize('')); // testukai del logikos
console.log(textSize('Labas'));
console.log(textSize('Virs desimt '));
console.log(textSize('virst dvidesimt tuei but'));
console.log('------------------------');

// svarbu eiliskumus tinkamai parasyk if <10, if >20 ir panasiai. eiliskumas nuo maziausio arba nuo didziausio

function textSize4 (text) {
    if (text.length < 20) {
        return `Tekstas is ${text.length} simboliu.`;
    }
    if (text.length < 10) {
        return `trumpas tekstas is ${text.length} simboliu`;
    }
    if (text.length === 0) {
        return "tuscias tekstas.";
    }
}  
console.log(textSize('')); // testukai del logikos
console.log(textSize('Labas'));
console.log(textSize('Virs desimt '));
console.log(textSize('virst dvidesimt tuei but'));
console.log('------------------------');

function textSize5 (text) {  // best way to do it
    if (text.length < 20) {
        return `Tekstas is ${text.length} simboliu.`;
    }
    if (text.length > 0 && text.length < 10) {
        return "tuscias tekstas.";
    }
    if (text.length >= 10 && text.length < 20 ) {
        return `trumpas tekstas is ${text.length} simboliu`;
    }
    if (text.length === 0) {
        return "tuscias tekstas.";
    }
}
console.log(textSize('')); // testukai del logikos
console.log(textSize('Labas'));
console.log(textSize('Virs desimt '));
console.log(textSize('virst dvidesimt tuei but'));
console.log('------------------------');

