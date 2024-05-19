//function declaration 
function run(){
    console.log("running");
}
//function call/invoke
run();
// so if i call the function before its creation it will also executed(C++ nehi hai)
// this happens cause of hoisting process by JS engine


//Named function assignment
// stand()--> can't call here
let stand = function walk(){
    console.log('walking');
};
stand();
// now if i call walk it will give me error cause walk is not defined
// if i move stand() bafore its creation it will give me an error cause hoisting supports function declaration not function assignment

// let jump = stand();
// jump();

//anonymous function assignment
let stand2 = function(){
    console.log('walking');
};
stand2();



//function testing 
function sum(a,b){
    return a+b;
}
console.log(sum(1,2))  //3
console.log(sum(1))  //NaN (1+undefine)
console.log(sum())  //NaN
console.log(sum(1,2,4,5,6,7)) //3




//we have some special objects which are called arguments 
function sum1(){
    // console.log(arguments);
    let total=0;
    for(let value of arguments){
        total = total + value;
    }
    return total;
}
let ans= sum1(1,2,3,4,5,6); //its not an array, its object
console.log(ans);


//Rest Operator --> ...
// by using rest operator it creats array
function sum3(num1,...args){
    console.log(num1) //1
    console.log(args) //array of 2,3,4,5,6
}
sum3(1,2,3,4,5,6); //1 goes to num and the rest of the arguments goes under ...args


//Default Parameters
function interest(p,r=5,t=5){
    return p*r*t/100;
}
console.log(interest(1000));
// console.log(interest(1000,undefined,5)) //it is not recommanded it goes under bad parctice



//GETTER SETTER
// getter-> access properties
// setter -> change or modify properties
let person = {
    fName : 'Mayukh',
    lName : 'Ganguly',
    get fullname(){
        return `${person.fName} ${person.lName}`
    },
    set fullname(value){
        if(typeof value !== String){
            throw new Error("what the fuck are u doing");  //its an object 
        }
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
};

// function fullname(){
//     return `${person.fName} ${person.lName}`
// }


// person.fullname='Rahul Kumar';
// console.log(person.fullname);







//Error Handling by try and catch 
try{
    person.fullname = true;
 }
catch(e){
    console.log(e);
}




//Scope-> it means the lifetime of a variable 
// {
//     var a = 5;   //here u can see the difference between let and var
// }
// console.log(a);  //this will print if i use var keyword instead of let
// // now if i put the var keyword under a function the scope of the function is inside the function 
// function run(){
//     var b = 6;
// }
// console.log(b); // this gives error cause if defines inside the function otherwise the scope of var is inside the file





//Reducing array
//print the sum using array
let arr=[1,2,3,4,5];
let total = 0;
for(let value of arr)
    total = total+value;
console.log(total);


//now we are going to reducing it in one line
let totalSum=arr.reduce((accumulator, currentValue) => accumulator+currentValue, 0)
// now in the reduce function there are two things 1.callbackfunction 2.Initialize value
// the zero means we initialize the accumulator value with zero
// now if i remove zero the accumulator stars with the first indexed value which is 1
// and the currentValue starts with second value which is 2 in the case
console.log(totalSum);


let 