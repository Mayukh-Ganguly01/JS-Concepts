// objects in js
// which has some properties and behaviour (we can add behaviour by using functions)
// {} -> its called object litral
// let a = {} -> we made an object named a which is an empty object 
console.log('lets start hello')

//object creation
let rectangle1={   
    length:1,       // its a property
    breadth: 2,

    draw: function(){      // its the behaviour as well as function 
        console.log('draw');  // when we are creating a function inside the function its called method
    }
};

// let rectangle2={   
//     length:1,       
//     breadth: 2,

//     draw: function(){      
//         console.log('draw');
//     }  
// };      so we need functions which creates objects

// we can create functions by using factory functions and consturctor function

// factory function
function createRectangle(len, bre){
    return rectangle1={   
        length:len,       // its a property
        breadth:bre,
    
        draw: function(){      // its the behaviour as well as function 
            console.log('draw');  // when we are creating a function inside the function its called method
        }
    };
      // so this function creates an object and returns it
}

let rectangleObj1=createRectangle(5,4);
let rectangle2=createRectangle(2,3);
let rectangle3=createRectangle(4,6);

// camelcase notation -> numberOfStudents
//constructor function -> we follow here pascal notaion -> first letter of every word is capital
// this function initialize/defines the properties/methods 
function Rectangle(len, bre){
    this.length = len;
    this.breadth = bre;
    this.draw = function(){
        console.log('drawing');
    }
}

// object creation using constructor
// new keyword gives me empty object
let rectangeObject=new Rectangle(2, 4);


//Dynamic Nature of Objects
rectangeObject.color = 'yellow';  //add a new property in the object
// console.log(rectangeObject); 
delete rectangeObject.color; // delete the property




// functions are also objects***
// ` this is backtick character



//consturctor property
// rectangelObject -> Rectangle -> Function
let Rectangle1= new Function(
'length', 'breadth',
`this.length = ${length};
this.breadth = ${breadth};
this.draw = function(){
    console.log('drawing');
}`);
//object creation using rectangle1
let rect = new Rectangle1(9,10);
console.log(rect);





//Functions are OBJECTs in javascript
// objects has some properties and methods, we can access them by using . operator 
// ex-> rect.length/draw/breadth
// same as we can do for functions ex-> Rectangle.call/length/bind





//Types in JS
// Primitive/value types -> number, string, Boolean, Undefined, Null
// Reference tyepes or Objects -> Functions, Objects, Arrays
// In case of primitive type a copy is created like (a=10; b=a; a++ then a=1 and b=0)
// In case of reference type we are pointing towards the same object (a={value: 10}; b=a; a++ then a=1 and b=1 )
// Primitives are copied by their values;
// references are copied by their addresses;





// Iterating throught objects
// we are using for-of and for-in
let rectangle = {
    length:6,  //key:value
    breadth:4,
    color: 'blue'
};
// for-in loop(used in objects)
for(let key in rectangle){
    // keys are reflected through key variable
    // values are reflected through rectangle[key]
    console.log(key,rectangle[key]);  
}

//for-of loop 
// we can use only iterables(arrays, maps etc) but we can also use in objects by using this hack
// Object.keys for itrate all keys 
// Object.entries for key:value pair
for(let key of Object.entries(rectangle)){   // we made array of keys
    console.log(key);      
}

// we can also find some properties are present in the object or not
if('color'in rectangle){
    console.log('present');
}
else console.log('absent');






// Object Cloning
// we can perform object cloning by using
// 1. Itration
// 2. Assign (let dest = object.assign({},src));
// 3. Spread (let dest = {...src};)
let src={
    a:10,
    b:20,
    c:30
}
let dest={}
// itretion
for(let key in src){
    dest[key]=src[key]
}
// console.log(dest);

//Assign
let dest1 = Object.assign({},src);
// console.log(dest1);

// Spread
let dest2={...src};
// console.log(dest2);





// Garbage collection
// we have no control over GC runs automatically in the background



