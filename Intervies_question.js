// interview  question
//  how to execute contest ;call stacks,
// ========================execution context====================
// how to run java script code 
// (global execution context), refer the this variable, refer the ({} =>window object) in browser and (global object) in node js
// javascript is the single thread language

// function execution context
// eval execution context => it is global property of object 


// {} it si run tow phase
// 1. creation phase(or memory creation phase)=> here only variable and function are located memory space
// 2. execution phase(or code execution phase)=> here only code are executed line by line


// example 
let val1= 10;
let val2= 20;
function addTwoNumber(num1,num2){
    let total = num1+num2;
    return total;
}
let result = addTwoNumber(val1,val2);
let result2 = addTwoNumber(30,40);


// ========================global execution context====================> this 
// 2. memory creation phase => val1=undefined, val2=undefined, addTwoNumber=reference to function,result=undefined,result2=undefined
// 3. code execution phase => val1=10, val2=20, addTwoNumber=reference to function,addNumber=30,result=30,result2=70 it make another execution  context its make new execution  context  and  variable environment is send box  is make ,,
// 4. code execution phase => val1=10, val2=20, addTwoNumber=reference to function,addNumber=30,result=30,result2=70 it make another execution  context its make new execution  context  and  variable environment is send box  is make ,, total undefined, num1=undefined, num2=undefined
// 5. code execution phase => val1=10, val2=20, addTwoNumber=reference to function,addNumber=30,result=30,result2=70 it make another execution  context its make new execution  context  and  variable environment is send box  is make ,, total undefined, num1=30, num2=40\
// total is  return the global execution context


//delete when the create global execution context the use  then delete the global execution context
// ========================call stack====================
// 1. global execution context
// 2. function is execute 
function one(){
    console.log("one")
}
function two(){
    console.log("two")
}
function three(){
    console.log("three")
}
one();
two();
three();