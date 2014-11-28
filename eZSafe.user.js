// ==UserScript==
// @name        eZSafe
// @namespace   sboye
// @include     *
// @version     1.0
// ==/UserScript==
(function(){



	/*** UTILS ***/

	/*function add_style( rules, media ) {
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
		"",
	] );*/
	if( $('.ezsetupnavigationpart').length ) {
		var table = $('.context-attributes table.special:not(#ezcca-edit-list)');
		table.find('> tbody > tr.bglight, > tbody > tr.bgdark').hide();
		table.find('> tbody > tr:not(.bglight):not(.bgdark)').click( function(i, elt) {
			table.find('> tbody > tr.bglight:visible, > tbody > tr.bgdark:visible').hide();
			$(this).next().toggle().next().toggle();
		});
	}

}) ();
