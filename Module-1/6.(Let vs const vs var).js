/* 1. var

Scope: Function-scoped (or global if declared outside a function)
Hoisting: Yes, the variable is hoisted and initialized as undefined
Re-declaration: Allowed
Re-assignment: Allowed */

var x = 10;
var x = 20; // ✅ Allowed
x = 30;     // ✅ Re-assignment allowed
console.log(x); // 30

function testVar() {
    var y = 5;
    if(true) {
        var y = 10; // same variable, function scoped
        console.log(y); // 10
    }
    console.log(y); // 10 (not 5!)
}
testVar();



/* 2.Let

Scope: Block-scoped ({ ... })
Hoisting: Yes, but not initialized (temporal dead zone until declaration)
Re-declaration: ❌ Not allowed in same scope
Re-assignment: ✅ Allowed */

let a = 10;
a = 20;      // ✅ Re-assignment allowed
console.log(a); // 20

// Block scope example
if(true) {
    let b = 50;
    console.log(b); // 50
}
// console.log(b); // ❌ Error: b is not defined (outside block)

// Re-declaration in same scope
// let a = 30; // ❌ Error


/* 3. const

Scope: Block-scoped
Hoisting: Yes, but not initialized (temporal dead zone)
Re-declaration: ❌ Not allowed
Re-assignment: ❌ Not allowed */

const pi = 3.14;
// pi = 3.1415; // ❌ Error: Assignment to constant variable

const obj = { name: "Priya" };
obj.name = "Ravi"; // ✅ Allowed (object properties can change)
console.log(obj); // { name: "Ravi" }

// const array example
const arr = [1,2,3];
arr.push(4); // ✅ Allowed
console.log(arr); // [1,2,3,4]
// arr = [5,6]; // ❌ Error
