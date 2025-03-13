/*Write a JavaScript program that does the following:

Declare a global variable and try accessing it inside a function.
Inside the function, declare a var, let, and const inside an if block. Try accessing them outside the if block.
Declare a var variable after trying to use it (hoisting test).
Declare a let and const variable after trying to use them (hoisting test).
Declare a const array, modify its contents, and try reassigning it.
Create a function inside another function (closure) and access the outer function's variable.
Try changing a const variable and a let variable after initialization.*/

var g='rohan';
function test(){
    console.log(g);
    
    if(true){
    var a='globe';
    let b='earth';
    const c='sky';
    }
    console.log(a);
   // console.log(b);
   // console.log(c);
}
test();
var a='world';
let b='sea';
const c='ocean';

console.log(a);
console.log(b);
console.log(c);

const arr=[1,2,3];
arr.push(4);
console.log(arr);

function outer(){
    var x = 10;
    function inner(){
        console.log(x);
        }
    inner();
}
outer();
b='red';
//c='blue';
console.log(b);
console.log(c);