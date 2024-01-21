// this  keyword show the current context of the object
// const user={
//     userName: "md ajbullah",
//     price:2500,
//     getName:function(){
//         console.log(`${this.userName},welcome to this website`);
//         console.log(this);
       
//     }
// }
// // user.getName()
// // user.userName="raju"
// // user.getName()
// console.log(this); // Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …} when the this kew word run the browser then it show the window object
// console.log(this); // {} when the this kew word run the node js then it show the empty object


// function sayMyName(){
//     console.log(this);
// }
// sayMyName()// when you call the function then it show the window object



// -------------------arrow function-----------------

const user=() => {
    let userName="Sajan"
    console.log(this);
}
user()// when you call the function then it show the empty object