/* You're tasked with coming up with some code that will check if 
the currentTime variable is between 9 a.m. and 5 p.m. 
The code needs to console.log true if currentTime > 9 and if currentTime < 17.*/

/* Pseudo code
1- Get the current time in hours.
2- Check if the current time is greater than 9 and less than 17.
3- If the condition is met, then console.log true.
Otherwise, console.log false.
*/

let currentTime = 4;

if (currentTime < 9 || currentTime > 17) {
    console.log(true)
} else {
    console.log(false);}

// console.log(false && false)

let petHungry = true
console.log("Feeding the pet")
console.log("Pet is hungry: ", petHungry)
console.log(petHungry)

console.log(365 + "days")
console.log("days" + 365)

let overTime = 1
overTime += 2
overTime += 2
overTime += 1
overTime += 3
console.log(overTime)

let longString = " "
longString += " Once"
longString += " Upon"
longString += " a"
longString += " time"
longString += "..."
console.log(longString)

let num1 = 2
let num2 = 5
let test1 = num1 % 2
let test2 = num2 % 2
result1 = test1 == 0;
result2 = test2 == 0;
console.log("Is", num1, "an even number?", result1)
console.log("Is", num2, "an even number?", result2)

for (let i = 1; i < 2; i++){
    // console.log(year)
    for (let j = 0; j <= 10; j++){
        console.log(i, "times ", j, "=", i*j)
    }
}


for (let i = 100; i > 10; i = i - 10){
    for (let j = 10; j > 4; j = j - 5)
        console.log(i+ " divided by " +j+ " equals " +i/j)
}


var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}