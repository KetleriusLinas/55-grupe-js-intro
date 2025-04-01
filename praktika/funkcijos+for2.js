// 1. Susikurkite sąrašą 10 miestų, kuriame būtų įvardinami miesto pavadinimai ir jų
// atstumai iki Vilniaus ([‘Kaunas’, 89.6, ‘Klaipėda’, 307.3, … )
console.log('----------- uzduotis Nr.1 -------------');
// Parašykite funkciją, kuri pasakytų, kur toliausiai nuvažiuotume važiuodami x
// km/h greičiu per y valandų
console.log('--------------- Nr.1 a. -------------');

const miestas = ['Kaunas', 100.6];
const miestas1 = ['Marijampole', 88.5];
const miestas2 = ['Klaipeda', 300.7];
const miestas3 = ['Palanga', 330.1];
const miestas4 = ['Siauliai', 200.2];
const miestas5 = ['Druskininkai', 66.6];
const miestas6 = ['Alytus', 123.1];
const miestas7 = ['Mazeikiai', 358.5];
const miestas8 = ['Panevezys', 222.8];
const miestas9 = ['Visaginas', 55.4];

function toliausiaiNuvaziavo (greitis, laikas) {
    if (typeof greitis !== 'number' || typeof laikas !== 'number') {
        return 'Reikalingas skaicius';
    } if (greitis <= 0 || laikas <= 0) {
        return 'Reikalingi teigiami skaiciai'
    }
    const atstumas = greitis * laikas;
    return atstumas;
}
console.log(toliausiaiNuvaziavo('abc', 1.5));
console.log(toliausiaiNuvaziavo(0, 2.5));
console.log(toliausiaiNuvaziavo(75, 3.5));
console.log(toliausiaiNuvaziavo(158, 1.5));
console.log(toliausiaiNuvaziavo(220, 2));
console.log('--------------- Nr.1 b.--------------');
// . Parašykite funkciją, kuri pasakytų, ar spėtume pasiekti norimą miestą per x
// valandų ir kokiu greičiu turėtume važiuoti? (padarykite limitą 120 km/h)

