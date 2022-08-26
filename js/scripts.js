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



var svgLoader = `
<svg width="150" height="150" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
    <style type="text/css">
        <![CDATA[
        #c1, #c2 {
            animation: 
            size cubic-bezier(0.165, 0.84, 0.44, 1) 1.25s, 
            opacity cubic-bezier(0.3, 0.61, 0.355, 1) 1.25s;
            animation-iteration-count: infinite;
            transform-origin: 50% 50%;
            stroke-opacity: 1;
        }
        @keyframes size{
            0% { transform: scale(0); }
            100% { transform: scale(1); }
        }
        @keyframes opacity {
            0% { stroke-opacity: 1; }
            100% { stroke-opacity: 0; }
        }
        #c2 { animation-delay: -.5s; }
        ]]>
    </style>
    <g fill="none" fill-rule="evenodd" stroke-width="3">
    <circle cx="22" cy="22" r="20" id="c1" fill="none"></circle>
    <circle cx="22" cy="22" r="20" id="c2" fill="none"></circle>
    </g>
</svg>

<div class="text">
<b>TechSide</b> was loading.
</div>
`;
  

window.fadeTransition = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 150)
}


onLoad(function () {
        setTimeout(function(){
            document.getElementById('loader').innerHTML += svgLoader;
        }, 100);
        console.log('I am waiting for the page to be loaded');
	},
	function () {
		setTimeout(function(){
			document.getElementById('loader').style.opacity = 0;
			document.getElementById('loader').style.visibility = 'hidden';
                document.getElementById('loader').innerHTML = "";
        },500);
		console.log('The page is loaded');
	});

