<script>
  /* 1. WAP to reverse a string  
        input:- 'sachin'
        output:- 'nihcas' */
//let s1='sachin';
function strvse(){
    let s1='sachin';
    let rvs='';
    for (let i=s1.length-1;i>=0;i--){
       rvs=rvs+s1.charAt(i);
    }
    console.log(rvs);
    document.write(`<h3>${rvs}</h3>`);
}
strvse();

/*2. WAP to reverse words
	input:- 'This is javascript class'
	output:- 'class javascript is this'*/
let s2='This is javascript class';
function revword(){
    let words=s2.split(' ');
    let rs='';
    for (let i=words.length-1;i>=0;i--){
       rs=rs+ words[i]+' ';
    }
    console.log(rs);
    document.write(`<h3>${rs}</h3>`);
}
revword();

/*3. WAP 
to print the first non-repeated character in a string
   input:- 'entertainment'
   output:- r */

let s3='entertainment';
function firstnonrep(){
    let s=s3.split('');
    for (let i = 0; i < s.length; i++) {
       
        if (s3.indexOf(s[i]) == s3.lastIndexOf(s[i])) {
            console.log(s[i]);
            document.write(`<h3> non repeated char is ${s[i]}</h3>`);
            break;  
        }
}
}
firstnonrep();


/*4. WAP to print a string in title case
	input:- 'this is javascript class'
   output:- 'This Is Javascript Class'*/
   let s4='this is javascript class';
   function titlecase(){
    let s=s4.split(' ');
    let re='';
    for (let i = 0; i < s.length; i++) {
        s[i]=s[i].charAt(0).toUpperCase()+s[i].slice(1).toLowerCase();
        re=re+s[i]+' ';

    }
    console.log(re);
    document.write(`<h3>${re}</h3>`);
   }
titlecase();
/*
5. WAP to find longest word in a sentence
	input:- 'this is javascript class'
    output:- javascript */
let s5='this is javascript class';
let re=s5.split(' ');
re.sort((a, b) => b.length - a.length); 
console.log(re[0]);
document.write(`<h3>longest word is ${re[0]}</h3>`);

/*
function longestword(){
    let s=s5.split(' ');
    let rs='';
    for (let i = 0; i < s.length; i++) {
        if (s[i].length>rs.length) {
            rs=s[i];
        }
    }
    console.log(rs);
    document.write(`<h3>longest word is ${rs}</h3>`);

}
longestword();*/

/*	
6. WAP to print Account number
   input:- '12345678987'
   output:- '12*******87' */

let s6='12345678987';
function accountno(){
let m=s6.slice(0,2)+'*'.repeat(s6.length-4)+s6.slice(-2);
console.log(m);
document.write(`<h3>Account number is ${m}</h3>`);
}
accountno();





/*
function accountno(){
    let re='';
    for (let i = 0; i < s6.length; i++) {
        if (i<2 || i>=s6.length-2){
            re=re+s6[i];
        }
        else{
                re=re+'*';
        }
    }
    console.log(re);
    document.write(`<h3>account number is ${re}</h3>`);
}
accountno();


   
/*7. WAP to print Credit-card number
   input:- '1111222233334444'
   output:- '1111-2222-3333-4444'*/

let s7='1111222233334444';
function creditcardno(){
    let re=s7.slice(0,4)+'-'+s7.slice(4,8)+'-'+s7.slice(8,12)+'-'+s7.slice(12);
    console.log(re);
    document.write(`<h3>Credit-card number is ${re}</h3>`);
}
creditcardno();

/*8. WAP to check if 2 strings are anagram or not
	'listen' - 'silent'    anagram(every char of str1 should be there in str2)
*/

let s8='listen';
let s9='silent';
function anagram(){
    let d=s8.split('').sort().join('');
    let d1=s9.split('').sort().join('');
    if (d===d1) {
        console.log(`${s8} and ${s9} are anagram`);
        document.write(`<h3>${s8} and ${s9} are anagram</h3>`);
        
    }
    else{
        console.log(`${s8} and ${s9} are not anagram`);
        document.write(`<h3>${s8} and ${s9} are not anagram</h3>`);
    }
}
anagram();

    


/*9. WAP to remove special character from a string
   input:- 'hello@#hi&'
   output:- 'hellohi' */
   
   function removeSpecialChar(){
    let s9='hello@#hi&';
   let re = s9.replace(/[^a-zA-Z0-9]/g, '');
   console.log(re);
   document.write(`<h3>string after removing special character is ${re}</h3>`);
   }
   removeSpecialChar();
   

   


/*10. WAP to move all the special characters to the end of the string
	input:- 'hello@#hi&'
   output:- 'hellohi@#&'*/
  




</script>
