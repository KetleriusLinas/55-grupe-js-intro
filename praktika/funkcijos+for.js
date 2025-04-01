let atvirukoTekstas = 'labai geras daiktas yra televizorius as su juo galiu matyti jus';
let atvirukoRaide = 'a';
let atvirukoSuma = 0;


// skaiciuoja kiek raidziu yra siame sakinyje
for (let i = 0; i < atvirukoTekstas.length; i++) {
    if (atvirukoTekstas[i] === atvirukoRaide) {
        atvirukoSuma ++;
    }
    // console.log(atvirukoSuma); // sioje vietoje isvedineja i ekrana kiekviena raide.. pvz randa raide prideda
    // 2222 (randa  dar viena)  pridedja ja jau 3333, randa, vel prideda 444 ir kol randa viska.
}
console.log(atvirukoSuma);

// skaiciuoja kiek raidziu yra siame sakinyje
function atvirukoLipdukai (raide) {
    atvirukoSuma = 0;
    for (let i = 0; i < atvirukoTekstas.length; i++) {
        if (atvirukoTekstas[i] === raide) {
            atvirukoSuma ++;
        }
    }
    return atvirukoSuma;
}
console.log(atvirukoLipdukai('a'));
console.log(atvirukoLipdukai('z'));
console.log(atvirukoLipdukai('t'));

// apskaiciuoja kiek balsiu pasikartoja. issikvieti viena funkcija ir su ja dirbi
const atvirukoBalses = ['a', 'e', 'o', 'u', 'i'];

for (let i = 0; i < atvirukoBalses.length; i++) {
    console.log('Raide '+ atvirukoBalses[i] + ' pasikaartoja ' + atvirukoLipdukai(atvirukoBalses[i]));
}

console.log('--------------------------')

// susiziureti klaidas
let manoRaide = 't';
let tekstasIlgas = 'kazin kas tokio idomaus gali buti programavime. Daug dalyku, galbut, tik reikia juos rasti?';
let rastosRaides = 0;
let norimasKiekis = 4;
let einamasTekstas = '';

for (let i = 0; rastosRaides <= norimasKiekis; i++) {
    einamasTekstas += tekstasIlgas[i];
        if (tekstasIlgas[i] === manoRaide) {
            rastosRaides ++; // += 1 galima rasyt
        }
        if (i === tekstasIlgas.length - 1) {
            rastosRaides = 4; // ????? turi kazkas baigtis .. 
        }
}
console.log(einamasTekstas);