//  type annotations:

let age2: number = 25;
let name2: string = "Shakeel";

function greet(person: string): void {
  console.log("Hello, " + person + "!");
}

//  type inference:

let age1 = 25;  // TypeScript infers `age` as `number`
let name1 = "Shakeel";  // TypeScript infers `name` as `string`

//  an interface:

interface Person1 {
  name: string;
  age: number;
  greet: () => void;
}

//  a class:

class Car {
  private brand: string;
  private speed: number;

  constructor(brand: string) {
    this.brand = brand;
    this.speed = 0;
  }

  accelerate(speed: number): void {
    this.speed += speed;
  }

  getSpeed(): number {
    return this.speed;
  }
}

//  a type alias:

type Person = {
  name: string;
  age: number;
};

//  a union type:

let age: number | string;
age = 25;  // Valid
age = "twenty-five";  // Valid


//  an intersection type:

type Admin = {
  name: string;
  role: string;
};

type Employee = {
  name: string;
  salary: number;
};

type AdminEmployee = Admin & Employee;


//  a literal type:

let status1: "active" | "inactive";
status1 = "active";  // Valid
// status1= "disabled";  // Error: Value must be "active" or "inactive"

//  a nullable type:


let username: string | null;
username = "Shakeel.Ahmed";  // Valid
username = null;  // Valid

//  optional chaining:

const user2 = {
  name: "Shakeel",
  address: {
    city: "New York",
  },
};
const cityName = user2.address?.city;