// let vs const
let exnumber: number = 5;
exnumber =10;

const exmessage: string = "Welcome";

// string
let welcomeMessage: string = "Hello, Peter!";
let firstName: string ="Ani";

let welcomeMessageLenght: number = welcomeMessage.length;
//console.log("welcomeMessageLenght",welcomeMessageLenght);

//string interpolation
let welcomeMessageDetails: string = `My welcome message lenght is ${welcomeMessageLenght}`;
//console.log(welcomeMessageDetails);
let userWelcomeMessage: string = `Welcome, ${firstName}`;
//console.log(userWelcomeMessage);

// Number
let firstNumber: number = 5;
let secondNumber: number = 10;

//number math operations
let add: number = firstNumber + secondNumber;
let substract: number = secondNumber - firstNumber;
let multiply: number = firstNumber * secondNumber;
let divide: number =  secondNumber/ firstNumber;

// boolean (true/false)
let isGreater: boolean = firstNumber > secondNumber;
let isLower: boolean = firstNumber < secondNumber;
//console.log("isLower", isLower);
//console.log("isGreater", isGreater);

let isEqual: boolean = firstNumber === secondNumber;
let isGreaterOrEqual: boolean = firstNumber >= secondNumber;
let isLowerOrEqual: boolean = firstNumber <= secondNumber;

let areNumbersEqualTo: boolean = 5 === firstNumber && 10 ===secondNumber;
//console.log("areNumbersEqualTo", areNumbersEqualTo)

let isAnyNumberEqualTo: boolean = 6 === firstNumber || 10 === secondNumber;

//Any
let stringValue: any = "Hello";
stringValue = 10;
stringValue = 10 === 10;
stringValue = [10,20,30];

//console.log("stringValue", stringValue);

// Ternary operator
const isPositiveNum: string =
  5 > 0 ? "The number is positive." : "The number is negative";

  console.log(typeof isPositiveNum)

const age: number = 30;
const myName: string = "Pesho";

const personDescription =
 age < 40 
? `${myName} is younger than 40. Hi is ${age} years old.`
: `${myName} is older than 40. Hi is ${age} years old.`;

//console.log("personDescription", personDescription);

const personName = `His name is "${myName}"`;
//console.log("personName", personName);

// If-Else Statement

if (age < 40) {
 console.log('Age are lower than 40')
} else {
 console.log('Age are greater ther than 40')
}

const p_num: number = 50;

if (p_num <= 10) {
    console.log("The number is lower or equal to 10.");
} else if (p_num > 100) {
    console.log("The number is greater than 100.");
} else if (p_num > 80) {
    console.log("The number is greater than 80 and less than 100.");
} else {
    console.log("The number is between 10 and 100.");
}

//Type Alias
type PersonInfoType = string | number;

const personNameInf: PersonInfoType = "Ivan";
const personAgeInf: PersonInfoType = 25;
