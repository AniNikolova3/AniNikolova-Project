//Arrays
let numbersArray: number[] = [1, 2, 3, 4];
let stringAndNumArr: (number | string)[] = [1, "Pesho", "Gosho", 34];

let fruits: string[] = ["Apple", "Banana", "Pear", "Grape"];
let firstEl: string = fruits[1];
let secondEl: string = fruits[3];
//console.log("firstEl", firstEl);
//console.log("secondEl", secondEl);

fruits.push("Mango");
//console.log("fruits", fruits);

numbersArray.pop();

fruits.shift();
//console.log("fruits", fruits);

numbersArray.unshift(5);
//console.log("numbersArray", numbersArray);

let multiplyNumbers = numbersArray.map((element: number) => element * 2);

let multiplySpecialNumbers = numbersArray.map((element: number) => {
    if (element > 2) {
        return element * 2;
    } else {
        return element
    }
});

//console.log("multiplySpecialNumbbers", multiplySpecialNumbers);

let filterNumsArray = numbersArray.filter((element) => element > 2);

