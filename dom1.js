// let ele = document.createElement("h1");
// ele.innerText="dynamic creation of html element";
// ele.id="demo1";
// ele.setAttribute("id" , "demo1")
// console.log(ele);

// document.body.appendChild(ele);

// let image =document.createElement("img");
// image.src="./tran.jpeg";
// console.log(image);

// document.body.appendChild(image)


let form = document.querySelector("from");
let username = document.querySelector("#username");
let useremail = document.querySelector("uesremail");
let userpassword = document.querySelector("userpassword");

form.addEventListener("submit",(event)=>{
    event.preventDefault();


    let name =username.value;
    let mail =email.value
    let password = password.value;
    
})

