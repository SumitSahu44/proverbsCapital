

function revealToSpan(){
    document.querySelectorAll(".reveal")
    .forEach(function(elem){
    var parent=document.createElement("span");
    var child=document.createElement("span");

    parent.classList.add("parent");
    child.classList.add("child");

    child.innerHTML=elem.innerHTML;
    parent.appendChild(child);

    elem.innerHTML="";
    elem.appendChild(parent);
})
}
revealToSpan();

var t2=gsap.timeline();

t2.from(".child span",{
    // x:200,
    delay:1,
    opacity:0,
    stagger:0.2,
    duration:1.4,
    ease:Power3

})
.to(".parent .child",{
    y:"-100%",
    duration:1,
    ease:Circ.easeInOut
})
.to(".black",{
    height:0,
    duration:1,
    ease:Expo.easeInOut
})
.to(".green",{
    height:"100%" ,
    top:0,
    duration:1,
    delay:-1,
    ease:Expo.easeInOut
})
.to(".white",{
    height:"100%",
    duration:1,
    delay:-0.8,
    ease:Expo.easeInOut
})
.to(".main",{
    overflowY:"visible",
    delay:-.5,
    ease:Expo.easeInOut
})

// nav bar

let menu=document.querySelector("#nav i");
let close=document.querySelector("#full i");

let first=gsap.timeline()

first.to("#full",{
    right:0,
    duration:0.5
})

first.from("#full h4",{
    x:150,
    duration:0.6,
    stagger:0.2,
    opacity:0
})

first.from("#full i",{
    opacity:0
} )


first.pause()


menu.addEventListener("click",function(){
    first.play()
})

close.addEventListener("click",function(){
    first.reverse()
})