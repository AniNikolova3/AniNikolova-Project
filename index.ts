// let vs const
let exnumber: number = 5;
exnumber =10;

const exmessage: string = "Welcome";

// string
let welcomeMessage: string = "Hello, Peter!";
let firstName: string ="Ani";

let welcomeMessageLenght: number = welcomeMessage.length;
console.log("welcomeMessageLenght",welcomeMessageLenght);

//string interpolation
let welcomeMessageDetails: string = `My welcome message lenght is ${welcomeMessageLenght}`;
console.log(welcomeMessageDetails);
let userWelcomeMessage: string = `Welcome, ${firstName}`;
console.log(userWelcomeMessage);

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
console.log("isLower", isLower);
console.log("isGreater", isGreater);

let isEqual: boolean = firstNumber === secondNumber;
let isGreaterOrEqual: boolean = firstNumber >= secondNumber;
let isLowerOrEqual: boolean = firstNumber <= secondNumber;

let areNumbersEqualTo: boolean = 5 === firstNumber && 10 ===secondNumber;
console.log("areNumbersEqualTo", areNumbersEqualTo)

let isAnyNumberEqualTo: boolean = 6 === firstNumber || 10 === secondNumber;

//Any
let stringValue: any = "Hello";
stringValue = 10;
stringValue = 10 === 10;
stringValue = [10,20,30];

console.log("stringValue", stringValue);