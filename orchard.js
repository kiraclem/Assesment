///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]


// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
let totalAcres = 0

for (let i = 0; i < 7; i++) {
    totalAcres += fujiAcres[i] 
    // this is taking the fujiAcres value and adding it to the sum each time.
    totalAcres += galaAcres[i]
    totalAcres += pinkAcres[i]
    //essentailly since all these values loop, all the acres in the first slot get added together, then the second, then the third, and so on.
}
console.log(totalAcres)

console.log("======================")
// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

averageDailyAcres = totalAcres / 7

//We are taking the total acre amount and dividing it by how many days there are.
//and setting it equal to our average daily


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

while (acresLeft > 0) {
    days += 1
    acresLeft -= averageDailyAcres
    // essentailly subtracts how many acres left by the daily average of acres picked and adds on a day each time
    // this allows you to see roughly how many days it will take to pick all the apples
}
console.log(days)

console.log("======================")
// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE
let fujiTons = []
let galaTons = []
let pinkTons = []

for (let i = 0; i < 7; i++) {
  let ftons = 6.5 * fujiAcres[i] 
   fujiTons.push(ftons)
   // cycles through each day and takes the acres and multiplies it by the amount of apples.
   // then puts that amount into a push function every time, creating the new array
}

for (let i = 0; i < 7; i++) {
    let gtons = 6.5 * galaAcres[i] 
     galaTons.push(gtons)
     // does same thing as abouve but for gala instead of fuji
}

for (let i = 0; i < 7; i++) {
    let ptons = 6.5 * pinkAcres[i] 
     pinkTons.push(ptons)
     // does same thing as abouve but for pink instead of fuji
}

console.log(fujiTons)
console.log(galaTons)
console.log(pinkTons)

console.log("======================")


// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

 let fujiPounds = 0
 let galaPounds = 0
 let pinkPounds = 0

let totalfTons = 0 
let totalgTons = 0
let totalpTons = 0 

for (let i = 0; i < 7; i++) {
    totalfTons += fujiTons[i] 
}

for (let i = 0; i < 7; i++) {
    totalgTons += galaTons[i]
}
    

for (let i = 0; i < 7; i++) {  
    totalpTons += pinkTons[i]
}
//adds up all of the tons together for each apple type

let totalFpound = totalfTons * 2000
let totalGpound = totalgTons * 2000
let totalPpound = totalpTons * 2000

//multiplies the tons by the amount of pounds in a ton to get the pound amount per apple. 

console.log(totalFpound, totalGpound, totalPpound)
console.log("======================")


// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 

*/

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55

// CODE HERE


let fujiProfit = fujiPrice * totalFpound
let galaProfit = galaPrice * totalGpound
let pinkProfit = pinkPrice * totalPpound

console.log(`$${fujiProfit}, $${galaProfit}, $${pinkProfit}`)

console.log("======================")

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

let totalProfit = fujiProfit + galaProfit + pinkProfit 
console.log(`$${totalProfit}`)

//adding all the profits from each type of apple together to get the total profit.