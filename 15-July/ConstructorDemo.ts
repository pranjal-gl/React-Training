class User {
    name: string;
    age: number;
    addresss: string;
    // Constructor with 3 parameter out 3
    constructor (name:string, age:number, address:string) {
        this.name = name;
        this.age = age;
        this.addresss = address;
    }
}

// Using Constructor
const userOne: User = new User("Mark", 25, "US");
console.log(userOne);

// Re-assigning or overriding the current value
userOne.name = "John"
console.log(userOne);


class Employee {
    name: string;
    address: string;
    experience: number;

    // Constructor with 2 parameter out 3
    constructor (name:string, experience:number) {
        this.name = name;
        this.address = "Not Available";
        this.experience = experience;
    } 
}

const emp1: Employee = new Employee("Sarah", 3);
console.log(emp1);
