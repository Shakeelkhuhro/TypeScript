// Here's an example of type annotations:

let age2: number = 25;
let name2: string = "John";

function greet(person: string): void {
  console.log("Hello, " + person + "!");
}

// Here's an example of type inference:

let age1 = 25;  // TypeScript infers `age` as `number`
let name1 = "John";  // TypeScript infers `name` as `string`

// Here's an example of an interface:

interface Person1 {
  name: string;
  age: number;
  greet: () => void;
}

// Here's an example of a class:

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

// Here's an example of a type alias:

type Person = {
  name: string;
  age: number;
};

// Here's an example of a union type:

let age: number | string;
age = 25;  // Valid
age = "twenty-five";  // Valid


// Here's an example of an intersection type:

type Admin = {
  name: string;
  role: string;
};

type Employee = {
  name: string;
  salary: number;
};

type AdminEmployee = Admin & Employee;


// Here's an example of a literal type:

let status1: "active" | "inactive";
status1 = "active";  // Valid
// status1= "disabled";  // Error: Value must be "active" or "inactive"

// Here's an example of a nullable type:


let username: string | null;
username = "john.doe";  // Valid
username = null;  // Valid

// Here's an example of optional chaining:

const user2 = {
  name: "John",
  address: {
    city: "New York",
  },
};
const cityName = user2.address?.city;