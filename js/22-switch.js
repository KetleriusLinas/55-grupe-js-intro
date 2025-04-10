const day = 9;
let dayName = '---';

if (day === 1) {
    dayName = 'Pirmadienis';
} else if (day === 2) {
    dayName = 'antradienis'
}else if (day === 3) {
    dayName = 'treciadienis'
}else if (day === 4) {
    dayName = 'ketvirtadienis'
}else if (day === 5) {
    dayName = 'penktadienis'
}else if (day === 6) {
    dayName = 'sestadienis'
}else if (day === 7) {
    dayName = 'sekmadienis'
}else {
    dayName = 'Tokios dienos savaiteje nera'
}
console.log(dayName);
console.log('-------switch--------');

const d = 6;
let weekDayName = '***';


switch (d) {
    case 1:
        weekDayName = 'pirmadienis';
        break;
    case 2:
        weekDayName = 'antradienis';
        break;
    case 3:
        weekDayName = 'treciadienis';
        break;
    case 4:
        weekDayName = 'ketvirtadienis';
        break;
    case 5:
        weekDayName = 'penktadienis';
        break; 
    case 6:             //else if
        weekDayName = 'sestadienis';
         break; 
    case 7:             // kaip else if
        weekDayName = 'sekmadienis';
        break;   
    default:    // kaip paskutinis else
        weekDayName = 'tokios savaities dienos nera';     
        break;
}       

console.log(weekDayName);

const day2 = 9;
let day2Name = '';

if(day2 === 1 || day2 === 2 || day2 === 3 || day2 === 4 || day2 === 5) {
    day2Name = 'darbo diena'; 

} else if (day2 === 6 || day2 === 7) {
    day2Name = 'savaitgalis';
} else {
    day2Name = 'tokios dienos savaiteje nera';
};
console.log(day2Name);


const day3 = 6;
let day3Name = '';

switch (day3) {
    case 1:
    case 2:
    case 3:
    case 4:     // daro in case tol kol sutinka break.
    case 5:
        day3Name = 'darbo diena';
        break;
    case 6:
    case 7:
        day3Name = 'savaitgalis';
        break;
default:
    day3Name = 'tokios dienos nera';
    break;
};
console.log(day3Name);


// 1) uzvirinti vandeni
// 2) i puodeli isideti arbatos
// 3) isideti cukraus/saldikliu
// 4) ipilame vandeni
// 5) issimaisyti
// 6) gerti

console.log('----IKI kol sutinka break---- ');

const teaStep = 1;


switch (teaStep) { // vygdo salyga tol kol suranda artimiausia break;

    case 1:
        console.log('uzvirinti vandeni');
    case 2:
        console.log('i puodeli isideti arbatos');
    case 3:
        console.log('isideti cukraus/saldikliu');
    case 4:
        console.log('ipilame vandeni');
    case 5:
        console.log('issimaisyti');
        break;
    case 6:
        console.log('gerti');
        break;
    default:
        console.log('arbatos');
        break;
                                       
};
console.log('---------------------------------');


const stop = 'Tremtiniu';

// iesko artimiausio case ir atlikineja iki tol kol sutinka pirmaji break.
switch(stop) {
    case 'Parko': console.log('Parko');
    case 'Geniu': console.log('Geniu');
    case 'Tremtiniu': console.log('Tremtiniu');
    case 'Rudens': console.log('Rudens');
    case 'Mindaugo tiltas': console.log('Mindaugo tiltas');
    case 'Zaliasis tiltas': console.log('Zaliasis tiltas');
        break;
    case 'Lvovo': console.log('Lvovo');
    case 'Vasaros': console.log('Vasaros');
    case 'Rudens 2': console.log('Rudens 2');
    case 'Tremtiniu 2': console.log('Tremtiniu 2');
    case 'Geniu 2': console.log('Geniu 2');
    case 'Parko 2': console.log('Parko 2');
        break;
    
}