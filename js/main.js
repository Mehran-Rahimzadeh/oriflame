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
        document.getElementById(id_2).classList.add("Active")
   })}
function not_hover(id_1,id_2){
    document.querySelector(id_1).
    addEventListener("mouseleave",function(){
        document.getElementById(id_2).classList.remove("Active");
        document.getElementById(id_2).classList.add("noneaAtive")
    })}
// --------End of hover-Function-----------------------

 
// ---  ----List Icon VS Close icon----------------------
let menuIcon =document.querySelector("div.menuTop>div:nth-of-type(1)>span>a:nth-of-type(1)>button>i:nth-of-type(1)");
let closeIcon =document.querySelector("div.menuTop>div:nth-of-type(1)>span>a:nth-of-type(1)>button>i:nth-of-type(2)");
menuIcon.addEventListener("click",function(){
    this.classList.add("noneActive");
    closeIcon.classList.add("Active")
},false)
closeIcon.addEventListener("click",function(){
    this.classList.remove("Active");
    menuIcon.classList.remove("noneActive")
},false)
// -------End of List Icon VS Close icon-----------------------

// -------nav1------------
// $('.toggle').click(function(){
//     $('.nav').toggleClass("justify-content-end");
//     $('.toggle').toggleClass("text-light");
// });
// -------nav1----------
let arrow = document.querySelector("nav.nav1>div>a.toggle")
let navi = document.querySelector("nav.nav1>ul.nav")
console.log(arrow)
console.log(navi)
arrow.addEventListener("click",function(){
    navi.toggleClass("justify-content-end");
    arrow.toggleClass("text-light");
});


// arrow.click(function(){
//     navi.toggleClass("justify-content-end");
//     arrow.toggleClass("text-light");
// });
let vidopPlayer = document.querySelector("")
let video = document.querySelector(".myVideo")
let playButton = document.querySelector(".overlay-play-button__play")

playButton.addEventListener("click", (e)=> {
    if(video.paused)
    video.play()
    e.target.HTMLElement=" "
    else {
        video.pause()
        e.target.HTMLElement("<i class="bi bi-pause-fill"></i>")
    }
})


HTMLElement
