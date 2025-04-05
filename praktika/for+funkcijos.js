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
console.log('---------------10----------------');
// . Parašykite for ciklą, kuris išvestų į console tik tuos skaičius, jei jie yra pinigų reikšmės
// (1, 2, 5, 10, 20, 50, 100, 200, 500)

let skaiciai = [1, 2, 5, 10, 20, 50, 100, 200, 500];
let piniguReiksmes = [];
    for (let i = 0; i < skaiciai.length; i++) {
        if (skaiciai === 1 || skaiciai === 2 || skaiciai === 5 )
            piniguReiksmes += skaiciai[i];
            console.log (skaiciai.indexOf(1, 0));
    }