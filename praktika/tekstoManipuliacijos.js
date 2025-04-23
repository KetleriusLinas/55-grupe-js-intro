// 1. Count how many vowels are in a string
function countVowels (str) {
    const vowels = 'aeiouyAEIOUY'; // balsiu tikrinimas, ju priskirimas i const
    let count = 0;
for (let char of str) {
    if (vowels.includes(char))  { // tikrina ar yra tekste sios raides
    count ++;
    }
}
    return count++;
}
console.log(countVowels('Labas vakaras briedi'));

// 2. Reverse string

// function reverseString (str) {
//     const raides = str.split (''); // issplitino zodi po viena raide
//     let atvirkstinis = '';
//     console.log(raides);
//     for (let i = raides.length - 1; i >= 0; i --) {
//         atvirkstinis +=raides[i];
//     }
    
//     return atvirkstinis;
// }
// console.log(reverseString('Ananasas'));


function reverseString (str) {
    return str.split('')
    .reverse()
    .join('');
}
console.log(reverseString('Ananasas'));

// 3. Capitalize the first letter of each word in a sentence

function capitalizeWords (sentence) {
    return sentence.split(' ') // splitina sakini per trapa
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // ateina issplitintas zodis, zodzio raide 0 (nulineje vietoje) ir 
    // pirmaja raide padidinus sudeda su likusiu zodziu ([1]) nuo 1 elemento vietos 0 elementas + 1..
    .join(' ') // tarpeliu sujungem zodzius
    
}
console.log(capitalizeWords('tu esi vienas zmogus ir pats sau fainas'));

// 4. Check if a string is a palindrome
function isPalindrome(str) { // zodis is abieju pusiu tas pats????? - nesupratau
    const cleaned = str.toLowerCase();
    // if (cleaned === cleaned.split('').reverse().join('')) { // jei zodis lygus apverstam zodziui
    //     return true;
    // } else {
    //     return false;
    // }
    return cleaned === cleaned.split('').reverse().join('')
}
console.log(isPalindrome('eye'));
console.log(isPalindrome('eyes'));

// 5. Replace all spaces in a string with underscores
function replaceSpaces (str) {
    return str.replaceAll(' ', '_')
}
console.log(replaceSpaces('didelis namas yra ne namas o palapine'));

// 6. Count how many times a specific character appears in a string
function countChar(str, char) {
    let count = 0;
    for(let c of str) {
        if (c === char) {
            count++;
        }
    }
    return count;
}
console.log(countChar('ravajavapalala', 'a'));

// 7. Remove all digits from a string

function removeDigits (str) {
    return str.replace(/[0-9]/g, ''); // replace'ina visus skaicius [0-9] --- /g reiskia global (visam sakiny vadinas), be /g pakeistu tik pirma
}
console.log(removeDigits('vienas1 du2 trys3'));

// 8. Extract only letters from a string

function onlyLetters(str) {
    return str.replace(/[^a-zA-Z]/g, ''); // istrina visus simbolius apart didziuju ir mazuju raidziu
}
console.log(onlyLetters('Apelsinas1234!stai ir obuolys'));

// 9. Find the longest word in a sentence
console.log('-----kazkas neveikia------');

function longestWord (sentence) {
    const zodziai = sentence.split(' ');
    let maxLength = 0;
    let zodziaiMax = '';
        for (let zodis in zodziai) {
            zodziai[zodis] = zodziai[zodis].replace(/[^a-zA-Z]/g, '')
            if (zodziai[zodis].length > maxLength) {
                zodziaiMax = zodziai[zodis];
                maxLength = zodziai[zodis].length;
            }
        }
        return zodziaiMax + ' ' + maxLength;
}
console.log(longestWord('Labas Lietuva, kaip tau sekasi?'));
console.log('-----kazkas neveikia------');


// 11. Replace all vowels in a strng with '*'
function maskVowels (str) {
    return str.replaceAll(/[aeiouyAEIOUY]/g,'*') // balses (tas raides kurios [] pakeite i *)
}
console.log(maskVowels('Apelsinas'));


// 12. Trim hitespace from both sides of a string

function trimString (str) {
    return str.trim(); // nutrima spacus sonuose, per vidury jei esi pridares ne
}
console.log(trimString('     ka tu     ?    '));

// 13. convert a sentence to kebab-case
function toKebabCase (str) {
    return str.toLowerCase().replaceAll(/ /g, '_')
}
console.log(toKebabCase('vienas is nd darbu yra pailseti'));

// 16. count how many words are in a sentece

function wordCount(sentece) {
    return sentece.trim().split(' ').length;
}
console.log(wordCount('ka tu vabale vienas du trys'));

// 17. Repeat a string n times 

function toCamelCase (str) {
    const words = str.split(' '); //atskiriame zodzius
    let cCase = '';
    for (let i = 0; i < words.length; i++) {
        if (i === 0) {
            cCase += words[i].toLowerCase();
        } else {
            cCase += words[i].charAt(0).toUpperCase(); // zodzio pirmoji raide padaroma didzioji
            cCase += words[i].slice(1).toLowerCase(); // sliceinam nuo antros raides ir visas likusias keiciam mazosiom raidem
        }
        return cCase;
    }
}
console.log(toCamelCase('vienas is js isrbas'));
