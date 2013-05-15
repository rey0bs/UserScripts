// ==UserScript==
// @name           BetterSolr
// @namespace      http://zilliox.me
// @description    Better Solr
// @include        */solr/*
// ==/UserScript==
(function(){



	/*** UTILS ***/
	function add_script( script ) {
		el = document.createElement( 'script' );
		el.setAttribute( 'type', 'text/javascript' );
		if ( typeof script == "function" ) {		
			el.innerHTML = '(' + script.toString() + ')();';
		} else {		
			el.innerHTML = script;
		}
		document.head.appendChild( el );
	} 
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
		"body     { width:580px; background-color: #d3d3d3;     }",
		"#menu    { width:580px;     }",
		"#content { position:fixed; left:600px; top:0; margin-left:0; width:800px}",
		"a { background-color: #FFFFFF; }",
		"#menu li a { background-color: #FFFFFF; color: #222; display: block; padding: 2px 4px; }",
		"#menu { background-color: #FFFFFF; }",
		"#menu li { border: none; border-top: 1px solid #AAA; }",
		"table { background-color: #FFFFFF; } ",
		"th, td, table.histogram td, table.histogram th { border-bottom: 1px solid #222222; } ",
	] );
	
	var execute = function() {
		
		jQuery.fn.sortElements = (function(){
	 
		    var sort = [].sort;
		 
		    return function(comparator, getSortable) {
		 
			getSortable = getSortable || function(){return this;};
		 
			var placements = this.map(function(){
		 
			    var sortElement = getSortable.call(this),
				parentNode = sortElement.parentNode,
		 
				// Since the element itself will change position, we have
				// to have some way of storing its original position in
				// the DOM. The easiest way is to have a 'flag' node:
				nextSibling = parentNode.insertBefore(
				    document.createTextNode(''),
				    sortElement.nextSibling
				);
		 
			    return function() {
		 
				if (parentNode === this) {
				    throw new Error(
				        "You can't sort elements if any one is a descendant of another."
				    );
				}
		 
				// Insert before flag:
				parentNode.insertBefore(this, nextSibling);
				// Remove flag:
				parentNode.removeChild(nextSibling);
		 
			    };
		 
			});
		 
			return sort.call(this, comparator).each(function(i){
			    placements[i].call(getSortable.call(this));
			});
		 
		    };
		 
		})();

		setTimeout( function() {
			solr.toggleMenus('fields', ['types', 'dynFields']);

			$('#menu li').sortElements(function(a, b){
			    var reg=new RegExp("^[A-Z].*","i");  // le "i" sert a ne pas tenir compte de la casse (MAJ/min)
			    if (! $('a', b).text().match(reg)) {
				return -1;
			    } else {
			    	return $('a', a).text() > $('a', b).text() ? 1 : -1;
			    }
			});

		}, 300);
	}
	add_script( execute );
	

}) ();
