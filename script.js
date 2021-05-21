// 1) I need to get the current position of the mouse every
// time it moves ( x axis, y axis)

// 2) I need to set those x and y values to the circular div

// ==================

// every time mouse moves we should get notified = mouseMove listener
// every time listener gets notified, we need to get the values
// for x and y axis, and then update it to the circle

let circle=document.querySelector('#circle')
let btn = document.querySelector('#btn')
var tl=gsap.timeline();
const svgelem=document.querySelector('svg')

window.addEventListener('mousemove',function(details){
    let xValue=details.clientX
    let yValue=details.clientY

    setTimeout(function () {
        circle.style.top=`${yValue}px`
    circle.style.left=`${xValue}px`
    },100)

    
})

btn.addEventListener('click',function () {
    tl.reverse();
    setTimeout(function () {
       svgelem.classList.add('animate') 
    },3000)
    
})




tl.from('#wrapper',{
    duration:4,
    scale:.7,
    ease:'Expo.easeInOut',
    opacity:0
})

.from('#whitestrip',{
    duration:1.5,
    width:0,
    ease:'Expo.easeInOut'
},'-=2.5')

.from('#blackcard',{
    duration:1.5,
    x:50,
    opacity:0,
    ease:'Expo.easeInOut'
},'-=1.5')
.from('#lineelem',{
    duration:1.5,
    x:50,
    opacity:0,
    ease:'Expo.easeInOut'
},'-=1.5')
.from('#lineelem #line',{
    duration:2,
    width:0,
    opacity:0,
    ease:'Expo.easeInOut'
},'-=1')
.from('#blackcard p',{
    duration:1.2,
    y:30,
    opacity:0,
    ease:'Expo.easeInOut'
},'-=1.5')
.from('#sideelem',{
    duration:2,
    x:30,
    opacity:0,
    ease:'Expo.easeInOut'
},'-=1.5')


