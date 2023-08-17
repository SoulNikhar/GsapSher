
const scroll = new LocomotiveScroll({
    el:document.querySelector('.main'),
    smooth:true
});

var t1 = gsap.timeline()

t1.to(".main",{
    y:"100vh",
    duration:0,
    scale:0.6
})
t1.to(".main",{
    y:"30vh",
    duration:1,
    delay:1,
    scale:0.6,
})
t1.to(".main",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:0.8
})