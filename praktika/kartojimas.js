// array sumavimas visu elementu

const a = [1, 2, 3, 4, 5];
let aSum = 0;

for (let i = 0; i < a.length; i++) {
    aSum += a[i];
}
console.log(aSum);

console.log('------------------------------------------------');



let b = 3;
let c = 2;

function addAB () {
    return b * c * b;
}

let d = addAB();
console.log (d);

console.log('------------------------------------------------');

function skaiciuojuMiskoGerybes (gerybe1, gerybe2, gerybe3) {
    let gerybiuSuma = gerybe1 + gerybe2 + gerybe3;
    return gerybiuSuma;
}
let udemes = 0;
let baravykai = 10;
let voveraites = 30;
let braskes = 10;
let silauoges = 25;
let melynes = 40;

skaiciuojuMiskoGerybes(voveraites, baravykai, melynes); // rezultatas funkcijos skaiciavimo
console.log(skaiciuojuMiskoGerybes(voveraites, baravykai, melynes));
skaiciuojuMiskoGerybes(15, 20, 10); // isvedu i terminala
console.log(skaiciuojuMiskoGerybes(15, 20, 10));


// pirminio skaicio skaiciavimas
let pirmin = 48;
for (let i = 2; i <= pirmin; i++) {
    if (i < pirmin && pirmin % i === 0) {
        console.log(` skaicius ${pirmin} nera pirminis, dalinasi is ${i}`)
        break;
    } else if (i === pirmin) {
        console.log(`skaicius ${pirmin} yra pirminis`);
    }
}
console.log('----------------objecto inventory--------------------------------');

const inventory = {
    fruits: {
        apple: {
            quantity: 10,
            threshold: 5,
        },
        banana: {
            quantity: 3,
            threshold: 5,
        },
    },
    electronics: {
        phone: {
            quantity: 2,
            threshold: 2,
        },
        laptop: {
            quantity: 0,
            threshold: 1,
        },
    },
};
//logs
const logs = [];

function addItem(category, name, quantity, threshold = 5) {
    if(!inventory[category]) {
        inventory[category] = {};
    };
    if(inventory[category][name]) {
        inventory[category][name].quantity += quantity;
    }
    else {
    inventory[category][name] = {quantity, threshold};
    };
    logTransactions('ADD', category, name, quantity);
};

function removeItem(category, name, quantity) {
    let item;
    if(inventory[category]) {
        item = inventory[category][name];
    } if (item) {
        item.quantity -=quantity;
        if(item.quantity <= 0) {
            console.log('Ispirkta preeke');
            delete inventory[category][name];
        }
        logTransactions('REMOVE', category, name, quantity);
    }
}

function logTransactions(type, category, item, quantity) {
    logs.push({type, category, item, quantity, timestamp: new Date().toLocaleString()})
}

function checkLowStock() {
    for(let category in inventory) {
        for (let item in inventory[category]) {
            const {quantity, threshold} = inventory[category][item];
            if(quantity <= threshold) {
                console.warn(`Low stock alert for ${item} in ${category}: ${quantity} left`)
            }
        }
    }
}

function searchItem(name) {
    for(category in inventory) {
        for (item in inventory[category]) {
            if(item.toLowerCase().includes(name.toLowerCase())) {
                console.log(`FOUND ${item} in ${category}:`)
            }
        }
    }
}

console.log(inventory);
addItem('fruits', 'apple', 20)
console.log(inventory);

let n;
for(let i = 0; i < 100; i++) {
    n = i;
}

addItem('fruits', 'pineapple', 30, 10) // prideda nauja preke ir treshholda i objecta
console.log(inventory);

function showLogs() {
    console.table(logs);
}
showLogs();
checkLowStock();        // isveda kiek liko
addItem('fruits', 'banana', 8)
console.log('-----------');
checkLowStock();
searchItem('banana');


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log(arr1.pop());
console.log(arr2.unshift(arr1.pop()));
console.log(arr2);

