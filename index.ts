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
// let person: {
//   name: string;
//   location: string;
//   isProgrammer: boolean;
// };

// Assign person to an object with all the necessary properties and value types--//
// person = {
//   name: 'Danny',
//   location: 'UK',
//   isProgrammer: true,
// };

// person.isProgrammer = 'Yes'; // !!!!!ERROR: should be a boolean


// person = {
//   name: 'John',
//   location: 'US',
// }; 
// !!!!ERROR: missing the isProgrammer property

//interfaces//

// interface Person {
//   name: string;
//   location: string;
//   isProgrammer: boolean;
// }

// let person1: Person = {
//   name: 'Danny',
//   location: 'UK',
//   isProgrammer: true,
// };

// let person2: Person = {
//   name: 'Sarah',
//   location: 'Germany',
//   isProgrammer: false,
// };




//Functions in Typescript//


// Define a function called circle that takes a diam variable of type number, and returns a string
// function circle(diam: number): string {
//   return 'The circumference is ' + Math.PI * diam;
// }


// console.log(circle(10)); // ANSWER: The circumference is 31.41592653589793

// ES6 arrow function://

// const circle = (diam: number): string => {
//   return 'The circumference is ' + Math.PI * diam;
// };

// console.log(circle(10)); 

// Using explicit typing //
// const circle: Function = (diam: number): string => {
//   return 'The circumference is ' + Math.PI * diam;
// };

// Inferred typing - TypeScript sees that circle is a function that always returns a string, so no need to explicitly state it
// const circle = (diam: number) => {
//   return 'The circumference is ' + Math.PI * diam;
// };

// !! add a question mark after a parameter to make it optional.


// Dynamic Types//

// let age: any = '100';
// age = 100;
// age = {
//   years: 100,
//   months: 2,
// };

// Type Alias//


// type StringOrNumber = string | number;

// type PersonObject = {
//   name: string;
//   id: StringOrNumber;
// };

// const person1: PersonObject = {
//   name: 'John',
//   id: 1,
// };

// const person2: PersonObject = {
//   name: 'Delia',
//   id: 2,
// };

// const sayHello = (person: PersonObject) => {
//   return 'Hi ' + person.name;
// };

// const sayGoodbye = (person: PersonObject) => {
//   return 'Seeya ' + person.name;
// };



//  DOM & Type Casting  //

// -->   TS doesn't have access to the DOM like JS. 
// -->   Whenever DOM are trying to be accessed, TS unsure if they exist 


// const link = document.querySelector('a');

// console.log(link.href); 



// Here we are telling TypeScript that we are certain that this anchor tag exists
// const link = document.querySelector('a')!;

// console.log(link.href);


// if needed to select DOM element by its class/id? TS can't infer type

// const form = document.getElementById('signup-form');

// console.log(form.method);


//  need to tell TS certain form exists, known type HTMLFormElement.

// const form = document.getElementById('signup-form') as HTMLFormElement;

// console.log(form.method);


// const form = document.getElementById('signup-form') as HTMLFormElement;

// form.addEventListener('submit', (e: Event) => {
//   e.preventDefault(); // prevents the page refreshing

