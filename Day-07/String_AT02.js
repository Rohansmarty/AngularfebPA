
/*
1. Print the occurence of each character in a string
   input: 'entertainment'
   output: { e:3 , n:2 , t: 3 ....}
*/
function countCharacters() {
   str="entertainment"
   let freq = {};
   for (let char of str) {
       freq[char] = (freq[char] || 0) + 1;
   }
   console.log(freq);
}
countCharacters();
/*
2. Print the character which is repeated max no of times
   input: 'hello world'
   output : 'L'
*/
function maxRepeatedChar() {
   const str = "hello world";
   let max = 0;
   let maxChar = '';
   for (let i = 0; i < str.length; i++) {  
      let count = 0;
      for (let j = 0; j < str.length; j++) {
         if (str[j] == str[i]) {
            count++;
         }
      }
      if (count > max) {
         max = count;
         maxChar = str[i];
      }
   }
   console.log(maxChar.toUpperCase());
}

maxRepeatedChar(); 


/*
3. Swap The case for Each Character in a string 
   input: 'Hello World'
   output: 'hELLO wORLD'
*/
function swapCase() {
   let str = 'Hello World';
   let result = '';

   for (let char of str) {
      if (char == char.toUpperCase()) {
         result =result+ char.toLowerCase();  
      } else {
         result =result+ char.toUpperCase();  
      }
   }
   
   console.log(result);  
}
swapCase();
/*
4. Print the Abbreviation for a string
   input: 'Rabindra Nath Tagore'
   output: 'R. N. tagore'
*/
function abbreviation() {
   let str = 'Rabindra Nath Tagore'
   let re = str.split(' ');
   let result=re[0].slice(0,1).toUpperCase()+'. '+re[1].slice(0,1).toUpperCase()+'. '+re[2].toLowerCase();
   console.log(result);
   }  
abbreviation();
   

/*
5. Shift the characters by the next character
   input:  'abcxyz'
   output: 'bcdyza'
*/

function shiftCharacters(str) {
   return str.split('').map(char => 
      // console.log(char)
       char == 'z' ? 'a' : char == 'Z' ? 'A' : String.fromCharCode(char.charCodeAt(0) + 1)).join('');
}

console.log(shiftCharacters("abcxyz")); 
// Output: "bcdyza"


/*
6. Ask user to enter a sequence of parantheses and validate 
   input: '([{ }])'
   output : true
*/

function isValid(str) {
   while (str.includes("()") || str.includes("{}") || str.includes("[]")) {
       str = str.replace("()", "").replace("{}", "").replace("[]", "");
   }
   return str.length === 0;
}

console.log(isValid("([{ }])")); // true
console.log(isValid("([{}]"));   // false

/*
7. Ask user to enter a 3 letter word, print all the permutations using those 3 letters.
    input: 'ABC'
    output: ABC , ACB , BCA, BAC ...

8. Ask user to enter a number and convert that to Roman value
   input:   9    12
   output : IX   XII

9. Ask user to enter a roman string and convert that to integer value
   input:   IX    XII
   output : 9     12
*/

