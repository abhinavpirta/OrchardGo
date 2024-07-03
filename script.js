
// function breakTheText(){
//     var h1 = document.querySelector("#main>#page1>h1");
// var h1Text = h1.textContent;
// var splittedText = h1Text.split("");
// var halfValue = Math.floor(splittedText.length/2);
// var clutter = "";
// splittedText.forEach(function(elem,idx){
//     if(idx<halfValue){
//     clutter += `<span class="a">${elem}</span>`;
//     }else{
//     clutter += `<span class="b">${elem}</span>`;
//     }
// });
// h1.innerHTML = clutter;
// }
// breakTheText()
gsap.from("#main>#page1>h1",{
    y:70,
    duration:2,
    delay : 0.5,
    opacity:0,
    stagger :0.2

})
// gsap.from("#main>#page1>h1 .b",{
//     y:70,
//     duration:2,
//     delay : 1,
//     opacity:0,
//     stagger :-0.2

// })




gsap.from("#main>#page1>h2",{
    y:70,
    duration:2.5,
    delay : 2,
    opacity:0,
    stagger :-0.4

})




function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}
locomotiveAnimation()

function navAnimation(){
    var nav = document.querySelector("nav")
nav.addEventListener("mouseenter",function(){
    let tl = gsap.timeline()
    tl.to("#nav-bottom",{
        height: "20vh",
        duration:0.8,
    })
    tl.to("nav h5",{
        display:"block",
        duration:0.1,

    })
    tl.to("#nav-part2 h5 span",{
        y:0,
        // duration:0.3,
        stagger:{
            amount:0.6
        }
    })

})


var nav = document.querySelector("nav")
nav.addEventListener("mouseleave",function(){
    let tl = gsap.timeline()
  
    tl.to("#nav-part2 h5 span",{
        y:25,
        // duration:0.3,
        stagger:{
            amount:0.2
        }
    })
    tl.to("#nav-part2 h5",{
        display:"none",
        duration:0.1,

    })
    tl.to("#nav-bottom",{
        height: "0vh",
        duration:0.2,
    })

})
}
navAnimation()

function page2Animation(){
    var rightElems = document.querySelectorAll(".right-elem")
rightElems.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to(elem.childNodes[3],{
            opacity:1,
            scale:1,
            
        }) 
        
    }) 

    elem.addEventListener("mouseleave",function(){
        gsap.to(elem.childNodes[3],{
            opacity:0,
            scale:0,
        }) 
    }) 

    elem.addEventListener("mousemove",function(dets){
        gsap.to(elem.childNodes[3],{
            x:dets.x - elem.getBoundingClientRect().x-90,
            y:dets.y - elem.getBoundingClientRect().y-215,
    
        })
    }) 
})

}
page2Animation()