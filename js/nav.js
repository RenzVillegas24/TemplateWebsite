
  

function runOnScroll() {

	const vh = window.innerHeight
	const vw = window.innerWidth

	var objh = vw < 900 ? 70 : 100
	var hdrTxtSz = vw < 900 ? 20 : 30
	var maxWidth = 1500

	var nvImg = document.getElementById("nvImg")
	var headerCl = document.querySelector(".header")
	var headerId = document.getElementById("header")
	var left = document.querySelector(".left")
	var leftA = document.getElementById("leftA")
	var rightHeader = document.querySelector(".rightHeader")

	var navCollapse = document.querySelector("nav .collapse")
	var heightNav = document.querySelector(".heightNav")

	var positionInfo = left.getBoundingClientRect();
	var lftH = positionInfo.height;
	
	if (vw > maxWidth){
		rightHeader.style.marginRight = `${(vw - maxWidth) / 2 + 20}px`
		left.style.left = `${(vw - maxWidth) / 2 + 40}px`
	} else if (vw < 900 && vw < maxWidth){
		left.style.left = `0px`
		
		if (!document.URL.includes("index.html"))
			document.querySelector(".right").style.visibility = vh > vw * 1.1 ? `hidden` : `visible` 
	
	} else {
		rightHeader.style.marginRight = `20px`
		left.style.left = `40px`
	}


	var lftH, minvhvw, z, a, sz, vhMod, vhSz
	
	if (vh > vw){
		vhSz = (vw / vh) * 100
		vhMod = vw
		lftH = document.querySelector(".left").style.height
		z = (window.scrollY) / vw
		a = Math.min(1,Math.max(z + (1-(vw-objh)/vw)*z,0))
		sz = (vw/8)


		document.querySelector(".main").style.paddingTop = `${vw}px`

		if (window.scrollY <= vhMod -objh) {
			nvImg.classList.remove('behindCllps')
			nvImg.style.opacity = `${1-a}`
			nvImg.style.filter = `blur(${10*(Math.max(a, 0.5)-0.5)*2}px)`
			
			headerCl.style.height = `${vhSz-(vhSz*z)}%`
			headerId.classList.remove('heightNav')
			left.style.top = `${(85*(1-a))+((a)*50)}%`
			leftA.style.fontSize = `${(sz*0.7*(1-a)+((hdrTxtSz)*a))}pt`
			leftA.classList.remove('leftA2')
	
			if (!document.URL.includes("index.html")){
				document.querySelector(".right").style.transform = `translateY(${(-a*120)}%)`;
				document.getElementById("leftB").style.fontSize = `${((sz*.3)*(1-a)+(12*a))}pt`;
				document.getElementById("leftB").style.paddingTop = `${((20)*(1-a)+(7*a))}px`;
	
			}
			
		} else if ((window.scrollY > vhMod -objh )){
			nvImg.classList.add('behindCllps')
			nvImg.style.opacity = `0`
	
			headerCl.style.height = `${objh}px`
			headerId.classList.add('heightNav')
			left.style.top = `50%`
			leftA.style.fontSize = `${hdrTxtSz+ (vw > 900)}pt`
			leftA.classList.add('leftA2')
	
			if (!document.URL.includes("index.html"))
				document.getElementById("leftB").style.fontSize = `12pt`;
				document.getElementById("leftB").style.paddingTop = `7px`;
	
		}

	} else {
		vhSz = 100
		vhMod = vh
		lftH = document.querySelector(".left").style.height
		minvhvw = Math.min(vh, vw*.8)
		z = (window.scrollY) / vh
		a = Math.min(1,Math.max(z + (1-(vh-objh)/vh)*z,0))
		sz = (minvhvw/8)
	
		document.querySelector(".main").style.paddingTop = `${vh}px`


		if (window.scrollY <= vhMod -objh) {
			nvImg.classList.remove('behindCllps')
			nvImg.style.opacity = `${1-a}`
			nvImg.style.filter = `blur(${10*(Math.max(a, 0.5)-0.5)*2}px)`
			
			headerCl.style.height = `${vhSz-(vhSz*z)}%`
			headerId.classList.remove('heightNav')
			left.style.top = `${(85*(1-a))+((a)*50)}%`
			leftA.style.fontSize = `${(sz*(1-a)+((hdrTxtSz)*a))}pt`
			leftA.classList.remove('leftA2')
	
			if (!document.URL.includes("index.html")){
				document.querySelector(".right").style.transform = `translateY(${(-a*120)}%)`;
				document.getElementById("leftB").style.fontSize = `${((sz/2)*(1-a)+(20*a))}pt`;
	
			}
			
		} else if ((window.scrollY > vhMod -objh )){
			nvImg.classList.add('behindCllps')
			nvImg.style.opacity = `0`
	
			headerCl.style.height = `${objh}px`
			headerId.classList.add('heightNav')
			left.style.top = `50%`
			leftA.style.fontSize = `${hdrTxtSz+ (vw > 900)}pt`
			leftA.classList.add('leftA2')
	
			if (!document.URL.includes("index.html"))
				document.getElementById("leftB").style.fontSize = `20pt`;
	
		}
	}


	
} 

 

window.addEventListener("scroll", runOnScroll)
window.addEventListener('resize', runOnScroll)
document.addEventListener("DOMContentLoaded", runOnScroll)
