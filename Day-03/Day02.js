
let a= 10;
console.log(a,typeof a);

let b= 10.5;
console.log(b,typeof b);

let c= 'Rohan';
console.log(c,typeof c);

let d='5.6';
console.log(d,typeof d);

let e=false;
console.log(e,typeof e);

let f='true';
console.log(f,typeof f);

let g;
let h=null;
console.log(g,typeof g);
console.log(h,typeof h);

var i=10;
const j=20;
i=30;
console.log(a,i,j);

const numbers = [1, 2, 3];
numbers.push(4);   // ✅ Allowed
numbers.pop();     // ✅ Allowed
numbers[1] = 10;   // ✅ Allowed
console.log(numbers); // [1, 10, 3]


let arr = [1, 2, 3];
arr = [4, 5, 6];  // ✅ Allowed (Reassigning is possible)

console.log(arr); // Output: [4, 5, 6]
