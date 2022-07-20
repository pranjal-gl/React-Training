class User {
    name: string;
    age: number;
    private addresss: string;
}

// Directly assigning value to the Object
const userOne: User = new User();
userOne.name = "Mark";
userOne.age = 25;
// userOne.addresss = "US"; // Will throw an error, because address is private.

console.log(userOne);