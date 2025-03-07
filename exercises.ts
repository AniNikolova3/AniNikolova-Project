// Exercise One
// Step One: Declare Typescript interface "Country"
// and add types name: string, capital: string, population: number, language: string
interface Country {
  name: string;
  capital: string;
  population: number;
  language: string;
}

// Step Two: Declare an object "country" with properties following "Country" interface

const firstCountry: Country = {
  name: "Bulgaria",
  capital: "Sofia",
  language: "bulgarian",
  population: 7000000,
};

const secondCountry: Country = {
  name: "Italy",
  capital: "Rome",
  language: "italian",
  population: 59000000,
};

// Step Three: Declare a function "displayCountryDetails" which receives "country" object and
//displays the details for it

function displayCountryDetails(countryObj: Country) {
  return `the capital of ${countryObj.name} is ${countryObj.capital}. 
  The official language is ${countryObj.language} and population of ${countryObj.population} people.`;
  //return country.population > 700000 ? 10 : "Less than";
}

const detailsAboutBulgaria = displayCountryDetails(firstCountry);
const detailsAboutItaly = displayCountryDetails(secondCountry);
//console.log(detailsAboutBulgaria);
//console.log(detailsAboutBulgaria, detailsAboutItaly);

//

// Exercise Two
// Step One: Declare TypeScript interface "Student"
// Add propertis id: number, name: string, age: number, grade: number
interface Student {
  id: number;
  name: string;
  age: number;
  grade: number;
}

// Step Two: Declare an object with properties following interface "Student"
const studentOne: Student = {
  id: 3,
  name: "Maggie",
  age: 23,
  grade: 6,
};

const studentTwo: Student = { id: 5, name: "Alex", age: 20, grade: 6 };

const studentThree: Student = { id: 1, name: "Ani", age: 18, grade: 6 };

// Step Three: Declare array "students" with objects of type "Student"
let studentsArr: Student[] = [studentOne, studentTwo, studentThree];

//students.map((student) => (student.grade = 4)); //prezapisvame dannite ot tipa Student
//students.map((student) => { if (student.name === "Alex") {student.grade = 3;}}); //prezapisvame dannite na opredelen obekt (2)

console.log("students", studentsArr);

// Step Four: Declare a function "getStudents" and pass the array students as parameter
// return only students name as a result

function getStudents(students: Student[]): string[] {
  return students.map((student) => student.name);
}

const studentsNames = getStudents(studentsArr);

console.log("studentsNames", studentsNames);

//

//Exercise Three
// Declare a function "sortStudents" that receive students array result from the previous exercise
// and sort them by ascending

function sortStudents(students: Student[]): any[] {
  return students.sort((a, b) =>
    a.name === b.name ? 0 : a.name < b.name ? -1 : 1
  );
}

const studentsSort = sortStudents(studentsArr);

console.log("Ex.4", studentsSort);
