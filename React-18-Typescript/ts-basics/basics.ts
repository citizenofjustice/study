// Primitives: numbers, string, boolean
// More complex types: arrays, objects
// Function types, parametrs

/* Primitives */
let age: number;

age = 12;

let userName: string;

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

/* More complex types */
let hobbies: string[];

hobbies = ["Sport", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Max",
  age: 32,
};

// person = {
//   isEmployee: true,
// };

let people: Person[];

/* Type inference */
let course: string | number = "React - The Сomplete Guide";

course = 12341;

/* Functions & types */

function add(a: number, b: number): number {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

/* Generics */

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
// updatedArray[0].split("");

const stringArray = insertAtBeginning(["a", "b", "c"], "d");
