var User = /** @class */ (function () {
    // Constructor with 3 parameter out 3
    function User(name, age, address) {
        this.name = name;
        this.age = age;
        this.addresss = address;
    }
    return User;
}());
// Using Constructor
var userOne = new User("Mark", 25, "US");
console.log(userOne);
// Re-assigning or overriding the current value
userOne.name = "John";
console.log(userOne);
var Employee = /** @class */ (function () {
    // Constructor with 2 parameter out 3
    function Employee(name, experience) {
        this.name = name;
        this.address = "Not Available";
        this.experience = experience;
    }
    return Employee;
}());
var emp1 = new Employee("Sarah", 3);
console.log(emp1);
