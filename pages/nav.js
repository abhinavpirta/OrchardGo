function navAnimation(){
    var nav = document.querySelector("nav")
nav.addEventListener("mouseenter",function(){
    let tl = gsap.timeline()
    tl.to("#nav-bottom",{
        height: "20vh",
        duration:0.4,
    })
    tl.to("nav h5",{
        display:"block",
        duration:0.1,

    })
    tl.to("#nav-part2 h5 span",{
        y:0,
        // duration:0.3,
        stagger:{
            amount:0.1,
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
            amount:0.1,
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






