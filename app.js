const myAge = 25; /*This is my age that will be converted to dog years*/
let earlyYears = 2; /*A variable set to 2 has been created*/
earlyYears *= 10.5;
let laterYears = myAge - 2; /*Calculation of the rest of the dog years after the first 2*/
laterYears *= 4; /*Calculation of the remainder of the dog years*/
console.log(earlyYears);
console.log(laterYears);
let myAgeInDogYears = earlyYears + laterYears; /*Get the summation of the total age in dog years*/

let myName = "Isaac Wanyoike".toLowerCase(); /*Changing my name into a lowercase string*/
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

