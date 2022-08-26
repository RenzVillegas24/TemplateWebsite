
  
console.log(document.URL.toString())


function runOnScroll() {

	const vh = window.innerHeight
	const vw = window.innerWidth

	var objh = vw <= 900 ? 70 : 100
	var hdrTxtSz = vw <= 900 ? 20 : 30
	var hdrTxt2Sz = vw <= 900 ? 12 : 20
	var maxWidth = 1500

	var nvImg = document.getElementById("nvImg")
	var headerCl = document.querySelector(".header")
	var headerId = document.getElementById("header")
	var left = document.querySelector(".left")
	var leftA = document.getElementById("leftA")
	var right = document.querySelector(".right")
	var rightHeader = document.querySelector(".rightHeader")

	var menuBtn = document.getElementById("b1")
	//var navCollapse = document.querySelector("nav .collapse")
	//var heightNav = document.querySelector(".heightNav")

	var positionInfo = left.getBoundingClientRect();
	var lftH = positionInfo.height;
	
	if (vw > maxWidth){
		rightHeader.style.marginRight = `${(vw - maxWidth) / 2 + 20}px`
		left.style.left = `${(vw - maxWidth) / 2 + 40}px`
		rightHeader.style.visibility = `visible`
		if (document.querySelector(".right") !== null){
			right.style.left = `${(vw - maxWidth) / 2 + 50}px`
			right.style.visibility = `visible` 
		}

	} else if (vw <= 900 && vw < maxWidth){
		left.style.left = `0px`
		rightHeader.style.visibility = `hidden`
		if (document.querySelector(".right") !== null){
			right.style.left = `0px`
			right.style.visibility = vh > vw * 1.15 ? `hidden` : `visible` 

		}

		
	} else {
		rightHeader.style.marginRight = `20px`
		rightHeader.style.visibility = `visible`
		left.style.left = `40px`
		if (document.querySelector(".right") !== null){
			right.style.left = `50px`
			right.style.visibility = `visible` 
		}

	}


	var lftH, minvhvw, z, a, sz, vhMod, vhSz
	
	if (vh > vw){
		vhSz = (vw / vh) * 100
		vhMod = vw
		lftH = left.style.height
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
	

			menuBtn.style.visibility = 'hidden'
			menuBtn.style.opacity = '0'
			menuBtn.style.transform = 'translateX(-50%)'
			menuBtn.style.transition = 'cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s'

			if (document.querySelector(".right") !== null)
				document.querySelector(".right").style.transform = `translateY(${(-a*120)}%)`;
			if (document.getElementById("leftB") !== null){
				document.getElementById("leftB").style.fontSize = `${((sz*.3)*(1-a)+(hdrTxt2Sz*a))}pt`;
				document.getElementById("leftB").style.paddingTop = `${((20)*(1-a)+(7*a))}px`;
	
			}
			
		} else if ((window.scrollY > vhMod -objh )){
			nvImg.classList.add('behindCllps')
			nvImg.style.opacity = `0`
	
			headerCl.style.height = `${objh}px`
			headerId.classList.add('heightNav')
			leftA.style.fontSize = `${hdrTxtSz+ (vw >= 900)}pt`
			leftA.classList.add('leftA2')

			if (vw <= 900){
				left.style.top = `35px`
				menuBtn.style.visibility = 'visible'
				menuBtn.style.opacity = '1'
				menuBtn.style.transform = 'translateX(0)'
				menuBtn.style.transition = 'cubic-bezier(0.68, -0.6, 0.32, 1.6) 0.5s'
			}else{
				left.style.top = `50%`
				menuBtn.style.visibility = 'hidden'
				menuBtn.style.opacity = '0'
				menuBtn.style.transform = 'translateX(-50%)'
				menuBtn.style.transition = '0s'
			}

			if (document.getElementById("leftB") !== null){
				document.getElementById("leftB").style.fontSize = `12pt`;
				document.getElementById("leftB").style.paddingTop = `7px`;
			}
		}

	} else {
		vhSz = 100
		vhMod = vh
		lftH = left.style.height
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
	
			if (document.querySelector(".right") !== null)
				document.querySelector(".right").style.transform = `translateY(${(-a*120)}%)`;
			
			if (document.getElementById("leftB") !== null)
				document.getElementById("leftB").style.fontSize = `${((sz/2)*(1-a)+(hdrTxt2Sz*a))}pt`;
	
		

			menuBtn.style.visibility = 'hidden'
			menuBtn.style.opacity = '0'
			menuBtn.style.transform = 'translateX(-50%)'
			menuBtn.style.transition = 'cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s'
			
		} else if ((window.scrollY > vhMod -objh )){

			if (vw > 900){
				left.style.top = `50%`
				menuBtn.style.visibility = 'hidden'
				menuBtn.style.opacity = '0'
				menuBtn.style.transform = 'translateX(-50%)'
				menuBtn.style.transition = '0s'
			} else {
				left.style.top = `35px`
				menuBtn.style.visibility = 'visible'
				menuBtn.style.opacity = '1'
				menuBtn.style.transform = 'translateX(0)'
				menuBtn.style.transition = 'cubic-bezier(0.68, -0.6, 0.32, 1.6) 0.5s'
				document.getElementById("leftB").style.paddingTop = `7px`;
			}

			nvImg.classList.add('behindCllps')
			nvImg.style.opacity = `0`
	
			headerCl.style.height = `${objh}px`
			headerId.classList.add('heightNav')
			leftA.style.fontSize = `${hdrTxtSz+ (vw >= 900)}pt`
			leftA.classList.add('leftA2')
		
			if (document.getElementById("leftB") !== null)
				document.getElementById("leftB").style.fontSize = `${hdrTxt2Sz}pt`;
		
		}
	}


	
} 

 

window.addEventListener("scroll", runOnScroll)
window.addEventListener('resize', runOnScroll)
document.addEventListener("DOMContentLoaded", runOnScroll)




