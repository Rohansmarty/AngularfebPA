function strvse(){
    let s1 = 'sachin';
    let rvs = '';
    for (let i = s1.length - 1; i >= 0; i--) {
       rvs = rvs + s1.charAt(i);
    }
    console.log(rvs);
    document.getElementById('output').innerHTML = `<h3>${rvs}</h3>`; 
}

function revword(){
    let s2 = 'This is javascript class';
    let words = s2.split(' ');
    let rs = '';
    for (let i = words.length - 1; i >= 0; i--) {
       rs = rs + words[i] + ' ';
    }
    console.log(rs);
    document.getElementById('output').innerHTML = `<h3>${rs}</h3>`; 
}


function firstnonrep(){
    let s3='entertainment';
    let s=s3.split('');
    for (let i = 0; i < s.length; i++) {
       
        if (s3.indexOf(s[i]) == s3.lastIndexOf(s[i])) {
            console.log(s[i]);
            document.getElementById('output').innerHTML = `<h3> non repeated char is ${s[i]}</h3>`;
            break;  
        }
}
}


function titlecase(){
    let s4='this is javascript class';
    let s=s4.split(' ');
    let re='';
    for (let i = 0; i < s.length; i++) {
        s[i]=s[i].charAt(0).toUpperCase()+s[i].slice(1).toLowerCase();
        re=re+s[i]+' ';

    }
    console.log(re);
    document.getElementById('output').innerHTML = `<h3>${re}</h3>`;
}


function longestword(){
    let s5='this is javascript class';
    let re=s5.split(' ');
    re.sort((a, b) => b.length - a.length); 
    console.log(re[0]);
     document.getElementById('output').innerHTML =`<h3>longest word is ${re[0]}</h3>`;
}


function accountno(){
 let s6='12345678987';
let m=s6.slice(0,2)+'*'.repeat(s6.length-4)+s6.slice(-2);
console.log(m);
document.getElementById('output').innerHTML =`<h3>Account number is ${m}</h3>`;
}


function creditcardno(){
    let s7='1111222233334444';
    let re=s7.slice(0,4)+'-'+s7.slice(4,8)+'-'+s7.slice(8,12)+'-'+s7.slice(12);
    console.log(re);
    document.getElementById('output').innerHTML =`<h3>Credit-card number is ${re}</h3>`;
}



function anagram(){
let s8='listen';
let s9='silent';
    let d=s8.split('').sort().join('');
    let d1=s9.split('').sort().join('');
    if (d===d1) {
        console.log(`${s8} and ${s9} are anagram`);
        document.getElementById('output').innerHTML =`<h3>${s8} and ${s9} are anagram</h3>`;
        
    }
    else{
        console.log(`${s8} and ${s9} are not anagram`);
        document.getElementById('output').innerHTML =`<h3>${s8} and ${s9} are not anagram</h3>`;
    }
}



function removeSpecialChar(){
    let s9='hello@#hi&';
   let re = s9.replace(/[^a-zA-Z0-9]/g, '');
   console.log(re);
   document.getElementById('output').innerHTML =`<h3>string after removing special character is ${re}</h3>`;
}



function moveSpecialChar(){
    let s10='hello@#hi&';
     let re=s10.replace(/[^a-zA-Z0-9]/g,'')+s10.replace(/[a-zA-Z0-9]/g,'');
     console.log(re);
   document.getElementById('output').innerHTML =`<h3>string after moving special character to end is ${re}</h3>`;
}