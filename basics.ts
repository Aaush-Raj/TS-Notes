// Hey! this is my Notes while learning TS, let me know if you liked this.
// contact me @ aayushcontactinfo@gmail.com


// There are three main primitives in JavaScript and TypeScript.
// boolean - true or false values
// number - whole numbers and floating point values
// string - text values like "TypeScript Rocks"

// When creating a variable, there are two main ways TypeScript assigns a type:
// Explicit
// Implicit

let firstName: string = "James"; //Explicit Type , in this you define your type of variable , here : "string"
// let firstName = "James"; //Implicit Type : in this, TS will guess the type of your Variable.

// TypeScript will throw an error if data types do not match.
// firstName = 33; // attempts to re-assign the value to a different type
firstName = "Bond"; // attempts to re-assign the value to a different type

// TypeScript may not always properly infer what the type of a variable may be. In such cases, it will set the type to any which disables type checking.


//Creating variables in TS:

const userName: string = "SpiderMon";
const userAge: number = 18;
const isSuperHero :boolean = true;

//TypeScript Special Types

// 1. any  ::: any is a type that disables type checking and effectively allows all types to be used.

let randomVariable:any = "randomString" // you can set any to string
 randomVariable = 127382173 // change it to  number 
 randomVariable = false 
 randomVariable() //TS will ignore this , even if randomVariable is not a function
 randomVariable.randomFnc // Ts will ignore this too.
 let abc:number = randomVariable //TS will not throw error ! but it will throw error with "TYPE: UNKNOWN" , see below example
 //you can do "any" thing with this type, but using it often reduces the purpose of TS... it will disable type checking for this variable

//  2. unknown :: unknown is a similar, but safer alternative to "any".

let value: unknown;

let num: number = value; // Error Type 'unknown' is not assignable to type 'number'
value.foo; // Error
value(); // Error


// Creating arrays in TS