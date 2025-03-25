/*
1 užduotis - mokytojo suvestinė:

Susikurkite bent 6 sąrašo (array) tipo kintamuosius, kurių pirmas narys yra mokinio vardas, o toliau yra 5 skaičiaus tipo mokinio pažymiai
Sukurkite funkciją, kuri padaro šiuos veiksmus:
Į console išveda mokinio vardą
Į console išveda mokinio pažymių vidurkį ir praneša ar mokinys išlaikė ar neišlaikė kurso
Jei mokinys neišlaiko kurso, parašykite ar mokinys, gavęs vieną gerą įvertį, galėtų pasitaisyti savo vidurkį.
*/


//----------------------------------------PASIBAIGTI-------------------------------------------------
const mokinys1 = [' Tadas', 8, 9, 10, 4, 7];
const mokinys2 = [' Rima', 8, 3, 5, 9, 7];
const mokinys3 = [' Gabija', 3, 3, 3, 3, 5];
const mokinys4 = [' Rokas', 3, 4, 3, 6, 1];
const mokinys5 = [' Replius', 3, 6, 8, 3, 10];


function mokinioVidurkis (mokinys) {
    console.log('Mokinio vardas:' + mokinys[0]);
    let vidurkis = (mokinys[1] + mokinys[2] + mokinys[3] + mokinys[4] + mokinys [5]) / 5;

    // let vidurkisNaujas = (vidurkis * (5+10) / 6);


    if (vidurkis >= 3.5) {

        console.log(mokinys[0] + ' islaike. Jo/s vidurkis:' + vidurkis);
    }
else {
    let vidurkisNaujas = ((vidurkis * 5) + 10) / 6;
    console.log(mokinys[0] + ' neislaike. Jo/s dabartinis vidurkis:' + vidurkis);

if (vidurkisNaujas >= 3.5) {
    console.log(mokinys[0] + ' islaikytu kursa jeigu gautu viena desimtuka');
        }
    }
}

mokinioVidurkis(mokinys1);
mokinioVidurkis(mokinys2);
mokinioVidurkis(mokinys3);
mokinioVidurkis(mokinys4);
mokinioVidurkis(mokinys5);


console.log();
console.log(`2 užduotis - filmų rekomendacija:`);

// Susikurkite bent 5 sąrašo tipo kintamuosius, kurių pirmas narys yra filmo pavadinimas, antras narys yra filmo žanras, o trečias narys yra skaičiaus tipo filmo įvertis.


// Susikurkite 2 kintamuosius kurie -pirmas nurodo jūsų mėgstamą žanrą ir antras nurodo jūsų norimą matyti filmo įvertį.
// Padarykite funkciją, kuri iš pasirinktų 3 filmų, pagal jūsų norimą žanrą ir įvertį išveda į console kokie filmai jums patiktų. Jei joks filmas netinka, turi tai pranešti.



// const filmas1 = ['Reples', 'dokumentika', 8.4];
// const filmas2 = ['atsuktuvas', 'veiksmo', 6.2];
// const filmas3 = ['lietvamzdis', 'drama', 5.5];
// const filmas4 = ['irklas', 'komedija', 4.7];
// const filmas5 = ['rastas', 'veiksmo', 7];


// const manoBalas = 6.5;
// const manoZanras = 'veiksmo';
// // let arYraFilmas = false;

// function filmoPasiulymas (filmasA, filmasB, filmasC, zanras, ivertinimas){
//     let arYraFilmas = false;

//     if(filmasA[2] >= balas && filmasA[1] == zanras) {
//         arYraFilmas = true;
//         console.log('Jums tiktu:' + filmasA[0]);
//         arYraFilmas = true;
//     }
//     if(filmasB[2] >= balas && filmasA[1] == zanras) {
//         console.log('Jums tiktu:' + filmasB[0]);
//     }

//     if(arYraFilmas == false) {
//         console.log ('Jums tinkamu filmu nera')
//     }
// }

// console.log(filmas1);
// console.log(filmas2);
// console.log(filmas3);
// console.log(filmas4);
// console.log(filmas5); 