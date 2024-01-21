// 
// const userEmail = "mdajbullahmansuri@gmail.com"; // false
// const userEmail=""//false
const userEmail=[]//true
if(userEmail){
    console.log("Email is valid");
}
else{
    console.log("don't have email");
}

// falsey values
// false, 0, -0, BigInt 0n, null, undefined, NaN, "", NaN   

// truthy values
// "0",'false',[],{},{},function(){},true,'true',1,-1,Infinity,-Infinity,3.14,BigInt(1n),-3.14, " ", "false", "null", "undefined", "NaN", "[]", "{}", "function(){}"

const emptyObj={};
if(Object.keys(emptyObj).length===0){
    console.log("object is empty");
}



// Nullish coalescing operator(??): null and undefined
let val1;
// val1 = 5??10; it chack the safty of value if it is null or undefined then it will assign the value
// val1 = null ?? 10;
// val1 = undefined ?? 10;
val1= null ?? 10??20;
console.log(val1);


// Ternary operator 
// condition ? true : false;
const age = 19;
age>=18 ? console.log("you can vote") : console.log("you can not vote");