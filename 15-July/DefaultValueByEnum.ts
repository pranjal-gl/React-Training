enum Country {
    IND = "India",
    USA = "United States of America",
    UK = "United Kingdom",
    AUS = "Australia",
    CND = "Canada",
    FRN = "France",
    GRM = "Germany",
    RUS = "Russia",
    CHN = "China"
}

class Employee {
    name: string;
    address: string;
    experience: number;
    
    constructor (name:string, address:string, experience:number) {
        this.name = name;
        this.address = address;
        this.experience = experience;
    } 
}

const emp1: Employee = new Employee("Sarah", Country.USA, 3); // Assigning default value of Address using Enum
console.log(emp1);

