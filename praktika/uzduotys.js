/*
1 užduotis - mokytojo suvestinė:

Susikurkite bent 6 sąrašo (array) tipo kintamuosius, kurių pirmas narys yra mokinio vardas, o toliau yra 5 skaičiaus tipo mokinio pažymiai
Sukurkite funkciją, kuri padaro šiuos veiksmus:
Į console išveda mokinio vardą
Į console išveda mokinio pažymių vidurkį ir praneša ar mokinys išlaikė ar neišlaikė kurso
Jei mokinys neišlaiko kurso, parašykite ar mokinys, gavęs vieną gerą įvertį, galėtų pasitaisyti savo vidurkį.
*/


//----------------------------------------PASIBAIGTI-------------------------------------------------
// const mokinys1 = [' Tadas', 8, 9, 10, 4, 7];
// const mokinys2 = [' Rima', 8, 3, 5, 9, 7];
// const mokinys3 = [' Gabija', 3, 3, 3, 3, 5];

// function mokinioVidurkis (mokinys) {
//     console.log('Mokinio vardas:' + mokinys[0]);
//     let vidurkis = (mokinys[1] + mokinys[2] + mokinys[3] + mokinys[4] + mokinys [5]) / 5;
//     if (vidurkis >= 3.5) {

//         console.log(mokinys[0] + ' islaike. Jo vidurkis:' + vidurkis);
//     }
// else {
//     let vidurkisNaujas = ((vidurkis * 5) + 10) / 6;
//     console.log(mokinys[0] + ' neislaike. Jo dabartinis vidurkis:' + vidurkis);

// if (vidurkisNaujas >= 3.5) {
//     console.log(mokinis[0] + ' islaikytu kursa jeigu gautu viena desimtuka');
    

//         }
//     }
// }

// mokinioVidurkis(mokinys1);
// mokinioVidurkis(mokinys2);
// mokinioVidurkis(mokinys3);













//2 užduotis - filmų rekomendacija:

// Susikurkite bent 5 sąrašo tipo kintamuosius, kurių pirmas narys yra filmo pavadinimas, antras narys yra filmo žanras, o trečias narys yra skaičiaus tipo filmo įvertis.
// Susikurkite 2 kintamuosius kurie -pirmas nurodo jūsų mėgstamą žanrą ir antras nurodo jūsų norimą matyti filmo įvertį.
// Padarykite funkciją, kuri iš pasirinktų 3 filmų, pagal jūsų norimą žanrą ir įvertį išveda į console kokie filmai jums patiktų. Jei joks filmas netinka, turi tai pranešti.