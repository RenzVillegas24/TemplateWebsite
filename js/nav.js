



var vh,
	vw,
	hdrVH,
	hdrTxtSz,
	hdrTxt2Sz,
	maxWidth,
	leftBTxt = ``,
	leftW

var hdrCurVH,
	hdrImgOpa,
	hdrImgBlr,
	hdrImgScl,
	hdrTxtTtlTop,
	hdrTxtTtlTopSTR,
	hdrTxtTtlFntSz,
	hdrTxt2TtlFntSz,
	ratio

function runOnScroll() {
	var lftH,
		z,
		fntSZ,
		currVH,
		itmsMarginR,
		itmsMarginR2,
		itmsMarginL


	vh = window.innerHeight
	vw = window.innerWidth

	hdrVH = vw <= 900 ? 70 : 100
	hdrTxtSz = vw <= 900 ? 20 : 30
	hdrTxt2Sz = vw <= 900 ? 12 : 20
	hdrTxt2TtlFntSz = hdrTxt2Sz
	maxWidth = 1500

	lftH = left.style.height
	currVH = vh > vw ? vw : vh
	z = (window.scrollY) / currVH
	ratio = Math.min(1, Math.max(z + (1 - (currVH - hdrVH) / currVH) * z, 0))


	itmsMarginL = 0
	//itmsMarginL = (vw - left.getBoundingClientRect().width) / 2


	
	if (vw <= 900) {

		if (right !== null){
			right.style.visibility = vh > vw * 1.15 ? `hidden` : `visible`
		}


		


		itmsMarginR2 = 0

	} else {
		if (vw > maxWidth) {	
			itmsMarginR = (vw - maxWidth) / 2 + 20
			itmsMarginR2 = (vw - maxWidth) / 2 + 50
			itmsMarginL = (vw - maxWidth) / 2 + 50
		} else {
			itmsMarginR = 20
			itmsMarginR2 = 50
			itmsMarginL = 50
		}


		if (right !== null){
			right.style.visibility = `visible`
		}
		

	}



	if (window.scrollY <= currVH - hdrVH) {
		hdrCurVH = Math.round(currVH - (currVH * z))
		hdrImgOpa = 1 - ratio
		hdrImgBlr = Math.round((10 * (Math.max(ratio, 0.5) - 0.5) * 2)*10)/10 
		hdrImgScl = AJS.easeInCubic(1,1.5 , 75, (Math.max(ratio, 0.25)-0.25)*100)
		
		nvImg.classList.remove('behindCllps')
		headerId.classList.remove('heightNav')
		leftA.classList.remove('leftA2')


		
		if (vw <= 900) {
			rightHeader.style.visibility = `hidden`
			rightHeader.style.opacity = `0`
		} else {
			rightHeader.style.visibility = `visible`
			rightHeader.style.opacity = `1`
		}


		
		menuBtn.style.visibility = 'hidden'
		menuBtn.style.opacity = '0'
		menuBtn.style.transform = 'translateX(-50%)'
		menuBtn.style.transition = 'cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s'

		
		hdrTxtTtlTopSTR = `${AJS.easeInOutQuad(85, 50, 100, ratio*100)}%`

		if (leftB !== null) 
			leftB.style.paddingTop = `${((20) * (1 - ratio) + (7 * ratio))}px`;
		

	} else if ((window.scrollY > currVH - hdrVH)) {
		hdrCurVH = hdrVH
		hdrImgOpa = 0
		hdrImgScl = 1
		hdrTxtTtlFntSz = hdrTxtSz 

		nvImg.classList.add('behindCllps')
		headerId.classList.add('heightNav')
		leftA.classList.add('leftA2')

		rightHeader.style.visibility = `visible`
		rightHeader.style.opacity = `1`



	
		if (vw <= 900) {
			hdrTxtTtlTopSTR = `35px`
			menuBtn.style.visibility = 'visible'
			menuBtn.style.opacity = '1'
			menuBtn.style.transform = 'translateX(0)'
			menuBtn.style.transition = 'cubic-bezier(0.68, -0.6, 0.32, 1.6) 0.5s'
		} else {
			hdrTxtTtlTopSTR = `50%`
			menuBtn.style.visibility = 'hidden'
			menuBtn.style.opacity = '0'
			menuBtn.style.transform = 'translateX(-50%)'
			menuBtn.style.transition = '0s'
		}

		if (leftB !== null) 
			leftB.style.paddingTop = `7px`;


	}



	if (vh > vw) {
		fntSZ = (vw / 8)

		if (window.scrollY <= currVH - hdrVH) {
			//hdrTxtTtlFntSz = (fntSZ * 0.7 * (1 - ratio) + ((hdrTxtSz) * ratio))
			//hdrTxt2TtlFntSz = ((fntSZ * .3) * (1 - ratio) + (hdrTxt2Sz * ratio));
			//hdrTxtTtlTopSTR = `${(85 * (1 - ratio)) + ((ratio) * 50)}%`

			
			hdrTxtTtlFntSz = AJS.easeInOutQuad(fntSZ*0.7, hdrTxtSz, 100, ratio*100)
			hdrTxt2TtlFntSz = AJS.easeInOutQuad(fntSZ*0.3, hdrTxt2Sz, 100, ratio*100)


		} 

	} else {
		fntSZ = (Math.min(vh, vw * 0.8) / 8)
		//hdrTxtTtlTopSTR = `${(85 * (1 - ratio)) + ((ratio) * 50)}%`
		if (window.scrollY <= currVH - hdrVH) {
			//hdrTxtTtlFntSz = (fntSZ * (1 - ratio) + ((hdrTxtSz) * ratio))
			//hdrTxt2TtlFntSz = ((fntSZ / 2) * (1 - ratio) + (hdrTxt2Sz * ratio));

			hdrTxtTtlFntSz = AJS.easeInOutQuad(fntSZ, hdrTxtSz, 100, ratio*100)
			hdrTxt2TtlFntSz = AJS.easeInOutQuad(fntSZ/2, hdrTxt2Sz, 100, ratio*100)


		} 
	}


	left.style.left = `${itmsMarginL}px`
	if (right !== null){
		right.style.left = `${itmsMarginR2}px`
		right.style.transform = `translateY(${ratio * currVH / 5}px)`;
		right.style.opacity = `${Math.max(1-ratio*3, 0)}`;
	}

	rightHeader.style.marginRight = `${itmsMarginR}px`

	main.style.paddingTop = `${currVH}px`
	document.querySelector("html").style.minHeight = `${vh*2 + (currVH - vh) - hdrVH + 1}px`

	headerCl.style.height = `${hdrCurVH}px`

	nvImg.style.transform = `translateY(${-window.scrollY/2}px)`
	nvImg.style.height = `${currVH}px`
	nvImg.style.opacity = `${hdrImgOpa}`
	nvImg.style.filter = `blur(${hdrImgBlr}px)`
	nvImg.style.scale = `${hdrImgScl}`

	left.style.top = hdrTxtTtlTopSTR
	leftA.style.fontSize = `${hdrTxtTtlFntSz}pt`
	if (leftB !== null)
		leftB.style.fontSize = `${hdrTxt2TtlFntSz}pt`;

}



