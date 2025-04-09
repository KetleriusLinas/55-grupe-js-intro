// sort -- sortiruoja pagal kompo abecele, pirmoje vietoje diziosios raides, paskui mazosios.
console.log('-----------------sort--string-------------------');

const texts = ['labas', 'rytas', 'Lietuva', 'duona', 'aviza', 'Zirnis', 'Anakonda']
console.log(texts);

texts.sort();
console.log(texts);


const pseudo = ['d', 'b', 'ca', 'bf', 'ba', 'cc', 'db', 'baa', 'bac'];
pseudo.sort();

console.log(pseudo);
console.log('-----------------sort----numbers-----------------');

// sorto methodas kai yra be palyginimo funkcijos, jis sortiruoja pagal abecele. 1, 10 ir tt 

const numbers = [10, 2, 8, 23,  1, 4, 6, 12].sort(); // issortino pagal savo 'kompo' abecele
console.log(numbers);

const numbers1 = [10, 2, 8, 23,  1, 4, 6, 12].sort((a, b) => a - b); // issortino nuo maziausio
console.log(numbers1);

const numbers2 = [10, 2, 8, 23,  1, 4, 6, 12].sort((a, b) => b - a); // issortino nuo didziausio
console.log(numbers2);


const people = [
    {name: 'Petras', age: 55},
    {name: 'Jonas', age: 99},
    {name: 'Ona', age: 66},
    {name: 'Maryte', age: 88},
    {name: 'Petras', age: 77},


];
// people.sort((a, b) => a - b); // negalima taip rasyti objecta is objecto neatimsi
people.sort((a, b) => a.age - b.age); // issortino pagal amziu.
console.log(people);

people.sort((a, b) => a.name.length - b.name.length); // isrykiavo pagal vardu ilgius
console.log(people);

people.sort((a, b) => a.name > b.name ? 1 : -1); // su ternary pagalba isrykiavom abeceles tvarka 
console.log(people);
//                  abeceleje lygina tekstus       
people.sort((a, b) => a.name > b.name ? 1 : a.name === b.name ? 0 : -1); // palyginom ar yra vienodu vardu.
console.log(people);

// jei butu true , false reiksmes-- pradzioj sudetu false paskui true.
