
//Ex.1
let ToDoList: string[] = ["Cooking", "Cleaning", "Work"];
ToDoList.push("Homework");
console.log("Ex-1 To-Do List", ToDoList);

//Ex.2
let numArray: number[] = [5, 12, 17, 25, 44, 65];
numArray.shift()
console.log("Ex.2", numArray);

//Ex.3
let numbers = numArray.map((element: number) => element * 2);
console.log("Ex.3", numbers);

//Ex.4
let newNumbers: number[] = [3, 7, 1, 9, 12, 4];
let filterNewNumbers = newNumbers.filter((element) => element > 5);
console.log("Ex.4", filterNewNumbers);

//Ex.5
let exFiveNums: number[] = [9, 3, 7, 2, 8, 5];
let sortedNumsArray = exFiveNums.sort();
console.log("Ex.5", sortedNumsArray);

//Ex.6
let exSixFruits: string[] = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let newFruitsArray = exSixFruits.slice(3, 5);
console.log("Ex.6", newFruitsArray);

//Ex.7
let elementsArray: string[] = ['car', 'bike', 'bus', 'train', 'boat'];
let newElementsArray = elementsArray.splice(1,2);
console.log("Ex.7", elementsArray);

//Ex.8
function findLargest (
    a: number,
    b: number,
    c: number
): number { 
    if (a>=b && a >=c)
        return a;
    else if (b>=a && b>=c)
        return b;
    else (c>=a && c>=b)
        return c;
}
console.log("Ex.8", findLargest (10,795,99));

//Ex.9
function convertToCentimeters (
    inch: number = 20,
    ): number{
    return inch*2.54
    }

console.log("Ex.9", convertToCentimeters());
console.log("Ex.9", convertToCentimeters(10));

//Ex.10
function calculateArea (
    width: number,
    height?: number
): number {
    if (height == null)
        return width*width;
    else (height != 0)
        return height*width;
}
console.log("Ex.10", calculateArea(10,11))