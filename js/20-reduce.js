
// recue - supaprastinti, sumazinti kieki

const marks = [10, 2, 8, 4, 6];

// aprasytume taip
let sum = 0;
for(const n of marks) {
    sum += n;
}
console.log(sum);

//     10 + 2 + 8 + 4 + 6                 
const sum2 = marks.reduce((total, n) => total + n);
console.log(sum2);

//     10 - 2 - 8 - 4 - 6
const minus = marks.reduce((total, n) => total - n);
console.log(minus);

// 10 * 2 * 8 * 4 * 6 // galim 
const daugyba = marks.reduce((total, n) => total * n);
console.log(daugyba);
console.log('--------------');



//   0 + 10 + 2 + 8 + 4 + 6                 
const sum3 = marks.reduce((total, n) => total + n, 0); // 0 nustatome nuo kur atspirties taskas initial value = 0
console.log(sum3);

//    0 - 10 - 2 - 8 - 4 - 6
const minus2 = marks.reduce((total, n) => total - n, 0); // 0 nustatome parametra, nuo ko pradeda gali ir 100 parasyt
console.log(minus2);

// 1 * 10 * 2 * 8 * 4 * 6 // galim 
const daugyba2 = marks.reduce((total, n) => total * n); // nebent daugyba tuoment nedauginsim is 0, tuomet nustatom value 1, su dalyba tas pats, neutraliausias skaicius.
console.log(daugyba2);


console.log('-------tekstai-------');

const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];

// ipratas ciklas taip prasisuka
let abbr = '';
for (const name of names) {
    abbr += name[0] + '.';
}
console.log(abbr);

const abbr2 = names.reduce((total, name) => total + name[0] + '.'); // pradejo nuo jonas vardo, nenustatem nuo kur pradeti init value 0
console.log(abbr2);

const abbr3 = names.reduce((total, name) => total + name[0] + '.', ''); // nustacius value gerai skaiciuoja.
console.log(abbr3);
// pasiulymas nenaudoti sio metodo geriau naudoti iprasta cikla daugiau su juo galima padaryt ir jis aiskesnis.