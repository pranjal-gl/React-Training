class Person {
    fullName:string;
    age:number;
    country:string;
    state:string;
    city:string;
}

class TempPerson extends Person{
    perDayWage: number;
}

class PermPerson {
    perMonthWage: number;
}

let person1: TempPerson = new TempPerson();
person1.fullName = "John";