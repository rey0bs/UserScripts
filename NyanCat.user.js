// ==UserScript==
// @name           NyanCat
// @namespace      NyanCat
// @description    Sometimes play background NyanCat sound
// @include        *
// ==/UserScript==
(function(){

	if( Math.random() < 0.1) { 
		var bgmusic = document.createElement('audio');
			bgmusic.id = 'nyanmusic';
			bgmusic.loop = 'loop';
			bgmusic.src = 'http://nyan.alternative.ly/nyanlooped.mp3';
			bgmusic.volume = 0.009;
			bgmusic.play();
	}
	
}) ();
