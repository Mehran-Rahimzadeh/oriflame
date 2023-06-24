
// ----------iuser icon change---------
document.querySelector("div.menuTop>div:nth-of-type(1)>span:nth-of-type(2)>a:nth-of-type(1)>i").
addEventListener("mouseenter",function(){
    this.classList.remove("bi-person")
    this.classList.add("bi-person-fill")
})
document.querySelector("div.menuTop>div:nth-of-type(1)>span:nth-of-type(2)>a:nth-of-type(1)>i").
addEventListener("mouseleave",function(){
    this.classList.remove("bi-person-fill")
    this.classList.add("bi-person")
})
//-----------End of  user icon change---------



// -------Best Offers-------
// --------hover-Function---------
function hover(id_1,id_2){
    document.querySelector(id_1).
    addEventListener("mouseenter",function(){
        document.getElementById(id_2).classList.remove("noneActive");
        document.getElementById(id_2).classList.add("active")
   })}
function not_hover(id_1,id_2){
    document.querySelector(id_1).
    addEventListener("mouseleave",function(){
        document.getElementById(id_2).classList.remove("active");
        document.getElementById(id_2).classList.add("noneaAtive")
    })}
// --------End of hover-Function---------
// ----calling hover---
hover("#Inspiration","Inspiration1")
not_hover("#Inspiration","Inspiration1")

// ----End of calling hover---


 
// -------End of Best Offers-------