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