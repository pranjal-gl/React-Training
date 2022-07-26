// let car = {
//     brand: "Ford",
//     speed: 0,

//     accelerate: function(param) {
//         this.speed += param;
//     },
//     brake: function(param) {
//         this.speed -= param;
//     },
//     status: function() {
//         return this.brand + ' running at ' + this.speed + ' km/h';
//     }
// }

// console.log(car.status());
// car.accelerate(50);
// console.log(car.status());
// car.accelerate(100);
// console.log(car.status());
// car.brake(25);
// console.log(car.status());


class Car {
    constructor(brand, speed, motion) {
        this.brand = brand;
        this.speed = speed;
        this.motion = motion;
    }

    accelerate(param) {
        this.speed += param;   
        if(this.speed > 0) this.motion = true;
    }

    brake(param) {
        this.speed -= param;   
        if(this.speed < 0) {
            this.speed = 0;
            this.motion = false
        }
    }

    status() {
        return this.brand + " running at " + this.speed + " km/h; status check: The car is " + this.check_motion();
    }

    check_motion() {
        if(this.motion) return "moving"
        else return "not moving (initial condition)"
    }

    emergency_brake() {
        this.speed = 0;
        this.motion = false;
    }
}

const fordFiesta = new Car('Ford Fiesta', 0, false);

console.log(fordFiesta.status());
fordFiesta.accelerate(50);
console.log(fordFiesta.status());
fordFiesta.accelerate(100);
console.log(fordFiesta.status());
fordFiesta.brake(20);
console.log(fordFiesta.status());
fordFiesta.brake(200);
console.log(fordFiesta.status());
