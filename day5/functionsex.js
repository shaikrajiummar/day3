//without parameters
// function demo() {
//     console.log("functions is executing00;")

// };
// demo();

//with parameters
//!function with parameters and argumets
//let a=10;
// 5,6
// 8,9
// 3,4
// function add(a,b){
//     console.log(a);
//     console.log(b);
//     console.log(a+b);
// }
// add(5,6)

//type of functions
// 1.named Functions,
// anonymus functions,
// function expreesion
// IIFE(immidiate invoke function expression)
// arrow function
// hitgher order function
//callback functio//-closure

//named function
function test() {
    console.log("named function");
}
text()

//anonymus function(a function which does not have name for it ,it cannot be excuted by itself)
// function(){

// }
// ();
//function expression (an anoaymus function body is assinged aas a value to same variable )
// let x = function(){
//     console.log("anonymus is not exxcuting but ")
// }
// ();
// IIFE(it can be invoked one time)
(function () {
    console.log('anonymus')
}
)()
// arrow function(it is introduced in es6 feature
//it concise  the normal
//-()=> {};
// function demo(){
// let x =()=>{console.log("arrow functiom")};
// x();
let x =(a,b)=>(console.log(a,b));
x(6,5);

let  y= a=>console.log(a)
y(4)
//implicit return and explicit returns
//return statement used to exppressions
//implicitility default by  taken  
function test1(a,b){
    return a+b;

}console.log(test1(5,5))

let c= (a,b) =>{return a*b}
console.log(c(5,5))

let d= (a,b) =>a+b
console.log(d(5,5))