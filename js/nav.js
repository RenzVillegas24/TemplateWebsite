
  

function runOnScroll() {
	const vh = window.innerHeight;
	const vw = window.innerWidth;
	const objh = 100;
	const lftH =document.querySelector(".left").style.height;
	const minvhvw = Math.min(vh, vw);
    const z = (window.scrollY) / vh;
    const a = Math.min(1,Math.max(z + (1-(vh-objh)/vh)*z,0));
	const sz = (minvhvw/8);

	
	if (window.scrollY <= vh -objh) {
		document.getElementById("nvImg").classList.remove('behindCllps');
		document.getElementById("nvImg").style.opacity = `${1-a}`;
		document.getElementById("nvImg").style.filter = `blur(${10*(Math.max(a, 0.5)-0.5)*2}px)`;
		document.querySelector(".header").style.height = `${objh-(objh*z)}%`;
		document.getElementById("leftA").style.fontSize = `${(sz*(1-a)+(30*a))}pt`;
		document.querySelector(".left").style.top = `${(85*(1-a))+((a)*50)}%`;
		document.getElementById("header").classList.remove('heightNav');
		document.getElementById("leftA").classList.remove('leftA2');
		
	} else if ((window.scrollY > vh -objh )){
		document.getElementById("nvImg").classList.add('behindCllps');
		document.getElementById("nvImg").style.opacity = `0`;
		document.querySelector(".header").style.height = `100px`;
		document.getElementById("leftA").style.fontSize = `31pt`;
		document.querySelector(".left").style.top = `50%`;
		document.getElementById("header").classList.add('heightNav');
		document.getElementById("leftA").classList.add('leftA2');

	}
	
	document.querySelector(".main").style.paddingTop = `${vh}px`;
 }; 

 
window.fadeTransition = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 250)
}


window.addEventListener("scroll", runOnScroll);
window.addEventListener('resize', runOnScroll);
document.addEventListener("DOMContentLoaded",runOnScroll);

function onLoad(loading, loaded) {
    if(document.readyState === 'complete'){
        return loaded();
    }
    loading();
    if (window.addEventListener) {
        window.addEventListener('load', loaded, false);
    }
    else if (window.attachEvent) {
        window.attachEvent('onload', loaded);
    }
};

var newSvg = document.getElementById('myDiv');
onLoad(function(){
	
	console.log('Waiting');
 },
 function(){
	document.querySelector('body').style.opacity = 1
 });

 