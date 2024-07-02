function page6Animation(){
    gsap.from("#btm6-part2 h4",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:"#btm6-part2",
            scroller:"body",
            // markers:true,
            start:"top 80%",
            end:"top 10%",
            scrub:"true",
        }
    })
    gsap.from("#btm6-part3 h4",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:"#btm6-part3",
            scroller:"body",
            // markers:true,
            start:"top 80%",
            end:"top 10%",
            scrub:"true",
        }
    })
    gsap.from("#btm6-part4 h4",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:"#btm6-part4",
            scroller:"body",
            // markers:true,
            start:"top 80%",
            end:"top 10%",
            scrub:"true",
        }
    })
}
page6Animation()

