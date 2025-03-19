
let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];



/*
1. declare array of employees & sort them in ascending order (empId)
*/

let est=employees.sort((a, b) =>  a.eId - b.eId);
console.log(est);


/*
2. declare array of employees & sort them in ascending order by name.
*/

let esn=employees.sort((a, b) => a.name.localeCompare(b.name));
console.log(esn);

/*
3. declare array of employees & filter the employees whose sal>6000;
*/
let es=employees.filter((a) =>a.sal>6000 );
console.log(es);

/*
4. declare array of employees & increase sal of every employee by 500;
*/

let esal=employees.map((a) =>{
   // let c=a
     a.sal=a.sal+500
     return a;
});
console.log(esal);

/*
5. declare array of employees & add "comp:ibm" to every employee;
*/
let escomp=employees.map((a) => {
    a.comp="ibm";
    return a;

});
console.log(escomp);


/*
6. convert array of letters to array of words
		const inputArr = [ 
				'b', 'a', 'k', 'e', '',
				'c', 'a', 'k', 'e', '',
				'e', 'a', 't'
				];
	   output = ['bake','cake','eat'];
*/
let inputArr = [ 
    'b', 'a', 'k', 'e', '',
    'c', 'a', 'k', 'e', '',
    'e', 'a', 't'
    ];
let newArr = inputArr.map(char => char == '' ? ' ' : char);
let words = newArr.join('').split(' '); 
console.log(words);
   

/* let o=inputArr.join('');
    let ol=o.slice(0,4)+" "+o.slice(4,8)+" "+o.slice(8);
    let oll=ol.split(' ');
console.log(oll); */


   

/*
7. add Dept info for each employee
*/
   employees = [{eId: 101, name: "sanjay", sal: 5000, gender: "male" },
				{ eId: 104, name: "reena", sal: 8000, gender: "female" }]
	departments = [{ eId: 101, dept: "sales" },
				{ eId: 104, dept: "marketing" }]
    let esdept=employees.map((a) => {
                    let b=departments.find((b) => b.eId == a.eId);
                   // console.log(b)
                   // let c=[];
                   // console.log(c);
                   // c=a;
                   //console.log(c.dept);
                    a.dept=b.dept;
                    return a;
                    
 });
 console.log(esdept);


/*
8. declare array of employees & groupBy employees-name
    sample output: {
		'sanjay' : [{},{}],
		'alok' : [{}]
	}
*/
let groupdedData = Object.groupBy(employees, (emp) => emp.gender);
    console.log(groupdedData)


/*
9. intersection of 2 number arrays
*/
let arr1 = [10, 20, 30, 40, 50];
let arr2 = [30, 40, 50, 60, 70];
//console.log(arr2.includes(arr1))
const intersection = arr1.filter( (num) => {
    //console.log(num);
    return arr2.includes(num)});
console.log(intersection);

/*
10. WAP to print the occurance of each elements 
    input = [10,20,30,40,50,10,30,50]
	output = {10:2, 20:1, 30:2 , 40:1, 50:2}
*/
let input = [10, 20, 30, 40, 50, 10, 30, 50];
let result=input.reduce((obj, num) => {
   // console.log(obj, num)
    obj[num] = obj[num] ? obj[num] + 1 : 1;
    return obj;
}, {});
console.log(result);