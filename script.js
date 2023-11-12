// alert("Heelo");

// 1.) I need to get current position of the mouse every time it moves (x axis , y axis )
// 2.) I need to set those values to the circular div 

// ===========================

// every times mouse moves we should ger notified = mouseMove listener
// every time listener gets notified , we need to get the values for x and y axis and then update it to the circle

window.addEventListener('mousemove' , (details) => {

    let circleDiv = document.querySelector("#circle")

    let xVal = details.clientX  ;
    let yVal =  details.clientY;

    setTimeout(()=> {
        circleDiv.style.top = `${yVal}px` ; 
        circleDiv.style.left = `${xVal}px` ; 
    } , 100)

})




// gsap me final position toh  gsap.to() hoti hy 
// gsap me initial position jo hy wo gsap.from() sy start hoti hy  

// gsap.from(element , {})

// Timeline animation yani ke 1 ke bad 1 animate hoto uske liye timeline animation ka use hoga

const removeall_animation = document.querySelector("#removeall-animation")
const svgElem = document.querySelector("svg")

let tl = gsap.timeline() ;

removeall_animation.addEventListener('click' , () => {
    tl.reverse() ;    
    setTimeout(() => {
        svgElem.classList.add('animate')
    } , 3000)
})


tl
.from("#wrapper" , {
    duration : 4 ,
    scale : .7 ,
    ease : "Expo.easeInOut" ,
    opacity : 0 ,
})
.from("#whitestrip" , {
    duration : 1.5 ,
    width : 0 ,
    ease : "Expo.easeInOut" ,
}, '-=2.5')
.from("#blackcard" , {
    duration : 1.5 ,
    x : 50 ,
    opacity : 0 ,
    ease : "Expo.easeInOut"
}, '-=1')
.from("#lineelem" , {
    duration : 1.5 ,
    x : 50 ,
    opacity : 0 ,
    ease : "Expo.easeInOut"

}, '-=1')
.from("#lineelem .line" , {
    duration : 2 ,
    width : 0 ,
    opacity : 0 ,
    ease : "Expo.easeInOut"

}, '-=1')
.from("#blackcard p" , {
    duration : 1.2 ,
    y : 30 ,
    opacity : 0 ,
    ease : "Expo.easeInOut"

}, '-=2')
.from("#unleash-exp-heading" , {
    duration : 2 ,
    x : 30 ,
    opacity : 0 ,
    ease : "Expo.easeInOut"

}, '-=1.2')
