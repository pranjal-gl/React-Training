var MethodsDemo = /** @class */ (function () {
    function MethodsDemo() {
    }
    // Method with zero parameter & returning value
    MethodsDemo.prototype.getName = function () {
        return this.name;
    };
    // Method with one parameter & void return type
    MethodsDemo.prototype.setName = function (name) {
        this.name = name;
    };
    // Method with multiple parameter & no return type (same as void)
    MethodsDemo.prototype.setAllFields = function (name, empId, address) {
        this.name = name;
        this.empId = empId;
        this.address = address;
    };
    // Method with optional parameter
    MethodsDemo.prototype.grossSalary = function (basic, hra, special) {
        if (special === void 0) { special = 0; }
        return basic + hra + special;
    };
    MethodsDemo.prototype.test = function (a) {
        return a;
    };
    return MethodsDemo;
}());
var user = new MethodsDemo();
user.setName("Mark");
user.setAllFields("Mark", 123, "UK");
var userName = user.getName();
console.log(userName);
console.log(user);
var res = user.grossSalary(20000, 15000, 5000);
console.log(res);
console.log(user.test(2));
