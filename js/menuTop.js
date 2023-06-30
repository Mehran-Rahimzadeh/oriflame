// ----------iuser icon change-----------------------------
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
//-----------End of  user icon change---------------------------------


// --------hover-Function-----------------------------
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
// --------End of hover-Function-----------------------

 
// ---  ----List Icon VS Close icon----------------------
let menuIcon =document.querySelector("div.menuTop>div:nth-of-type(1)>span>a:nth-of-type(1)>button>i:nth-of-type(1)");
let closeIcon =document.querySelector("div.menuTop>div:nth-of-type(1)>span>a:nth-of-type(1)>button>i:nth-of-type(2)");
menuIcon.addEventListener("click",function(){
    this.classList.add("noneActive");
    closeIcon.classList.add("active")
},false)
closeIcon.addEventListener("click",function(){
    this.classList.remove("active");
    menuIcon.classList.remove("noneActive")
},false)
// -------End of List Icon VS Close icon-----------------------

