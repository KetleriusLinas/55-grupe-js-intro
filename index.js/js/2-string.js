/*
string - tekstas, simboliu grandine.

Tekstines reiksmes iniciavimas:
 - ' (vienguba kabute)
 - " (dviguba kabute)
 - 

 Specialieji simboliai:
- \ (privercia sekanti simboli buti spausdintinu)
- \r (return, kursorius grizta i eilutes pradzia)
- \n (new line, kursorius nusileidzia viena eilute zemyn)
- \t (tab)
 */
const a = 'Labas';
console.log(a);

// Vienaguba (') kabute.
const k1 = "Vienguba (') kabute.";
console.log(k1);

// Dviguba (") kabute.
const k2 = 'Dviguba (") kabute.';
console.log(k2);

// Vienguba (') ir (") kabutes.
const k12 = "Vienguba (') ir" + ' ' + 'dviguba (") kabutes.';
console.log(k12);


const name = "Jonas";
const surname = "Jonaitis";

// const space = ' '; - neverta kurti 
// const fullname = name + space + surname;
// console.log(fullname); 

const fullname = name + ' ' + surname;
console.log(fullname);


// Vienguba (') kabute. (\') - nurodo kad skaityti toliau.
const k3 = 'Vienguba (\') kabute.'
console.log(k3);

// Vienguba ("") kabute. (\") - nurodo kad skaityti toliau.
const k4 = "Dviguba (\") kabute."
console.log(k4);


// Vienguba (') ir (") kabutes.
const k5 = 'Vienguba (\') ir dviguba (") kabutes.';
const k6 = "Vienguba (') ir dviguba (\") kabutes.";

console.log(k5);
console.log(k6);


// backslash spausdina viena simboli po saves 
const backslash1 = '\\';
console.log(backslash1);

console.clear();



{/* < header >
    <img>
        <nav>
            <a></a>
            <a></a>
            <a></a>
        </nav>
</header>


console.log();
 */}


// Vienaguba (') kabute. - backtikas
const b1 = "Vienguba (') kabute.";
console.log(b1);

// dviguba (') kabute.  -  backtikas
const b2 = `Vienguba (') kabute.`;
console.log(b2);


// Backtick (`) kabute. - Jei reiktu naudoti, naudoji vienguba
// ar dviguba kabute.
const b4 = `Backtick (\`) kabute.`;
console.log(b4);


// tvarkingiau 
const b7 = `< header >
    <img>
        <nav>
            <a></a>
            <a></a>
            <a></a>
        </nav>
</header>
`
console.log(b7);



const studentName = 'Maryte';
const amout = 20;

// Martyte yra viena is 4 legendiniu studente.
const student = studentName + ' yra viena/s is ' + amout + ' legendiniu studente';
const student2 = `${studentName} yra viena/s is ${amout} legendiniu studente.`;


console.log(student);
console.log(student2);

const demo = `Labas, ${studentName} kiek tau metu? ${studentName} atsako: man ${amout}.`;
console.log(demo);

console.clear();


const word = 'pomidoriauskas';
//const wordSymbolsCount = 9;
// auto skaiciavimas simboliu
const wordSymbolsCount = word.length;

console.log(word);
console.log(wordSymbolsCount);

const textSize = 'ahjsdjasudh  ajndjsag  hdaj'.length;
console.log(textSize);


const age = 99;
// (''+age) pavercia skaicius tekstu.
const ageDigitsCount = ('' + age).length;

// .toString() - pavercia skaicius i teksta ir isskaiciuoja ilgi.
const ageDigitsCount2 = age.toString().length;

console.log(ageDigitsCount);
console.log(ageDigitsCount2);
console.clear();


const text = 'barbaras';
// text[0] - laustiniuse skliaustuose nurodo kuri symboli rodyti.
const firstSymbol = text[0];
const firstSymbol1 = text[1];
const firstSymbol2 = text[2];

console.log(firstSymbol);
console.log(firstSymbol1);
console.log(firstSymbol2);
console.log(text[1] + text[0]);

// Zodyje "desrainyje" sestoji raide yra "i".
const game = 'desrainis';
const gameSentence = `Zodyje ${game} pirmoji raide yra ${game[5]}`
console.log(gameSentence);

