function totalAnimation(){
    var tl= gsap.timeline()
function time(){
    a = 0;
    setInterval(function(){
        a = a + Math.floor(Math.random()*20)
        if(a<100){
            document.querySelector(".loader h1").innerHTML = a +"%"
        }else{
            a = 100
            document.querySelector(".loader h1").innerHTML = a +"%"
        }
    },100)
}
time()

tl.to(".loader h1",{
        scale:1.2,
        delay:1.3
})
tl.to(".loader",{
        top:"-100vh",
        duration:0.7,
})

function animation(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true,
    });
    var circle = document.querySelector(".minicircle")
    function circleMouseScroll(){
        window.addEventListener("mousemove",function(dets){
            document.querySelector(".minicircle").style.transform = `translate(${dets.clientX-10}px,${dets.clientY-10}px)`;
        });
    }
    circleMouseScroll();
    gsap.from("#Cyn",{
        y:-50,
        opacity:0,
        duration:0.7,
        delay:2.5
    })
    gsap.from("#heading",{
        x:200,
        y:200,
        opacity:0,
        duration:0.7,
        stagger:0.3,
        delay:2.5
    })
    gsap.from("#para",{
        x:200,
        y:200,
        opacity:0,
        duration:0.7,
        stagger:0.3,
        delay:2.5
    })
    gsap.from("#menu",{
        x:300,
        fontSize:"2vw",
        duration:0.7,
        delay:2.5
    })
    document.querySelectorAll(".anime").forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            gsap.to(".minicircle",{
                height:40,
                width:40,
                duration:0.5,
            })
    
        })
        elem.addEventListener("mouseleave",function(){
            gsap.to(".minicircle",{
                height:30,
                width:30,
            })
        })
    })
}
animation()
}
totalAnimation()



var rotate = 0;
var diffrot= 0;
document.querySelectorAll(".elem").forEach(function(elem){
    elem.addEventListener("mousemove",function(dets){
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"),{
            opacity:1,
            top:diff-130,
            left:dets.clientX-210,
            rotate: gsap.utils.clamp(-20,20,diffrot),
        })
    })
    elem.addEventListener("mouseleave",function(dets){
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease:Expo,
        })
    })
})