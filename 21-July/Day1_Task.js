// ******************************************  LEVEL - 1 *******************************
// 1. Declare two variables: admin and name.
let admin, name;
name = "John";
admin = name;
// alert(admin)


// 2. Create constants for colors in web (hexadecimal) format.
const white = "#FFFFFF";
const silver = "#C0C0C0";
const grey = "#808080";
const black = "#000000"
const red = "#FF0000"
const maroon = "#800000";
const yellow = "#FFFF00";
const olive = "#808000";
const lime = "#00FF00";
const green = "#008000";
const aqua = "#00FFFF";
const teal = "#008080";
const blue = "#0000FF";
const navy = "#000080";
const fuchsia = "#FF00FF";
const purple = "#800080";

console.log(white);
console.log(silver);

// 3. Write a program, using the variable declarations above, that displays the data type foreach variable.
console.log(typeof(admin));
console.log(typeof(white));


// 4. What will be the result for these expressions? 

// 5 > 4  --> true
// "apple" > "pineapple" --> false
// "2" > "12" --> true
// undefined == null --> true
// undefined === null --> false


// ******************************************  LEVEL - 2 *******************************

/* 1. Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again. */

// let num = 0;
// while(num < 100) {
//     num =  prompt("Enter a number greater than 100");
//     if(num == null) break;
// }

/*2. Using if..else, write the code which gets a number via prompt and then shows in alert:
1, if the value is greater than zero,
-1, if less than zero,
0, if equals zero.
In this task we assume that the input is always a number. 
*/

let num1 = prompt("Enter a number");
if(num1 > 0) alert(1);
else if(num1 < 0) alert(-1);
else alert(0);


/*3. Write a function min(a,b) which returns the least of two numbers a and b.
For instance:
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
*/

function min(a, b) {
    if(a < b) return  a;
    else return b;
}
console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));


// ******************************************  LEVEL - 3 *******************************

/* 1.2. Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with
values higher or equal to a and lower or equal to b and return a result as an array.
For instance:
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (matching values)
*/

function filterRange(arr, a, b) {
    let resArr = [];
    arr.forEach(element => {
        if(element >= a && element < b) {
            resArr.push(element)
        }
    });
    return resArr;
}
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert(filtered);