let msg:string = "Hello World"; // Explicit
// let msg = "Hello World"; //Implicit

let num:number = 123; // Explicit
// let num = 123; //Implicit

let flag:boolean = true; // Explicit
// let flag = true; //Implicit

let random:any = "hello" // Explicit
random = 123; //Implicit

const array1:string[] = ["mark", "julie", "adam"]; // Explicit
// const array1 = ["mark", "julie", "adam"]; //Implicit
array1.push("Nick");

const array2:readonly string[] = ["Mark"]; // Immutable due to "readonly" keyword
//must define the type as well else it will throw an error. (Explicit only)

let multiDataType: [string, number, string, boolean] = ["", 123, "", true];
// let multiDataType = ["", 123, "", true]; //Implicit

let emp1: {name:string, age: number, address: string} = {
    name: "Nick",
    age: 22,
    address: "New Jersy"
}

enum Months {
    Jan = -1,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
}

interface IPerson {
    name: string,
    age: number,
    address: string
}
interface IEmployee extends IPerson {
    worksAt: string,
    salary: number
}
const employee1:IEmployee = {
    name: "Mark",
    age: 26,
    address: "California",
    worksAt: "Google",
    salary: 10000
}

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