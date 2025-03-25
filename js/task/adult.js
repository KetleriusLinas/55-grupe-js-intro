/* 
Reikalinga funkcij, kuri gauna vartotojo amziu (metais) ir atitinkamai grazina zodi:
- suauges
- vaikas
Amziaus ribos kriterijus : >= 18 metu.

*/

function isAdult(age) {
    if (age >= 18) {
        return 'suauges';
    } else {
        return 'vaikas';
    }

}

console.log(isAdult(18), '-->', 'suauges');  // testas kad aprasyta logika veikia tinkamai
console.log(isAdult(17), '-->', 'vaikas');   // testas kad aprasyta logika veikia tinkamai