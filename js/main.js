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

document.querySelector("div.menuTop>div:nth-of-type(1)>span:nth-of-type(1)>a>i")
console.log(document.querySelector("div.menuTop>div:nth-of-type(1)>span:nth-of-type(1)>a>i"))
//-----------End of  iuser icon change---------