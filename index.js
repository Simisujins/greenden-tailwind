//selecting the elements

var sidenav=document.getElementById("sidenav")
var menubar=document.getElementById("menubar")
var closebar=document.getElementById("close-nav")
menubar.addEventListener("click",function(){
    sidenav.style.right=0
})

closebar.addEventListener("click",function(){
    sidenav.style.right="-50%"
})