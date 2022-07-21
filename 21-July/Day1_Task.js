// ******************************************  LEVEL - 1 *******************************
// 1. Declare two variables: admin and name.
let admin, name;
name = "John";
admin = name;
alert(admin)


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

let num = 0;
while(num < 100) {
    num =  prompt("Enter a number greater than 100");
    if(num == null) break;
}

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

/* 1. Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with
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


// ******************************************  LEVEL - 4 *******************************

/*1.Write the function camelize(str) that changes dash-separated words like “my-shortstring” into camel-cased “myShortString”.
That is: removes all dashes, each word after dash becomes uppercased.
Examples:
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Hint: use split to split the string into an array, transform it and join back.
*/

function camelize(string) {
    let newArr = string.split("-");
    let str = newArr[0];
    for (let i = 1; i < newArr.length; i++) {
        str += newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1);
    }
    return str;
}
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

/* 2. Create a function unique_elements(arr) that should return an array with unique items
of arr.
For instance:
function unique_elements(arr) {
    your code
}
let strings = ["React Js", "JavaScript", "React Js", "JavaScript",
 "JavaScript", "JavaScript", "React Js", "React Js"
];
alert( unique(strings) ); // React Js, JavaScript*/

function unique_elements(arr) {
    let newArr = [];
    arr.forEach(element => {
        if(!newArr.find((item)=>item==element)) {
            newArr.push(element);
        }
    });
    return newArr;       
}

let strings = ["React Js", "JavaScript", "React Js", "JavaScript",
 "JavaScript", "JavaScript", "React Js", "React Js"
];
alert( unique_elements(strings) );


/* 3. Create a function truncate(str, maxlength) that checks the length of the str and, if it
exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its
length equal to maxlength.
The result of the function should be the truncated (if needed) string.
For instance:
truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"
truncate("Hi everyone!", 20) = "Hi everyone!"
*/

function truncate(str, maxlength) {
    let newStr;
    if(str.length <= maxlength) {
        newStr = str;
    } else {
        newStr = str.slice(0, maxlength-1);
        // console.log(newStr);
        newStr += "...";
    }
    return newStr;
}
console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));