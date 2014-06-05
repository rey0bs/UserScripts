// ==UserScript==
// @name        PowerRotator
// @namespace   sboye
// @include     *
// @version     1.0
// ==/UserScript==
(function(){



	/*** UTILS ***/

	function add_style( rules, media ) {
		el = document.createElement( 'style' );
		el.setAttribute( 'type', 'text/css' );
		for ( i=0; i<rules.length; i++ ) {
			el.innerHTML += rules[ i ] + "\n";
		}
		if ( typeof media != "undefined" ) {
			el.innerHTML = "@media " + media + " { \n" + el.innerHTML + "} \n";
		}
		document.head.appendChild( el );
	} 

	add_style( [
		"html { transform:rotate(0.25deg); -ms-transform:rotate(0.25deg); -webkit-transform:rotate(0.25deg); } ",
	] );
	
	

}) ();
