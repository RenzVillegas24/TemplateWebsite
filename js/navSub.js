
function runOnScroll() {
	const vh = window.innerHeight;
	const vw = window.innerWidth;
	const objh = 100;
	const lftH = document.querySelector(".left").style.height;
	const minvhvw = Math.min(vh, vw);
    const z = (window.scrollY) / vh;
    const a = Math.min(1,Math.max(z + (1-(vh-objh)/vh)*z,0));
	const sz = (minvhvw/8);

	var nvImg = document.getElementById("nvImg")
	var headerCl = document.querySelector(".header")
	var headerId = document.getElementById("header")
	var left = document.querySelector(".left")
	var leftA = document.getElementById("leftA")
	var leftB = document.getElementById("leftB")
	var right = document.querySelector(".right")
	var rightHeader = document.querySelector(".rightHeader")

	var maxWidth = 1500;
	if (vw > maxWidth){
		rightHeader.style.marginRight = `${(vw - maxWidth) / 2 + 20}px`
		left.style.left = `${(vw - maxWidth) / 2 + 40}px`
	} else {
		rightHeader.style.marginRight = `20px`
		left.style.left = `40px`
	}

	if (window.scrollY <= vh -objh) {
		nvImg.classList.remove('behindCllps');
		nvImg.style.opacity = `${1-a}`;
		nvImg.style.filter = `blur(${10*(Math.max(a, 0.5)-0.5)*2}px)`;
		
		headerCl.style.height = `${objh-(objh*z)}%`;
		headerId.classList.remove('heightNav');
		left.style.top = `${(85*(1-a))+((a)*50)}%`;
		leftB.style.fontSize = `${((sz/2)*(1-a)+(20*a))}pt`;
		leftA.style.fontSize = `${(sz*(1-a)+(30*a))}pt`;
		leftA.classList.remove('leftA2');
		
		right.style.transform = `translateY(${(-a*120)}%)`;
		
	} else if ((window.scrollY > vh -objh )){
		nvImg.classList.add('behindCllps');
		nvImg.style.opacity = `0`;

		headerId.classList.add('heightNav');
		headerCl.style.height = `100px`;
		left.style.top = `50%`;
		leftB.style.fontSize = `20pt`;

		leftA.style.fontSize = `31pt`;
		leftA.classList.add('leftA2');
	}
	
	document.querySelector(".main").style.paddingTop = `${vh}px`;
 }; 

window.addEventListener("scroll", runOnScroll);
window.addEventListener('resize', runOnScroll);
document.addEventListener("DOMContentLoaded", runOnScroll);

