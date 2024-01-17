// const tinderUser=new object()// singletone object 
const tinderUser={}//non single ton object 
tinderUser.id="12345"
tinderUser.name="Rahul"
tinderUser.isLoggedIn=false;
console.log(tinderUser);
const regularUser={
    email:"some@gmail.com",
    fullName:{
        USERfullName:{
            firstName:"Rahul",
            lastName:"Kumar"

        }
    }
}//non single ton object
console.log(regularUser.fullName.USERfullName.firstName.lastName);

// combine two object
const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e",6:"f"}
const obj4=(obj1,obj2)
const obj5=Object.assign({},obj1,obj2) // it is static method its returns the modified object to the target object 

console.log(obj5);


const obj3={...obj1,...obj2}// it is spread operator it is used to combine two object
console.log(obj3);
// data base value c
const user =[{
    id:1,
    email:"user@gmail.com",
},
{
    id:1,
    email:"user@gmail.com",
},
{
    id:1,
    email:"user@gmail.com",
}];
user[1].email
console.log(tinderUser);
// console.log(object.keys(tinderUser));
// console.log(object.values(tinderUser));
// console.log(object.entries(tinderUser));