//   console.log(e.tarrget); 



 
  //  Classes in TS  //

  // class Person {
  //   name: string;
  //   isCool: boolean;
  //   pets: number;
  
  //   constructor(n: string, c: boolean, p: number) {
  //     this.name = n;
  //     this.isCool = c;
  //     this.pets = p;
  //   }
  
  //   sayHello() {
  //     return `Hi, my name is ${this.name} and I have ${this.pets} pets`;
  //   }
  // }
  
  // const person1 = new Person('Danny', false, 1);
  // const person2 = new Person('Sarah', 'yes', 6);    
  // console.log(person1.sayHello());


  //  create a people array that only includes objects constructed from the Person class.

  // let People: Person[] = [person1, person2];



  // class Person {
  //   readonly name: string; // This property is immutable - it can only be read
  //   private isCool: boolean; // Can only access or modify from methods within this class
  //   protected email: string; // Can access or modify from this class and subclasses
  //   public pets: number; // Can access or modify from anywhere - including outside the class
  
  //   constructor(n: string, c: boolean, e: string, p: number) {
  //     this.name = n;
  //     this.isCool = c;
  //     this.email = e;
  //     this.pets = p;
  //   }
  
  //   sayMyName() {
  //     console.log(`Your not Heisenberg, you're ${this.name}`);
  //   }
  // }
  
  // const person1 = new Person('Danny', false, 'dan@e.com', 1);
  // console.log(person1.name); 
  // person1.name = 'James'; 
  // console.log(person1.isCool); 
  // console.log(person1.email); 
  // console.log(person1.pets); 



  // class Person {
  //   constructor(
  //     readonly name: string,
  //     private isCool: boolean,
  //     protected email: string,
  //     public pets: number
  //   ) {}
  
  //   sayMyName() {
  //     console.log(`Your not Heisenberg, you're ${this.name}`);
  //   }
  // }
  
  // const person1 = new Person('Danny', false, 'dan@e.com', 1);
  // console.log(person1.name); 


  // class Programmer extends Person {
  //   programmingLanguages: string[];
  
  //   constructor(
  //     name: string,
  //     isCool: boolean,
  //     email: string,
  //     pets: number,
  //     pL: string[]
  //   ) {
  //     // The super call must supply all parameters for base (Person) class, as the constructor is not inherited.
  //     super(name, isCool, email, pets);
  //     this.programmingLanguages = pL;
  //   }
  // }

  // Modules in TS //

  
  //    In |tsconfig.json| file change following options to support modern importing/exporting:
  //   "target": "es2016",
  //    "module": "es2015"




  //  Interfaces in TS  //


  // interface Person {
  //   name: string;
  //   age: number;
  // }
  
  // function sayHi(person: Person) {
  //   console.log(`Hi ${person.name}`);
  // }
  
  // sayHi({
  //   name: 'John',
  //   age: 48,
  // });


  // Can also be defined as object type using Type Alias 


  // type Person = {
  //   name: string;
  //   age: number;
  // };
  
  // function sayHi(person: Person) {
  //   console.log(`Hi ${person.name}`);
  // }
  
  // sayHi({
  //   name: 'John',
  //   age: 48,
  // });

  //   Object Type can be defined anonymously

  // function sayHi(person: { name: string; age: number }) {
  //   console.log(`Hi ${person.name}`);
  // }
  
  // sayHi({
  //   name: 'John',
  //   age: 48,
  // });

  //  Extending an interface:

  // interface Animal {
  //   name: string
  // }
  
  // interface Bear extends Animal {
  //   honey: boolean
  // }
  
  // const bear: Bear = {
  //   name: "Winnie",
  //   honey: true,
  // }


  //  Extending a type via intersections:

  // type Animal = {
  //   name: string
  // }
  
  // type Bear = Animal & {
  //   honey: boolean
  // }
  
  // const bear: Bear = {
  //   name: "Winnie",
  //   honey: true,
  // }


  //  Adding new fields to an existing interface:


  // interface Animal {
  //   name: string
  // }
  
  // Re-opening the Animal interface to add a new field
  // interface Animal {
  //   tail: boolean
  // }
  
  // const dog: Animal = {
  //   name: "Bruce",
  //   tail: true,
  // }


  //   key difference: a type cannot be changed after being created: 


  // type Animal = {
  //   name: string
  // }
  
  // type Animal = {
  //   tail: boolean
  // }




  //  Interfaces with Classes


//   interface HasFormatter {
//     format(): string;
//   }
  
//   class Person implements HasFormatter {
//     constructor(public username: string, protected password: string) {}
  
//     format() {
//       return this.username.toLocaleLowerCase();
//     }
//   }
  
//   // Must be objects that implement the HasFormatter interface
//   let person1: HasFormatter;
//   let person2: HasFormatter;
  
//   person1 = new Person('Danny', 'password123');
//   person2 = new Person('Jane', 'TypeScripter1990');
  
//   console.log(person1.format());


//   let people: HasFormatter[] = [];
// people.push(person1);
// people.push(person2);


// Literal Types in TS //

