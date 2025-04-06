// Parašykite for ciklą, kuris apskaičiuotų visų skaičių nuo 5 iki 15 sumą
console.log('---------------1----------------');
let sum = 0;
for (let i = 5; i < 15; i++) {
    sum += i;
    // console.log(sum);
}
console.log(sum);
console.log('---------------2----------------');

// 2. Parašykite for ciklą, kuris į console išvestų visas žodžio ‘Vakaras’ raides po vieną
let zodis = 'Vakaras';
for (let i = 0; i < zodis.length; i++) {
    console.log(zodis[i]);
}
console.log('---------------3----------------');
// 3. Parašykite for ciklą, kuris išvestų šešeto daugybos lentelę

for (let i = 6; i <= 6; i++) {
    console.log('daugybos lentele is:', i);
    for (let n = 1; n < 10; n++) {
        // const suma = i * n;
        console.log(`${i} * ${n} =`, i * n);
    }
}
console.log('---------------4----------------');
// Parašykite for ciklą, kuris į consolę išvestų nuo 5 iki 1, ir po vieneto (vietoje 0) į
// ekraną išvestų žodį ‘BOOM’

for (let i = 5; i > -1; i--) {
    if (i === 0) {
        console.log('BOOM');
    } else {
        console.log(i);
    }
}
console.log('---------------5----------------');
// . Parašykite for ciklą, kuris isudėtų visus lyginius skaičius nuo 3 iki 18
for (let i = 3; i <= 18; i++) {
    if (i % 2 === 0)
    console.log(i);
}
console.log('---------------6----------------');
// Parašykite for ciklą, kuris išvestų visus sąrašo elementus į console

let a = ['abd', 1, 5, 'op', 'a'];
for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}
console.clear();
console.log('---------------7----------------');
// . Parašykite ciklą, kuris iš vardų sąrašo išvestų visus elementus, pridėdamas ‘Mano
// vardas - ’ console log eilutės pradžioje

let vardai = ['Petras', 'Jonas', 'Algis'];
    for (let i = 0; i < vardai.length; i++) {
    console.log(`Mano vardas: ${vardai[i]}`);
}
console.log('---------------8----------------');
// Parašykite for ciklą, kuris sudėtų visus sąrašo skaitinius elementus
let suma = 0;
let elementai = [2, 8, 'abc', -1, 'op', 9, 5, 'gg'];
let skaitiniaiElementai = [];
    for (let i = 0; i < elementai.length; i++) {
    if (typeof elementai[i] === 'number') {
        skaitiniaiElementai.push(elementai[i]);
    }
}
     for (let i = 0; i < skaitiniaiElementai.length; i++){
    suma += skaitiniaiElementai[i];
}
console.log(skaitiniaiElementai, suma);
console.log('--padarei klaida kad darei cikla (for), cikle(for)-');

// Parašykite for ciklą, kuris išvestų į console visus sąrašo elementus nuo paskutinio iki
// pirmo
console.log('---------------9----------------');

let elementai1 = [2, 8, 'abc', -1, 'op', 9, 5, 'gg'];
    for (let i = elementai1.length - 1; i >= 0; i--) {
       console.log(elementai1[i]);
}
console.log('---------------10------------nezinau metodo----');
// . Parašykite for ciklą, kuris išvestų į console tik tuos skaičius, jei jie yra pinigų reikšmės
// (1, 2, 5, 10, 20, 50, 100, 200, 500)

let skaiciai = [1, 'op', 2, 2,  -5, 5, 10, true, 50, -200, 50, 20, 500, 200];
    for (let i = 0; i <= 500; i++) {
        if (skaiciai.includes(i))
            console.log (i);
    };

    console.log('---------------11----------------');

    // Parašykite for ciklą, kuris iš sąrašo Raidės [ ‘L’, ‘a’, ‘b’, ‘a’, ‘s’] sudėliotų kintamąjį
    // Žodis, kurio reikšmė yra ‘Labas’
