/* EXERCISE 1
 Write a piece of code to find the largest of  given two integers
*/

let num1 = 20;
let num2 = 4;

if (num1 > num2){
  console.log(num1);
}else if (num1 < num2){
  console.log(num2);
}else{
  console.log("error");
}

/* EXERCISE 2
  Write a piece of code to check: if  given an integer is NOT equal to 5 then display " not equal"
*/

let num3 = 3
if (num3 !== 5){
  console.log("not equal to 5")
}else{
  console.log("equal to 5")
}

/* EXERCISE 2
  Write a piece of code to check: if  given an integer is  divisible  by  5 then display "divisible by 5" (search for modulo operator)
*/

let num4 = 12;

if(num4 % 5 ===0){
  console.log("Divisible by 5")
}else{
  console.log("not divisible by 5")
}

/* EXERCISE 3
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

let num5 = 8;
let num6 = 7;

if(num5 === 8 || num6 === 8){
  console.log("One of them is equal to 8");
}else if(num5 + num6 === 8){
  console.log("the sum of them is equal to 8");
}else if(num5 - num6 === 8 || num6 - num5 === 8){
  console.log("The subtraction of them is equal to 8");
}else{
  console.log("Not equal to 8");
}

/* EXERCISE 4
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCart= 43;

if(totalShoppingCart > 50){
  console.log(totalShoppingCart);
}else{
  console.log(totalShoppingCart + 10);
}

/* EXERCISE 5
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

let totalShoppingCart2= 43;

if(totalShoppingCart2 > 50){
  console.log(totalShoppingCart2 * 0.8);
}else{
  console.log(totalShoppingCart2 * 0.8 + 10);
}

/* EXERCISE 6
Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

var a = 29;
var b = 52;
var c = -1;

if (a > b && a > c) {
  if (b > c) {
    console.log(a + ", " + b + ", " + c);
  } else {
    console.log(a + ", " + c + ", " + b);
  }
} else if (b > a && b > c) {
  if (a > c) {
    console.log(b + ", " + a + ", " + c);
  } else {
    console.log(b + ", " + c + ", " + a);
  }
} else if (c > a && c > b) {
  if (a > b) {
    console.log(c + ", " + a + ", " + b);
  } else {
    console.log(c + ", " + b + ", " + a);
  }
}


/* EXERCISE 7
Write a piece of code for checking if a given value is a integer or not. (search for 'typeof')
*/

let num7 = 58;
if(typeof num7 === "number"){
  console.log("integer");
}else{
  console.log("Not an integer");
}

/* EXERCISE 8
 Write a piece of code for checking if a given number is even or odd. (search for modulo operator)
*/

let num8 = 8;
if (num8 % 2 === 0){
  console.log("Even");
}else{
  console.log("Odd");
}

/* EXERCISE 9
Change the order of logic in the code so that it will return the correct statements in all cases.
let val = 7
if (val < 10) {
    console.log("Less than 10");
  } else if (val < 5) {
     console.log("Less than 5");
  } else {
    console.log("Greater than or equal to 10");
  }
*/

let val = 7;
if (val < 5){
  console.log("Less than 5");
}else if(val < 10){
  console.log("Less than 10");
}else{
  console.log("Greater than 10");
}

/*
EXERCISE 10
Write chained if/else if statements to fulfill the following conditions:
num < 5 - display Tiny
num < 10 - display Small
num < 15 - display Medium
num < 20 - display Large
num >= 20 - display Huge
*/

let num9 = 9;
if(nun9 < 5){
  console.log("Tiny");
}else if(num9 < 10){
  console.log("Small");
}else if(num9 < 15){
  console.log("Medium");
}else if (num9 < 20){
  console.log("Large");
}else{
  console.log("Huge");
}

/*  EXERCISE 11
Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

let isMale =true;

console.log(isMale ? "male" : "female");

/* EXERCISE 12
Display the numbers 0 through 5 (inclusive) in acesnding order using a while loop.
*/

let i =0;

while (i<5){
  console.log(i);
  i++
}

/* EXERCISE 13
Display the numbers 0 through 10 (inclusive) in acesnding order using a for loop.
*/

for ( let i = 0; i <10; i++){
  console.log(i);
}

/* EXERCISE 14
Display the numbers 0 through 10 (inclusive) in acesnding order  but skip displaying 3 and 8.
*/
for ( let i = 0; i <10; i++){
  if(i !==3 && i !== 8){
    console.log(i);
  }
}

/* EXERCISE 15
 Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen
*/

for ( let i = 0; i <15; i++){
  if(i % 2 === 0){
    console.log(i, "Even");
  }else{
    console.log(i, "Odd");
  }
}

/* EXERCISE 16
  Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz
 */
  for ( let i = 1; i <100; i++){
    if(i % 3 === 0 && i % 5 === 0){
      console.log("FizzBuzz");
    }else if(i % 3 === 0){
      console.log("Fizz")
    }else if(i % 5 === 0){
      console.log("Buzz")
    }else{
      console.log(i)
    }
  }


/* EXERCISE 17
  Write a piece of code to check the day of the week .  Usie  SWITCH - CASE  and given "day" variable with range from 1 to 7. 
  For example: if day value is equal to 1 display "Monday", if day value is equal to 3 display "Wednesday"

  */

let day = 1;

switch (day){
  case 1: day = console.log("Monday");
  break;
  case 2: day = console.log("Tuesday");
  break;
  case 3: day = console.log("Wednesday");
  break;
  case 4: day = cnsole.log("Thursday");
  break;
  case 5: day = console.log("Friday");
  break;
  case 6: day = console.log("Saturday");
  break;
  case 7: day = console.log("Sunday");
  break;
  default: console.log("Error");
  break;

}
