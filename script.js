// let name = "Nirmala" //in creation phase , name = undefined. in execution phase it will be name = 'Nirmala'.

// function add(a, b){ // function also get memory at the time of creatio phase. add is the name of the function here. 
//     return a+b;
// }
//Global Execution Context

let names = "Nirmala";
let namess = "Nirmala 1";
let namesfdfd = "Nirmala good";
let namesdfg = "Good";

//functional Execution context - call stack 

function opertation(a,b,c){
    var result = a+b;
    var result1 = result + c;
    return result1;
}
//functional execution context will be created when function is called . 
var newResult = opertation(2,4,5);
console.log(newResult);

//Variables - names given to computer memory locations in order to store the data in a program. 
// in JS, we can declare the varibales in three ways. 
// 1.let 2. const 3. var

//let examples:::;; here let is a keyword . we can not create a variable with keywords.

let a;// declared but not initialized. 
console.log(a); // while declaring the varibale , default value will be undefined. 

let b = "Hello";
console.log(b) // o/p ::  Hello


// let c = 3;  Redeclaring the same variable is not possible but we can upadate the value.
 // updated.
 let c ;
console.log(c) // 3 
c = 2


// const - declaration and Initialization must be happen at a time 

//const cnst ;  not initialized , throws an error .
 // valid

// cnst  = 4567; // Redeclare and Reassign is not possible. 
console.log(cnst) // throws an error  Assignment to constant variable 
const cnst = 4567;

// var
var ab = 45;
var ab = 345; // Redeclare and upadate is possible 
console.log(ab) // 345

//global or function scope

var e; 

function add(a,b){
   e = 3;
    var f = e+a;
    return f;
}

var d = add(2,3);
console.log(d); // 5
console.log(e); // 3 becoz e variable is declared globally so it will be updated with value 3 .
console.log(f); // gives an error becoz f is declared inside the function scope. we can not acces . f is not defined.

//not defined ::::::  accessing a variable without creating. 
















