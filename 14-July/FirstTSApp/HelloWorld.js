var msg = "Hello World"; // Explicit
// let msg = "Hello World"; //Implicit
var num = 123; // Explicit
// let num = 123; //Implicit
var flag = true; // Explicit
// let flag = true; //Implicit
var random = "hello"; // Explicit
random = 123; //Implicit
var array1 = ["mark", "julie", "adam"]; // Explicit
// const array1 = ["mark", "julie", "adam"]; //Implicit
array1.push("Nick");
var array2 = ["Mark"]; // Immutable due to "readonly" keyword
//must define the type as well else it will throw an error. (Explicit only)
var multiDataType = ["", 123, "", true];
// let multiDataType = ["", 123, "", true]; //Implicit
var emp1 = {
    name: "Nick",
    age: 22,
    address: "New Jersy"
};
var Months;
(function (Months) {
    Months[Months["Jan"] = -1] = "Jan";
    Months[Months["Feb"] = 0] = "Feb";
    Months[Months["Mar"] = 1] = "Mar";
    Months[Months["Apr"] = 2] = "Apr";
    Months[Months["May"] = 3] = "May";
    Months[Months["Jun"] = 4] = "Jun";
    Months[Months["Jul"] = 5] = "Jul";
    Months[Months["Aug"] = 6] = "Aug";
    Months[Months["Sep"] = 7] = "Sep";
    Months[Months["Oct"] = 8] = "Oct";
    Months[Months["Nov"] = 9] = "Nov";
    Months[Months["Dec"] = 10] = "Dec";
})(Months || (Months = {}));
var employee1 = {
    name: "Mark",
    age: 26,
    address: "California",
    worksAt: "Google",
    salary: 10000
};
console.log(Months.Feb);
console.log(msg);
console.log(num);
console.log(flag);
console.log(random);
console.log(array1);
console.log(array2);
console.log(multiDataType);
console.log(emp1);
console.log(employee1);
// console.error(msg);
