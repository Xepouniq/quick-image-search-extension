/*
Image Search Extension
content.js
*/

//get search bar info
let searchBars = document.getElementsByClassName("SDkEP");

//add click script
let s = document.createElement('script');
s.type = 'text/javascript';

let code = 'function getUrl() { window.location.href = "https://google.com/search?q=" + document.getElementsByName("q")[0].value + "&tbm=isch"; }';

try {
	s.appendChild(document.createTextNode(code));
	document.getElementsByTagName('head')[0].appendChild(s);
} catch (e) {
	s.text = code;
	document.getElementsByTagName('head')[0].appendChild(s);
}

//add search button
for (let i = 0; i < searchBars.length; i++) {
	searchBars[i].innerHTML += `<div class="dRYYxd" onclick="getUrl();" style="display: inline-block; padding-top: 10px; cursor: pointer;">
	<svg class="HPVvwb" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<g>
  <rect fill="#ffffff" id="canvas_background" height="26" width="26" y="-1" x="-1"/>
  <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
   <rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/>
  </g>
 </g>
 <g>
  <title>Layer 1</title>
  <ellipse ry="11" rx="11" id="svg_10" cy="12" cx="12" stroke-width="1.5" stroke="#4285F4" fill="#ffffff"/>
  <ellipse ry="5" rx="8" id="svg_11" cy="12.20122" cx="12.2214" stroke-width="1.5" stroke="#DB4437" fill="#ffffff"/>
  <ellipse ry="2" rx="2" id="svg_13" cy="12.38572" cx="12.31365" stroke-width="2.5" stroke="#0F9D58" fill="#f4b400"/>
 </g>
	</svg>
	</div>`;
}


