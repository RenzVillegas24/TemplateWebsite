

var master,
    main,
    nvImg,
    headerCl,
    headerId,
    left,
    leftA,
    leftB,
    right,
    rightHeader,
    menuBtn,
    heightNav,
    imgElem

function percentwidth(elem){
    var pa= elem.offsetParent || elem;
    return ((elem.offsetWidth/pa.offsetWidth)*100);
}

document.addEventListener("DOMContentLoaded", function () {
    master = document.querySelector("html")
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
    imgElem = document.querySelectorAll('figure img')


    if (leftB != null)
        leftBTxt = leftB.innerHTML

    runOnScroll()
    window.addEventListener('resize', runOnScroll)
    window.addEventListener("scroll", runOnScroll)

    imgElem.forEach(e => {
        e.addEventListener('click', function (event) {
            if (percentwidth(e) < 102 && percentwidth(e) > 98 ){
                e.classList.remove('imgToggle')

            } else {
                e.classList.add('imgToggle')
            }
            console.log(percentwidth(e))
        });
    });
})

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)


console.log(document.URL.toString())

window.fadeTransition = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 150)
}


