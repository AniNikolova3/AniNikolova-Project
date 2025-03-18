//for...of loop

let fruits1: string[] = ["Apple", "Banana", "Peach", "Watermelon"];

//for .. of loop access only array values
for (let fruit of fruits1) {
  console.log(`fruit is ${fruit}`);
}

//for...of over array of numbers
let numbers: number[] = [10, 20, 30, 40];

// for(let number of numbers) {
//     console.log(`${number} plus 5 is ${number + 5}`)
// }

for (let number of numbers) {
  if (number > 20) {
    console.log(`Number is ${number}`);
  } else {
    console.log(`${number} plus 5 is ${number + 5}`);
  }
}

//for..of over string
let message: string = "Hello world!";
// let welcomeMessage:string = "welcome t Pesho! How t are you t?"
// let modifiedMessage = welcomeMessage.replace("t", "")
// console.log(modifiedMessage)

// for (let letter of message) {
//   console.log("Leter ", letter);
// }

for (let letter of message) {
  if (letter === "o") {
    console.log(letter.replace("o", "@"));
  } else {
    console.log(letter);
  }
}

//for..in over object

interface Student {
  name: string;
  lastName: string;
  age: number;
}
const student: Student = { name: "Pesho", lastName: "Petrov", age: 20 };

for (let key in student) {
  //accessing object value by passing object key as keyof Student
  console.log(`${key} = ${student[key as keyof Student]}`);
}

//for..in over array
let numArr: number[] = [35, 25, 45, 50];

for (let index in numArr) {
  //accessing array value by passing array index
  console.log(`${index} = ${numArr[index]}`);
}

//for loop
for (let i = 0; i <= 5; i++) {
  console.log(`Index ${i}`);
}

//for loop over array
let numberArr: number[] = [35, 25, 45, 50, 35, 25, 45, 50, 45, 50];

for (let i = 0; i < numbersArray.length; i++) {
  console.log(numberArr[i]);
}

for (let i = 0; i < numbersArray.length; i++) {
  if (numberArr[i] <= 25) {
    console.log(numberArr[i]);
  } else {
    console.log(numberArr[i] / 2);
  }
}

//for loop incrementation
for (let i = 0; i <= 9; i++) {
  console.log(i);
}

//for loop
for (let i = 1; i <= 10; i += 2) {
  console.log(i);
}

for (let i = 30; i <= 60; i++) {
  console.log(i);
}

//decrementtation
for (let i = 30; i >= 0; i--) {
  console.log(i);
}

export {};
