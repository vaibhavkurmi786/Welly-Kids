
var tl = gsap.timeline(0.5)

tl.from('.topnav h3', { 
    y:-20,
    opacity:0,
    stagger: .4
    
})
tl.from('.navl h3',{
    x:50,
    opacity:0,
    stagger:0.2
})
tl.from('.navr h3',{
    x:-50,
    opacity:0,
    stagger:0.2
})

tl.from('.navm',{
    y:100,
    opacity:0,
})

tl.from('#kli',{
    x:50,
    opacity:0,
})
tl.from('#li',{
    x:-50,
    opacity:0,
})
tl.from('#star',{
    x:50,
    opacity:0,
})
tl.from('#purple, #orange, #green',{
    y:50,
    opacity:0,
    stagger:0.3
})
tl.from('#triple, #ninja, #thunder',{
    y:50,
    opacity:0,
    stagger:0.3
})
tl.from('#firstlove',{
    // y:50,
    scale:2,
    opacity:0,
    rotation:360,
})
tl.from('#paper',{
    x:50,
    opacity:0,
})
tl.from('.content',{
    y:50,
    opacity:0,
})

tl.from('.secl img',{
    x:100,
    opacity:0,
    scrollTrigger:{
    trigger:'.secl img',
    scroller:`body`,
    markers:true,
    start:"top 20%",
    end:"10% 5%"
}
})

tl.from('.secr h2', { 
    y:50,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
    trigger:`.secr h2`,
    scroller:`body`,
    markers:true,
    start:'center bottom' ,
    
    }
})


// tl.from('#firstlove',{
//     y:50,
//     opacity:0,
//     rotation:360,
// })


