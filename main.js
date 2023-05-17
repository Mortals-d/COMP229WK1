import {halfOf} from "./lib.js"; 
import {multiply} from "./lib.js"; 
console.log(halfOf(84))
console.log(multiply(21,2))

//arrow function

//function sum1(a,b){return a+b}
const sum1 = (a,b)=>{return a+b}
let result = sum1(1,2)
console.log(result)
const sum2 = (a,b)=>a+b;
console.log(sum2(2,20))

//let and const

function reinitConst1(){
    let me1 = 1;
    console.log(me1);
    me1 = 2; 
    console.log(me1);
 }
 
 reinitConst1();
// function reinitConst(){
//     const me = 1;
//     console.log(me);
//     me = 2; 
//     console.log(me);
//  }
// reinitConst();

//default
console.log("Default values:")
function add(x, y = 0) {
    console.log(x + y);
 }
 add(1);
 add(1,2);

//rest
function userFriends(user, ...friends) {
    console.log(user + ' has ' + friends.length + ' friends');
 }
 userFriends('User', 'Bob', 'Alice');


 //spread
 function userTopFriends(firstFriend, secondFriend, thirdFriends) {
    console.log(firstFriend);
    console.log(secondFriend);
    console.log(thirdFriends);
 }
 
 userTopFriends(...['Alice', 'Bob', 'Michelle']);


 function parent() {
    const message = 'Hello World';
 
    function child() {
       alert (message);
    }
 
    child();
 }
 parent();
 
