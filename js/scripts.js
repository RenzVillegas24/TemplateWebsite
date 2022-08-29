

var main,
    nvImg,
    headerCl,
    headerId,
    left,
    leftA,
    leftB,
    right,
    rightHeader,
    menuBtn,
    heightNav



document.addEventListener("DOMContentLoaded", function () {
    main = document.querySelector(".main")
    nvImg = document.getElementById("nvImg")
    headerCl = document.querySelector(".header")
    headerId = document.getElementById("header")
    left = document.querySelector(".left")
    leftA = document.getElementById("leftA")
    leftB = document.getElementById("leftB")
    right = document.querySelector(".right")
    rightHeader = document.querySelector(".rightHeader")
    heightNav = document.getElementById("header")

    menuBtn = document.getElementById("b1")


    if (leftB != null)
        leftBTxt = leftB.innerHTML

    runOnScroll()
    window.addEventListener('resize', runOnScroll)
    window.addEventListener("scroll", runOnScroll)

})

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)


console.log(document.URL.toString())


window.fadeTransition = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 150)
}


