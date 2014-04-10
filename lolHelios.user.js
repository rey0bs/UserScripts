// ==UserScript==
// @name           lolHelios
// @namespace      lolHelios
// @description    lol Helios
// @include        *helios*
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
		"body, .support .message-box-title-outer     { background-color: #FF0;     }",
		"div.information, .search-outer.well.vertical, .search-outer .well.vertical, .breadcrumb-outer, .message-panel-outer { background: #0F0; }",
		"table.table-striped.table-bordered.portfolio-tickets > tbody > tr > td, table.table-striped.table-bordered.portfolio-tickets > tbody > tr > td a, .title-banner, .title-banner a, .table th, .message-box-content-outer { background: #F00; color: #FFF; }",
		".content-outer { background: purple; }",
		".menu-1-outer { background: #0FF; }",
		".message-box-title-outer { background: cyan }",
	] );
	
	

}) ();
