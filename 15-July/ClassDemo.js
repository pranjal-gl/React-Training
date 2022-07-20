var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
// Directly assigning value to the Object
var userOne = new User();
userOne.name = "Mark";
userOne.age = 25;
userOne.addresss = "US";
console.log(userOne);
// Re-assigning or overriding the current value
userOne.name = "John";
console.log(userOne);
