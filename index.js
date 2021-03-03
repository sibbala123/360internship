var slide1 = document.getElementById("slide1");
var slide2 = document.getElementById("slide2");
var slide3 = document.getElementById("slide3");
var next1 = document.getElementById("next1");
var prev2 = document.getElementById("previous2");
var next2 = document.getElementById("next2");
var prev3 = document.getElementById("previous3");
var next3 = document.getElementById("next3");
var prev4 = document.getElementById("previous4");
var next4 = document.getElementById("next4");
var dot1 = document.getElementById("dot1");
var dot2 = document.getElementById("dot2");
var dot3 = document.getElementById("dot3");
var dot4 = document.getElementById("dot4");
next1.onclick = function(){
    slide1.style.left ="450px";
    slide2.style.left ="12px";
    dot2.style.backgroundColor="black";
    dot1.style.backgroundColor="#bbb"
    dot3.style.backgroundColor="#bbb"
    dot4.style.backgroundColor="#bbb"
    
}
prev2.onclick = function(){
    slide1.style.left ="10px";
    slide2.style.left ="-450px";
    dot1.style.backgroundColor="black";
    dot2.style.backgroundColor="#bbb";
    dot3.style.backgroundColor="#bbb";
    dot3.style.backgroundColor="#bbb";
    
}
next2.onclick = function(){
    slide3.style.left ="10px";
    slide2.style.left ="-450px";
    dot3.style.backgroundColor="black";
    dot2.style.backgroundColor="#bbb";
    dot1.style.backgroundColor="#bbb";
    dot4.style.backgroundColor="#bbb";
}
prev3.onclick = function(){
    slide2.style.left ="10px";
    slide3.style.left ="-450px";
    dot2.style.backgroundColor="black";
    dot1.style.backgroundColor="#bbb";
    dot3.style.backgroundColor="#bbb";
    dot4.style.backgroundColor="#bbb";
}
next3.onclick = function(){
    slide4.style.left ="10px";
    slide3.style.left ="-450px";
    dot4.style.backgroundColor="black";
    dot2.style.backgroundColor="#bbb";
    dot1.style.backgroundColor="#bbb";
    dot3.style.backgroundColor="#bbb";
}
prev4.onclick = function(){
    slide1.style.left ="10px";
    slide4.style.left ="-450px";
    dot1.style.backgroundColor="black";
    dot2.style.backgroundColor="#bbb";
    dot3.style.backgroundColor="#bbb";
    dot4.style.backgroundColor="#bbb";
}
