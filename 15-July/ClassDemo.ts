class User {
    name: string;
    age: number;
    addresss: string;
}

// Directly assigning value to the Object
const userOne: User = new User();
userOne.name = "Mark";
userOne.age = 25;
userOne.addresss = "US";
console.log(userOne);

// Re-assigning or overriding the current value
userOne.name = "John";
console.log(userOne);

