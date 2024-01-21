// immediately invoked function expression(IIFE)
// syntax: (function(){})();
(function md(){
    // name iife function
    console.log("hello world");
})(); //it is iife function

// those function immediately invoked function expression(IIFE) which is not declare the function name

//through the iife function we can solve the global pollution problem through the iife function we can not access the function from the outside of the function
(()  =>{
    console.log("hello world");
})(); //it is iife function


((name) => {
    // simple iife function
    console.log(`hello world  ${name} is good persion and soda bottle is good `);
})("raju");
// how two write tow iife function in one line
(function(){
    console.log("hello world");
}()); //it is iife function