//ECMA org (ES6)
//JS is both clientside and also serverside (by using node(which is a combination of c++ and js)
//JS engine in chrome is called v8 and in firefox its spidermonkey



console.log('namaste dunia');//print
let a=5; //declaration of variables
console.log(a);
// var can be used globally where let is used locally 
// difference between let and var

const num= 6; //once u declare in const u cant change it 

//primitive types are string, number, boolean, undefined, null; 
 
 let lastName = 'babbar';
 console.log(lastName);
 lastName = 3;
 console.log(lastName); //so this is an example of dynamic typing



//reference types are objects, arrays, functions

//object
let person ={
    firstName: 'mayukh', //key-value pairs 
    age:'24'
};   //example of object creation

console.log(person.age);
console.log(person['age']); // two ways to access an object

//arrays
let rahul=['love','25','true'];
console.log(rahul[2]);
console.log(rahul[0]);
console.log(rahul[3]); //output: undefined
//item overriding is also allowed like rahul[1]=100 so it will replace


//functions

// ********************************************************************************************************************************************
//operators
//arithmatic assignment comparison, bitwise, logical
//arithmatic
console.log(2**10); //2^10 = 1024

 //assignment: ==, +=..
 //comparison: >,<, ===(strict equality), !==...
 //loose equality: == value same
 //strict equality: === data and value both same
 let n=1;
 let str ='1';
 let n1=1;

//Ternary operator: syntax-> cond ? val1 : val2;
//let status= (age>=18) ? "i can vote" : "cannot vote";

//logical(with boolean): AND(&&), OR(||), NOT(!)
//logical(with non-boolean truthy,falsey ): (false || 'ganguly') -> ganguly cause it treats like true and also find the concept of short-circuiting


 //bitwise : 
 //BitwiseAND: 2&3=2
 //BitwiseOR: 2|3=3


//control statements: 
//if-else:its like c++
//switch: same as c++

//loops: for, while, do-while, for-in, for-of
