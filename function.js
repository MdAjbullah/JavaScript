// function sayMyname(){ 
//     console.log("h");
//     console.log("j");
//     console.log("t");
//     console.log("b");
    

// }
// sayMyname()
// function addTwoNumber(number1,number2){// when you make a function and defined the function the you can say parameter 
//     console.log(number1+number2)
// }const result=addTwoNumber(5,6)
// console.log("result:", result);
// addTwoNumber(5,"6")
// addTwoNumber("5",6) // when you call the function the then you can say tha argument
// addTwoNumber -- this type of function show the this is exist is alo known as refrence of the 
// function addTwoNumber(number1,number2){
//     // let result=number1+number2
//     // console.log("md")//this line is expected
//     // return result
//     return number1+number2// this method save the memory
//    // console.log("md");// when you once return the value the other and below any code line is no execute the value   
// }
// let result=addTwoNumber(5,6)
// console.log("result:",result );
function loginUserMessage(userName="sada"){
    // if(userName===undefined)
    if(!userName){
        console.log("please enter a user name");
        return;
    }
    return`${userName} just logged in`
}
// console.log(loginUserMessage("md Ajbullah"))
console.log(loginUserMessage());// when you send the empty parameter then you can get the undefined value.


// another  situation for parameter shoppingCart// we don`t know how many parameter we need to pass

// function calculateCartPrise(value1,value2,...number1){//(.... this symbol is known as rest operator and spread  operator is known as (...)
//     return number1

// }
// console.log(calculateCartPrise(8,9,6)); // it change the form of array
//  console.log(calculateCartPrise(8,9,6,7,8,9,6,7,8,9,6,7,8,9,6,7,8,9,6,7,8,9,6,7,8,9,6,7,8,9,6,7,8,9,6,7,8,9,6,7,8,9,6,7)); // it change the form of array
//  const user={
//     userName: "md ajbullah",
//     price:"2500"
//  }// this object how to pass in function
 function handleObject(anyObject){
     console.log(`userName is ${anyObject.userName} and price is ${anyObject.price}`);
 }
 handleObject( user={
    userName: "md ajbullah",
    price:"2500"
 });
 const myNewArray =[200,400,500,600]
