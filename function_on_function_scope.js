// nested function scope
// closer  it technically means that the function is bind together with its lexical scope.(bom)
// function one(){
//    const userName="md ajbullah"
//     function two(){
//         const website="www.google.com"
//          console.log(userName);
//     }
//     // console.log(website);
//     two()
// }
// one()
// -------------------hosting concept-----------------
console.log(addOne(5))
function addOne(number){
    return number+1
}
// addTwo(5) //if this type of function is call then it is throw the error because this type of function is not hoisting it store the value like variable 
const addTwo = function(number){
    return number+2
}
addTwo(5) 


