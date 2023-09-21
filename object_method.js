let  emp={
    id : 101,
    name : 'mdajbullah',
    age : 24
}; 
let keys =Object.keys(emp);// keys function retuns value in form of array
console.log(keys)

let values =Object.values(emp);// values function retuns value in form of array
console.log(values)

let entries =Object.entries// entries function retuns value in form of array
console.log(entries)
//Object.freeze(emp); // freeze function is used to prevent any modification of the object
Object.seal(emp); // seal function is used to prevent any modification of the object but it is allow to change the value of obect 
emp.id=100; // assign value to key that we want to change
console.log(emp)
// Object.delete=name; // delete
console.log(emp)
let o=Object.assign(emp, {id:1000});
console.log(o)