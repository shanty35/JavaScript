<div align='center' style="page-break-after:always;">
 <h1>Java Script Hand Book</h1>
 <p>This HandBook contains all the necessary snippets and concepts of JavaScript from a fundamental level to advanced level.</p>

<p>Created By: Shantanu </p>

<div style="position: absolute; bottom: 40px; left: 0; width: 100%; text-align: center; font-size:12px; color:gray;">
    Last updated: July 8, 2025, 12:03 PM
</div>
</div>  

<hr/>


<!--Fundamentals of Java Script --> 
<div align='center' >
<h1>Fundamentals of Java Script</h1>
</div>
<div>
Basic Syntax to use in Google Chrome console to test JS code.


```javascript
alert("Hello World!");

let js='Amazing'
if(js==='Amazing') alert("JavaScript is Fun!")
```

## What is Java Script?
Java Script is a **High-Level**, **Object-Oriented**, **Multi-Paradigm** **Programming Language**.

### Role of JS in Web Development
In Web Develoment Java Script provides *functionality*, *dynamic effects* and *web applications* in the browser.
</div>

**ES6+ (ECMAScript 2015)** is the modern JavaScript post 2015 which had major language change.


## Getting Started with JS

- console.log()

To display results based on some function we have to explicity call out the console function to print in the browser's console.

```javascript
alert("Hello World!");

let js='Amazing'
if(js==='Amazing') alert("JavaScript is Fun!")

40+10-1;

console.log(40+10-1);
```

- Comments in Java Script
  - Single Line Comment `//This is a single Line Comment`
  - Multi Line Comment `/* This is a Multi-Line Comment */`
  
### Values and variables
- Value
A value is a **piece of data** 

- Variable stores the value in a variable name. 
```javascript

let firstName="Jonas";
console.log(firstName)
```
#### Naming Conventions and Rule for variables
- Variables should be written in Camel Case i.e `firstName` ;
- Variables cannot start with a number 
- Variable names can only contain Numbers, letters, _ or $.
- Variable names should be descriptive.
<hr/>

### Data Types
Value can be stored in Objects or Primitive

#### Primitive Data Type
There are in total 7 Primitive data types:
- **Numbers:** Floating point number (Used for decimals and integers) `let age=10;` 
- Strings : Sequence of characters(Used for text) `let firstName="Jonas"`
- **Boolean:** Logical type which can be `true` or `false` (Used for taking decisions).
- **Undefined:** Value of variable which cannot be yet defined.
- **Null:** Also means 'empty value'
- **Symbol(ES2015):** Value that is unique and cannot be changed.
- **Big Int:** Larger integers which Numbers cannot hold.

> Java Script has dynamic typing : We don't have to manually define the data types of the variable.

<hr/>

### Declaring Variables in Java Script
There are 3 Methods for declaring variables in JS
 - let
 - const
 - var
  
  ```javascript
// let allows us to change the value of the variable 
let age=10;
age=11;

// When the value is fixed and wont be changed in the code lifecycle
const dob=10/01/1999

//Var was used in older version and is similar to let
var x="Test"
var="Test1"
  ``` 

<hr/>

### Operators In JS

Types of operator:
  - Mathematical Operators
  - Assignment Operators
  - Comparison Operators 
```javascript
//Mathematical
const now=2037;
const ageJonas=now-1991;
const ageSarah=now-2018;
console.log(ageJonas,ageSarah);

//Assignment
let x=10+5;
x+=10;

//Comparison
console.log(ageJonas>ageSarah); // > , < , >=, <=
```
### Operator Precedence

> Refer to this document for Precedence of operators. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

### String and Template Literal

```javascript

```
