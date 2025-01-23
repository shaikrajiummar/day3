//settimeout
//set interval
//promise 
//promise is a object which representedn even ruak\l complentation
//sates of promise :=
//pending state 
//fulfulled state
//rejeacted state
//async & await

// const { reject } = require("async");

// let p1 = new Promise(()=>{});
// console.log(p1);
// let p2 = new Promise((resolve , reject)=>{
//     reslove("Sucess");

// });
// console.log(p2);

// let p3 = new Promise((reslove ,reject)=>{
//     reject("failure");

// });
// console.log(p3);
// let p2 = new Promise((reslove, reject) => {
//     reslove("Sucess");

// });
// p2.then((res) => {
//     console.log(res);

// }).catch(err => console.log(err))
//     .finally(() => { "final" })

// let p3 = new Promise((reslove, reject) => {
//     reject("Failure");

// });
// p3
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
//     .finally(() => console.log("final"))




//API FECTHING
// function fetchusers() {
//     let response = fetch('https://jsonplaceholder.typicode.com/users');
//     response.then(res => {


//         response.then(json => console.log(json))
//         return res.json().then(data => {
//             console.log(data);
//         })
//     })
//         .catch(err => console.log(err))
// }
// fetchusers();

//! async & await
// function demo()
// {
//     console.log("start");
//     console.log(10);
//     console.log(20);
//     return;
//     console.log(30);
//     console.log("end");
// }
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        reslove("Succes")

    }, 4000);
});
async function demo() {
    console.log("start");
    let x = await p;
    console.log(x);
    console.log("end");
}



async function fetchusers() {

    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
}
fetchusers()