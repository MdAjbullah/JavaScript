// control-flow(logic control)
// if, else, else if, switch, for, while, do while, break, continue;
// if statement
// if(condition){// true 

// }
// if(true){

// }
// if(false){
// // any condition is not execute 
// }
// const isloggedin=true  //here = is assignment  operator that assign value to variable
// const temperature=45;
// if(temperature<50){
//     console.log("it's very hot outside");
// }
// else{
// console.log("it is very hot outside");
// }
// shorthand notation
// const balance=1000;
// if(balance >100)console.log("test"); // it is inpilicit scope
// ============nesting====================

const userLoggedIn=true;
const userDebitcard=true;
const loggedInViaEmail=false;
const loggedInViaFacebook=true;
if(userLoggedIn && userDebitcard){
    console.log("aloow to buy ");
} 

if(userLoggedIn || loggedInViaEmail || loggedInViaFacebook){
    console.log("allow to buy");
}
