// Part One

class Vehicle {

  constructor (make, model, year) {

    this.make = make;

    this.model = model;

    this.year = year;
  };

  honk() {

    return 'Beep';
  };

  toString() {

    return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
  };
}

// let myFirstVehicle = new Vehicle('Honda', 'Monster Truck', 1999);

// console.log(myFirstVehicle.honk());


// Part Two

class Car extends Vehicle {

  constructor(make, model, year) {

    super(make, model, year);

    this.numWheels = 4;
  };
}

// const myFirstCar = new Car('Toyota', 'Corolla', 2005);

// console.log(myFirstCar.toString());


// Part Three

class Motorcycle extends Vehicle {

  constructor(make, model, year) {

    super(make, model, year);

    this.numWheels = 2;
  };

  revEngine() {

    return 'VROOM!!!';
  };
}

// const myFirstMotorcycle = new Motorcycle('Honda', 'Nighthawk', 2000);

// console.log(myFirstMotorcycle.revEngine());


// Part Four

class Garage {

  constructor(capacity) {

    this.vehicles = [];

    this.capacity = capacity;
  };

  add(newVehicle) {

    if (!(newVehicle instanceof Vehicle)) {

      return 'Only vehicles are allowed in here';
    };

    if(this.vehicles.length >= this.capacity) {

      return "Sorry, we're full.";
    };

    this.vehicles.push(newVehicle);

    return 'Vehicle added!';
  };
}

let garage = new Garage(2);

// console.log(garage.add(new Car('Hyundai', 'Elantra', 2015)));

// console.log(garage.vehicles);

// console.log(garage.add('Taco'));

// console.log(garage.add(new Motorcycle('Honda', 'Nighthawk', 2000)));

// console.log(garage.vehicles);

// console.log(garage.add(new Motorcycle('Honda', 'Nighthawk', 2001)));