let labas = ['L', 'a', 'b', 'a', 's']
let zodisLabas = [];
    for (let i = 0; i < labas.length; i++){
        zodisLabas += labas[i];
    }
    console.log(zodisLabas);

console.log('---------------12----------------');

// Parašykite for ciklą, kuris atskirai atspausdintų kiekvieną žodžio Programavimas
// raidę.

let programavimas = 'Programavimas';
    for (let i = 0; i < programavimas.length; i++) {
        console.log(programavimas[i]);
    }

console.log('---------------13----------------');
// Parašykite for ciklą, kuris sudaugintų skaičius nuo 2 iki 10. Už ciklo išveskite į
// consolę reikšmę
let daugyba = 2;
for (let i = 3; i < 10; i ++) {
    daugyba = daugyba * i;
    console.log(daugyba);
    // console.log(3*4*5*6*7*8*9);
}
console.log('---------------14----------------');
// . Parašykite for ciklą, kuris apskaičiuos visų nelyginių skaičių nuo 1 iki 30 sumą
let nelyginiai = 0;
for(i = 0; i < 30; i++) {
    if (i % 2) {
        nelyginiai += i;
    }
}
console.log (nelyginiai);
// console.log (1+3+5+7+9+11+13+15+17+19+21+23+25+27+29);
console.clear();
console.log('---------------15----------------');
// Parašykite for ciklą, kuris į console išvestų skaičius nuo 20 iki 10

for (let i = 20; i >= 10; i--){
    console.log(i);
}
console.log('---------------16----------------');
// . Parašykite for ciklą, kuris į console išvestų sąrašo RaidėsAtbulai [ ‘s’, ‘a’, ‘b’, ‘a’, ‘L’]
// elementus vienas po kito nuo galo iki pradžios

let raidesAtbulai = ['s', 'a', 'b', 'a', 'L'];
let sujungtasZodis = [];
    for (let i = raidesAtbulai.length - 1; i >= 0; i--){
        sujungtasZodis += raidesAtbulai[i];
        console.log (raidesAtbulai[i]);
};
console.log(sujungtasZodis);

console.log('---------------17----------------');
// Parašykite for ciklą, kuris į console išvestų kintamojo ŽodisAtbulas =
// ‘samivamargorP’ atskiras raides vieną po kitos

let zodisAtbulas = 'samivamargorP';
let zodisIsEiles = [];
for (let i = zodisAtbulas.length - 1; i >= 0; i--) {
    zodisIsEiles += zodisAtbulas[i];
}
console.log(zodisIsEiles); // uz for ciklo reikia isvedineti

console.log('---------------18----------------');
// . Parašykite for ciklą, kuris į consolę išveda skaičius nuo 1 iki 100. Jei skaičius dalinasi
// iš 7, papildomai į consolę yra išvedamas žodis ‘lucky’

for (let i = 1; i < 100; i++) {
    if (i % 7 == 0)
console.log(i,'lucky');
console.log (i);
}
console.clear();
console.log('---------------19----------------');

// . Parašykite for ciklą, kuris į console po vieną atskirai išvestų dvigubas sąrašo
// Dvigubinti [2, 3, 6, 8] reikšmes (Gaunamas atsakymas: 4, 6, 12, 16)

let dvigubinamasSarasas = [2, 3, 6, 8];
    for (let i = 0; i < dvigubinamasSarasas.length; i++) {
        console.log(dvigubinamasSarasas[i] * 2);
    };
console.log('---------------20----------------');

// Parašykite for ciklą, kuris iš sąrašo DaugSkaičių [2, 14, 10, 1000, 503, 8, 0] išvestų
// visus skaičius, kurie yra mažesni už 100

let mazesniNeiSimtas = [2, 14, 10, 1000, 503, 8, 0, 120, 150, 5, 99, 101];
    for (let i = 0; i < mazesniNeiSimtas.length; i++) {
        if (mazesniNeiSimtas[i] < 100) {
            console.log(mazesniNeiSimtas[i]); 
    }
}
console.log('---------------21----------------');
