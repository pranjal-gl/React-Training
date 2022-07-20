class MethodsDemo {
    private name:string; 
    private empId:number;
    private address:string;

    // Method with zero parameter & returning value
    public getName(): string{
        return this.name;
    }

    // Method with one parameter & void return type
    public setName(name:string): void {
        this.name = name;
    }

    // Method with multiple parameter & no return type (same as void)
    public setAllFields(name:string, empId:number, address:string) {
        this.name = name;
        this.empId = empId;
        this.address = address;
    }

    // Method with optional parameter
    public grossSalary(basic:number, hra:number, special:number=0): number {
        return basic + hra + special;
    }

    // public test(a:number) {
    //     return a;
    // }
}

let user:MethodsDemo = new MethodsDemo();
user.setName("Mark");
user.setAllFields("Mark", 123, "UK");
let userName:string = user.getName();
console.log(userName);
console.log(user);
let res:number = user.grossSalary(20000,15000, 5000);
console.log(res);
// console.log(user.test(2));
