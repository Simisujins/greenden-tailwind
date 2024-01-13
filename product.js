//selecting the elements

var sidenav = document.getElementById("sidenav")
var menubar = document.getElementById("menubar")
var closebar = document.getElementById("close-nav")
menubar.addEventListener("click", function () {
    sidenav.style.right = 0
})

closebar.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})

//selection products

var productContainer = document.getElementById("product-container")
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")



search.addEventListener("keyup", function () {
    var enteredValue = event.target.value.toUpperCase()

    for (count = 0; count<productlist.length; count=count+1) 
    {
        var productname = productlist[count].querySelector("h1").textContent

        if (productname.toUpperCase().indexOf(enteredValue)<0) 
        {
            productlist[count].style.display = "none"
        }
        else {
            productlist[count].style.display = "block"
        }
    }
})