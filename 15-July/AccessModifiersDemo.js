var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
// Directly assigning value to the Object
var userOne = new User();
userOne.name = "Mark";
userOne.age = 25;
// userOne.addresss = "US"; // Will throw an error, because address is private.
console.log(userOne);
