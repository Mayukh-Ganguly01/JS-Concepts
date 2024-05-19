//math
Math.random();
Math.PI
Math.round(1.5);
Math.max(3,6,7,9);
Math.min(4,3,8,1);
Math.abs(2);  //absolute value(read mdn)
Math.abs(-2); //


//Strings
// In JS their are two types of strings 
// 1. Primitive String(let lastName = 'mayukh');
// 2. Object String(let lastName = new string('mayukh');)

let lastName = 'mayukh'; //string type
let firstName = new String('ganguly'); //object type
// then type type of these two variables
//when we add . operator in the primitive type JS treat that as an object
//type these in the consoles
// firstName.startsWith('gang')
// true
// lastName.endsWith('kh')
// true
// lastName.indexOf('y')
// 2
// lastName.length
// 6
// lastName.includes('yu');
// true
// lastName.toUpperCase();
// 'MAYUKH'
// lastName.toLowerCase();
// 'mayukh'
// lastName.trim(); // this helps to trim the black spaces '    mayukh  '
// 'mayukh'
// lastName.replace('mayu', 'gandu');
// 'gandukh'
// and many methods are available in mdn
let message = 'this is my first message';
let countWords = message.split(' ');
// console.log(countWords); //5
// console.log(countWords[4]); //message
// read how to use singlequote in string(escape sequence)




//Template Literal
// by usig this we can show our output whatever we want
let message1 = 
`Hello ${lastName}  
my name
is
mayukh`     // it basically a place holder
console.log(message1);




//Date&Time
let date = new Date();
console.log(date);
let date1 = new Date('20 june 1998 7:15');
console.log(date1);
let date2 = new Date(1998, 5, 20, 7); //month indexing form 0
console.log(date2);
// for more information type -> date.




//Arrays //its reference/object type
//creation
let numbers = [1,4,5,7];
console.log(numbers);
// insertions
numbers.push(9)   // at last
console.log(numbers);
numbers.unshift(8) // at begining
console.log(numbers);
numbers.splice(3, 0, 'a','b') // at middle (indexNumber, deleteCount after insertion, insert)
console.log(numbers);

//Searching
console.log(numbers.indexOf(7)); //when the element is not present the output will be -1
//we want to check if a number exist in an array
// if(numbers.indexOf(10)!=-1) but this is not the right way
console.log(numbers.includes(7)); //true
console.log(numbers.indexOf(4, 2)) //(element to search, starting from the index)  2

//Now do this over references/objects
let courses=[
    {no:1, naam: 'mayukh'},
    {no:2, naam: 'rahul'},
    {no:3, naam: 'gandu', skinColor : 'dark'}
]
console.log(courses);
// now if we need to search in objects we cant use indexOf/incluedes functions cause they works on primitive types we compare value to value
// and here objects, the references changes here 
// so we use callback functions
let course = courses.find(function(course){
    return course.naam === 'mayukh';
})
console.log(course);
//we can write this in a better way by using arrow function
let course1 = courses.find(course1 => course1.naam === 'rahul');
// for writing in arrow function we will follow the steps
// 1. remove the 'function' and writedown arrow
// 2. if the parameter is single then remove the () brackets
// 3. if the condition is single then remove {} bracket and return
// 4. write them in the single line
console.log(course1);





//Remove Element
numbers.pop()// from end
console.log(numbers)

numbers.shift() //from beginning
console.log(numbers)

numbers.splice(3,2) // from middle(index, no. of elements you want to delete)
console.log(numbers)




//Emptying an Array
// let numbers1=[1,2,3,4,5]
// // numbers1=[]; we can't do this cause this refers to empty string so the string initialized before exists
// numbers1.length = 0; // this one is used generally
// console.log(numbers1);
// numbers1.splice(0, number.length) //we can use this also




//combining and slicing array
let first=[1,2,3]
let second=[4,5,6]
let combine = first.concat(second)
console.log(combine)

let scli = combine.slice(1, 5) //(starting index, ending index-1)
console.log(scli) //in full slicing their exist a copy of the whole array
   
//do combining and slicing on objects 


//Spread Operator
let first1 = [1,5,9]
let second1 = [4,2,8]
let combine1 = [...first1,'a', ...second1];  //another method of combining(the three dots are called spread operator)
console.log(combine1) 

//we can do copy using this operator let copy = [...combine1]






//iterating an array
let arr = [10,20,30,40,50]
for(let value of arr){    //for-of loop
    console.log(value);
}
console.log("*******************************************")
arr.forEach(function(num){   //forEach loop
    console.log(num);
})
// arr.forEach(num => console.log(num)); // using arrow function




//joining and split arrays
const joined = arr.join("+")
console.log(joined);
let message2 = "this is my second message"
let parts = message.split(' '); //this creates an array
console.log(parts);




//sorting arrays
let notSort = [400, 2000,10000, 200, 100, 900, 1000] 
notSort.sort(); //but u know the output will be [100,1000,200....]
// so if u want to sort according to numbers u have to apply perdicate function
notSort.sort(function(a, b) {
    return a - b;
  });
  console.log(notSort);
// console.log(notSort)
// notSort.reverse()  //this gives me the reverse of it





//filtering arrays
let numbbb=[1,-9,8,-2]
let filtered = numbbb.filter(function(numb){
    return numb>0;
})
console.log(filtered);





//Mapping
// let arr2 = [78,34,97,49]
// let items = arr2.map(function(value){
//     return 'student_no' + value;
// })
// console.log(items)

// mapping with objects
let numb3 = [1,-2,-6,30]
let filters = numb3.filter(value1 => value1>0)
let items1 = filters.map(function(num0){
    return {value1:num0}
    
})
console.log(items1)

//chaining
//  
// let items1 = numb3
            //.filter(value1 => value1>0)
            //.map(num0 => {value1:num0})





