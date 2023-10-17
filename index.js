"use strict";
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
//Arrays in TypeScript
let ids = [1, 2, 3, 4, 5]; // can only contain numbers
let names = ['Danny', 'Anna', 'Bazza']; // can only contain strings
let options = [true, false, false]; //can only contain true or false
let books = [
    { name: 'Fooled by randomness', author: 'Nassim Taleb' },
    { name: 'Sapiens', author: 'Yuval Noah Harari' },
]; // can only contain objects
let arr = ['hello', 1, true]; // any basically reverts TypeScript back into JavaScript
ids.push(6);
ids.push('7');
