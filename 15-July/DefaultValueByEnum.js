var Country;
(function (Country) {
    Country["IND"] = "India";
    Country["USA"] = "United States of America";
    Country["UK"] = "United Kingdom";
    Country["AUS"] = "Australia";
    Country["CND"] = "Canada";
    Country["FRN"] = "France";
    Country["GRM"] = "Germany";
    Country["RUS"] = "Russia";
    Country["CHN"] = "China";
})(Country || (Country = {}));
var Employee = /** @class */ (function () {
    function Employee(name, address, experience) {
        this.name = name;
        this.address = address;
        this.experience = experience;
    }
    return Employee;
}());
var emp1 = new Employee("Sarah", Country.USA, 3); // Assigning default value of Address using Enum
console.log(emp1);
