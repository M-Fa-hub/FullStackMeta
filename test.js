//console.log("Hello World")

/*
var score = 45;

if (score > 90) {
    console.log("A+")
} else if (score > 60 && score<=90) {
    console.log("B")
} else if (score > 50 && score <= 60){
    console.log("B-")
} else {
    console.log("Failed")
}

*/

/*
var position = "fifth"

switch (position){
    case "first":
        console.log("Gold");
        break
    case "second":
        console.log("Silver");
        break;
    case "third":
        console.log("Bronze");
        break;
    default:
        console.log("No medal");
}
*/

/*
for (let i = 1; i<10; i++) {
    if (i%2 == 0){
        console.log(i, "even")
    } else{
        console.log(i, "odd")
    }
}

*/

// var day = "sunday"

// switch(day){
//     case "saturday":
//         console.log("rest");
//         break;
//     case "sunday":
//         console.log("rest");
//         break;
//     case "monday":
//         console.log("Do something");
//         break;
//     case "tuesday":
//         console.log("Do something");
//         break;
//     case "wednesday":
//         console.log("Do something");
//         break;
//     case "thursday":
//         console.log("Do something");
//         break;
//     case "friday":
//         console.log("Do something");
//         break;
// }

// var i = 0;
// while (i < 20){
//     console.log("count:", i);
//     i += 1
// }

// var cubes = 'ABCDEFG';
// //styling console output using CSS with a %c format specifier
// for (var i = 0; i < cubes.length; i++) {
//     var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
//     console.log("%c" + cubes[i], styles)
// }

// console.log(!false)

// function myfun(a, b) {
//     console.log(a + b)
// }

// function addArr(arr){
//     console.log("the sum is: ", arr[0] + arr[1])
// }

// var arrd = [3,5]
// addArr(arrd)

// var list= [2,5, "sdf"]
// console.log(list[2])


// obj = {}

// obj.name = "Ahmad"
// obj.age = 23
// obj["addres"] = "Halle, no. 34"

// console.log(obj)
// var car = {};

// car.color = "red";

// //add a method to the car object so that it can be called as car.turnkey()
// car.turnKey = function df() { 
//   return 'engine running'; 
// }

// console.log(car)

// try {
//     console.log(c+d)
// } catch {
//    console.log("an error") 
// }

// function divide(a, b) {
//     if (b === 0) {
//       throw new Error("Division by zero is not allowed.");
//     }
//     return a / b;
//   }
  
//   try {
//     console.log(divide(5, 0));
//   } catch (error) {
//     console.error(error.message); // Division by zero is not allowed.
//   }

// function addTwoNums(a, b) {
//     try {
//         if (typeof a !== "number" || typeof b !== "number") {
//             throw new Error("Both arguments must be numbers");
//         }
//         console.log(a + b);
//     } catch (err) {
//         console.error("Error:", err.message);
//         throw err; // don't just swallow it
//     }
// }

// // Test the function with numbers
// addTwoNums(5, 6);

// // Test the function with invalid input (this will throw an error)
// try {
//     addTwoNums(5, "6");
// } catch (error) {
//     console.log("Caught error:", error.message);
// }
// Function to double a number

// function addTwoNums(a, b) {
//     console.log(a + b)
// }

// function randomNum() {
//     return Math.floor((Math.random() * 10) + 1);
// }
// function specificNum() { return 42 };

// var useRandom = true;

// var getNumber;

// if(useRandom) {
//     getNumber = randomNum
// } else {
//     getNumber = specificNum
// }

// addTwoNums(getNumber(), getNumber())


// function addTwoNumss(getNumber1, getNumber2) {
//     console.log(getNumber1() + getNumber2());
// }

// addTwoNumss(specificNum, specificNum); // returned number is 84
// addTwoNumss(specificNum, randomNum); // returned number is 42 + some random number



class liveBeings{
    constructor(breath = true, eat = true) {
        this.breath = breath;
        this.eat = eat;
    }
    reproduce(){
        console.log("it can reproduce")
    }

    dies(){
        console.log("it dies")
    }   
}


class Animal extends liveBeings{
    constructor(name, food) {
        super(true, true);
        this.name = name;
        this.food = food;
    }
    eating(){
        console.log(`${this.name} is eating ${this.food}`)
    }
}


// Usage
const cat = new Animal("Cat", "meat");
cat.eating();        // Cat is eating meat
cat.reproduce();     // It can reproduce

const shark = new Animal("Shark", "fish");
shark.eating();      // Shark is eating fish

const being = new liveBeings();
being.reproduce();   // It can reproduce
being.dies();        // It dies