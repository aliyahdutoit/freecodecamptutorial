// let sport = 'football';
// let id = 5;

// let id: number = 5;
// let firstname: string = 'danny';
// let hasDog: boolean = true;

// let unit: number; // Declare variable without assigning a value
// unit = 5;

// let id = 5; // TS knows it's a number
// let firstname = 'danny'; // TS knows it's a string
// let hasDog = true; // TS knows it's a boolean

// hasDog = 'yes'; // ERROR

// let age: string | number;
// age = 26;
// age = '26';

let firstname = new String('Danny');
console.log(firstname); 


//Arrays in TypeScript//

// let ids: number[] = [1, 2, 3, 4, 5]; 
// let names: string[] = ['Danny', 'Anna', 'Bazza'];
// let options: boolean[] = [true, false, false]; 
// let books: object[] = [
//   { name: 'Fooled by randomness', author: 'Nassim Taleb' },
//   { name: 'Sapiens', author: 'Yuval Noah Harari' },
// ]; // can only contain objects
// let arr: any[] = ['hello', 1, true]; 

// ids.push(6);
// ids.push('7');

//-- union types//

// let person: (string | number | boolean)[] = ['Danny', 1, true];
// person[0] = 100;
// person[1] = {name: 'Danny'} 

// let person = ['Danny', 1, true]; 
// person[0] = 100;
// person[1] = { name: 'Danny' }; 


//Objects in Typescript//

// --Declare a variable called person with a specific object type annotation--//
let person: {
  name: string;
  location: string;
  isProgrammer: boolean;
};

// Assign person to an object with all the necessary properties and value types--//
person = {
  name: 'Danny',
  location: 'UK',
  isProgrammer: true,
};

person.isProgrammer = 'Yes'; // !!!!!ERROR: should be a boolean


person = {
  name: 'John',
  location: 'US',
}; 
// !!!!ERROR: missing the isProgrammer property

//interfaces//

interface Person {
  name: string;
  location: string;
  isProgrammer: boolean;
}

let person1: Person = {
  name: 'Danny',
  location: 'UK',
  isProgrammer: true,
};

let person2: Person = {
  name: 'Sarah',
  location: 'Germany',
  isProgrammer: false,
};




//Functions in Typescript//


// Define a function called circle that takes a diam variable of type number, and returns a string
function circle(diam: number): string {
  return 'The circumference is ' + Math.PI * diam;
}


console.log(circle(10)); // ANSWER: The circumference is 31.41592653589793

// ES6 arrow function://

const circle = (diam: number): string => {
  return 'The circumference is ' + Math.PI * diam;
};

console.log(circle(10)); 

// Using explicit typing //
const circle: Function = (diam: number): string => {
  return 'The circumference is ' + Math.PI * diam;
};

// Inferred typing - TypeScript sees that circle is a function that always returns a string, so no need to explicitly state it
const circle = (diam: number) => {
  return 'The circumference is ' + Math.PI * diam;
};

// !! add a question mark after a parameter to make it optional.


// Dynamic Types//

let age: any = '100';
age = 100;
age = {
  years: 100,
  months: 2,
};