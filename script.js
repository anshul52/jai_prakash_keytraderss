
//---------------responsive nav bar-----------
var hm1 = document.querySelector("#hm1")
var hm2 = document.querySelector("#hm2")
var hm3 = document.querySelector("#hm3")

var hamburger = document.querySelector("#hamburger");
var side_nav = document.querySelector("#side_nav");
let flag = true;

hamburger.addEventListener("click",function(){
    if(flag){
        side_nav.style.left = "0%";
        flag =!flag 
        hm1.style.left = "15%"
        hm1.style.top = "15%"
        hm1.style.rotate = "48deg"
        hm2.style.opacity = 0
        hm3.style.rotate = "-48deg"
        hm3.style.left = "5%"
        hm3.style.top = "90%"        
    }else{
        side_nav.style.left = "100%";
        flag =!flag 
        hm1.style.left = "0%"
        hm1.style.top = "0%"
        hm1.style.rotate = "0deg"
        hm2.style.opacity = 1
        hm3.style.rotate = "0deg"
        hm3.style.left = "0%"
        hm3.style.top = "87%"
    } 
});

document.querySelector("#contact_id").addEventListener("click",function(){
    side_nav.style.left = "100%";
        flag =!flag 
        hm1.style.left = "0%"
        hm1.style.top = "0%"
        hm1.style.rotate = "0deg"
        hm2.style.opacity = 1
        hm3.style.rotate = "0deg"
        hm3.style.left = "0%"
        hm3.style.top = "87%"
})


// -------------nav anim--------------------

gsap.to("#nav", {
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start:"500% 20%",
        end:"bottom 20%",
        scrub: true
    },
    backgroundColor:'#fff'
})

// ----------------page3 (circlr anim)----------

const rotatingDiv = document.querySelector('#circle');
var keyslist= document.querySelector('#keyslist');
let rotationAngle = 0;
let keyImageSlide = 0;

document.querySelector("#button1 span").addEventListener('click',function(){
    rotationAngle += 45;
    keyImageSlide += 14;
    if(keyImageSlide === 14){
        reachStart();
    }
    keyslist.style.left = keyImageSlide + 'vw';  
    rotatingDiv.style.transform = `rotate(${rotationAngle}deg)`;
})
document.querySelector("#button2 span").addEventListener('click',function(){
    rotationAngle -= 45;
    keyImageSlide -= 14;
    if(keyImageSlide === -112){
        reachEnd();
    }
    keyslist.style.left = keyImageSlide + 'vw';  
    rotatingDiv.style.transform = `rotate(${rotationAngle}deg)`;
})

function reachEnd(){
    keyImageSlide = 0;
}
function reachStart(){
    keyImageSlide = -98;
}

// ----------------page6 (testimonial anim)----------

var ts = document.querySelector('#testimonialsSlide');
var psd= document.querySelector('#pointsliderdiv');
let countTS = 0;
let psdCnt =0;
document.querySelector("#buttonsss1").addEventListener('click',function(){

    
    psdCnt -=14
    if(psdCnt === -14){
        psdEnd()
    }
    psd.style.left= psdCnt + '%'; 

    countTS += 100;
    if(countTS === 100){
        TreachStart();
    }
    ts.style.left = countTS + 'vw';  
})

document.querySelector("#buttonsss2").addEventListener('click',function(){


    psdCnt +=14
    if(psdCnt === 98){
        psdStart()
    }
    psd.style.left = psdCnt + '%';  
  

    countTS -= 100;
    if(countTS === -700){
        TreachEnd();
    }
    ts.style.left = countTS + 'vw';  
})

function psdEnd(){
    psdCnt = 84;
}
function psdStart(){
    psdCnt = 0;
}

function TreachEnd(){
    countTS = 0;
}
function TreachStart(){
    countTS = -600;
}

function movingTestimonials(){
    document.querySelector("#buttonsss2").click();
}

setInterval(movingTestimonials,7000);
