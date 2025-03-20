//Ex.1
interface Person {
    name: string;
    lastName: string;
    age: number;
    email: string;
    phoneNumber: number;
}

//Ex. 2
interface PersonInfo extends Person {
    country?: string;
    greeting?: () => string;
}

//Ex.3
const person1: Person = {
    name: "Ani",
    lastName: "Nikolova",
    age: 34,
    email: "ani.nikolova03@gmail.com",
    phoneNumber: 123456789,
}

console.log("Person", person1)

//Ex.4
const person2: PersonInfo = {
    name: "Ani",
    lastName: "Nikolova",
    age: 34,
    email: "ani.nikolova03@gmail.com",
    phoneNumber: 123456789,
    country: "BG",
    greeting: function() {
        return "Welcome to our Team!"
    }
}

console.log("Person2", person2);
