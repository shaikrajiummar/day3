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


// let form = document.querySelector("from");
// let username = document.querySelector("#username");
// let useremail = document.querySelector("uesremail");
// let userpassword = document.querySelector("userpassword");

// form.addEventListener("submit",(event)=>{
//     event.preventDefault();


//     let name =username.value;
//     let mail =email.value
//     let password = password.value;

// })


// 27/01/25


// let mainEle= document.createElement("div");
// // mainEle.innerText = "main";
// mainEle.setAttribute("id" , "mainBlock");
// console.log(mainEle);

// let topEle = document.createElement("div");
// // topEle.innerText="top";
// topEle.setAttribute("class" ,"topBLock");
// //console.log(topEle);

// let image = document.createElement("img");
// image src ="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"
// image.width ="300";
// image.height="300";
// image.style.objectFit="cover";

// let bottomEle = document.createElement("div");
// bottomEle.setAttribute("class" ,"bottomBlock");
// //console.log(bottomEle);
// let h1 = document.createElement("h1");
// h1.innerText="CAT";
// let btn = document.createElement("button");
// btn.innerText="view More";

// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);
// bottomEle.appendChild(image);
// mainEle.appendChild(topEle);
// mainEle.appendChild(bottomEle);
// document.body.appendChild(mainEle);
// document.addEventListener("DOMContentLoaded", () => {
//     let mainEle = document.createElement("div");
//     mainEle.id = "mainblock";

//     let topEle = document.createElement("div");
//     topEle.className = "topBlock";

//     let bottomElement = document.createElement("div");
//     bottomElement.className = "bottomBlock";

//     mainEle.appendChild(topEle);
//     mainEle.appendChild(bottomElement);

//     let img = document.createElement("img");
//     img.src = "https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg";
//     img.width="300"
//     img.height="300"
//     img.style.objectFit="cover"
//     topEle.appendChild(img);

//     document.body.appendChild(mainEle);
//     let h1=document.createElement("h1")
//     h1.innerText="CAT"
//     let btn=document.createElement("button")
//     btn.innerText="View More";
//     bottomElement.appendChild(h1)
//     bottomElement.appendChild(btn)
//   });



let form = document.querySelector("form");
let username = document.getElementById("uName");
let password = document.getElementById("uPass");
let check = document.getElementById("check");
let show = document.getElementById("show");
let gender = document.getElementsByName("gender");
// console.log(gender);

// !hiding and showing the password
check.addEventListener("click", (event) => {
    if (event.target.checked == true) {
        password.setAttribute("type", "text");
        SharedWorker.innerText = "hide password";

    } else {
        password.setAttribute("type", "password");
        show.innerText = "hide password";
    }
})
form.addEventListener("submit", event => {
    event.preventDefault();
    let un = username.value;
    let up = password.value;
    let gen = "";
    for (let i = 0; i <= gender.length - 1; i++) {
        // console.log(gender[i].value);
        // console.log(gender[i].checked);
        if (gender[i].checked == true) {
            // console.log(gender[i].value);
            gen += gender[i].value;
        }
    };
    let userDetails = {
        username: un,
        password: up,
        gender: gen

    };
    console.log(userDetails);
    sessionStorage.setItem("userData", JSON.stringify(userDetails))
})