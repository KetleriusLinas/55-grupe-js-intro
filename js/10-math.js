console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);


// abs neigiamus skaicius pavercia teigiamais, teigiamus palieka teigiamais
console.log('\nabs');
console.log(Math.abs(5));
console.log(Math.abs(-5));

//cbrt kubine saknis
console.log('\ncbrt');
console.log(Math.cbrt(8));
console.log(Math.cbrt(27));
console.log(Math.cbrt(64));

// ceil(ang. lubos) - Apvalinimas skaiciaus i virsu (auksciau)
console.log('\nceil');
console.log(Math.ceil(8));
console.log(Math.ceil(8.9));
console.log(Math.ceil(8.5));
console.log(Math.ceil(8.000001));

// floor   - apvalinimas i apacia (zemiau)
console.log('\nfloor');
console.log(Math.floor(8));
console.log(Math.floor(8.9));
console.log(Math.floor(8.5));
console.log(Math.floor(8.999999));
console.log(Math.floor(-4.99999));

// round - normalus apalinimas 04.999 < 0.5 ++++
console.log('\nround');
console.log(Math.round(8));
console.log(Math.round(8.2));
console.log(Math.round(8.4));
console.log(Math.round(8.5));
console.log(Math.round(8.9));

// trunc minusa apvalina i didziaja puse -4 > -4.999999
console.log('\ntrunc');
console.log(Math.trunc(8));
console.log(Math.trunc(9));
console.log(Math.trunc(4.5));
console.log(Math.trunc(4.000001));
console.log(Math.trunc(4.99999));
console.log(Math.trunc(-4.99999));

// hypot trikampio istrizaine (izambine) ?? pitagoro teorema
console.log('\nhypot');
console.log(Math.hypot(3, 4));
console.log(Math.hypot(4, 5));
console.log(Math.hypot(4, 5, 6));

// max - isveda didziausia reiksme esancia
console.log('\nmax');
console.log(Math.max(-10, 2, 8, 4, 6)); // jei turi iskart skaicius kuriuos palyginsi tinka.
console.log(Math.max('asds', 2, 8, 4, 6));
console.log(Math.max(-10, 2, 8, 4, 'asds'));
// const list = [10, 2, 8, 4, 6];
// console.log (Math.max(list));

// min - isveda maziausia reiksme esancia
console.log('\nmin');
console.log(Math.min(-10, 2, 8, 4, 6)); 
console.log(Math.min('asds', 2, 8, 4, 6));
console.log(Math.min(-10, 2, 8, 4, 'asds'));

// pow kelimas laipsniu pirmas skaicius kuri kelsime laipsniu, antras laipsnis
// techniskai nereikia geriau naudoti ** (dvigubos zvaigzdutes operatoriu)
console.log('\npow');
console.log(Math.pow(2, 0), 2 ** 0); 
console.log(Math.pow(2, 1), 2 ** 1);
console.log(Math.pow(2, 2), 2 ** 2);
console.log(Math.pow(2, 3), 2 ** 3); 
console.log(Math.pow(2, 4), 2 ** 4);
console.log(Math.pow(2, 5), 2 ** 5);
console.log(Math.pow(2, 6), 2 ** 6); 
console.log(Math.pow(2, 7), 2 ** 7);
console.log(Math.pow(2, 8), 2 ** 8);
console.log(Math.pow(2, 9), 2 ** 9); 
console.log(Math.pow(2, 10), 2 ** 10);

// sign - panasus kaip abs ''pakeicia reiksme'' ???
console.log('\nsign');
console.log(Math.sign(8)); 
console.log(Math.sign(-8)); 

// sqrt kellia kvadratu , geriau naudoti (** 0.5) -- kvadratine saknis
console.log('\nsqrt');
console.log(Math.sqrt(4), 4 ** 0.5); 
console.log(Math.sqrt(9), 9 ** 0.5); 
console.log(Math.sqrt(81), 9 ** 0.5); 
console.log(Math.sqrt(2), 2 ** 0.5); 

// random
console.log('\nrandom');
console.log(Math.random()); 

