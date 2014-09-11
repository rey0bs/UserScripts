// ==UserScript==
// @name        OWHelios
// @namespace   sboye
// @grant       none
// @include     *helios.openwide.fr*
// @version     1.3
// ==/UserScript==

(function(){
	
	
	function addJQuery(callback) {
	  var script = document.createElement("script");
	  script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
	  script.addEventListener('load', function() {
		var script = document.createElement("script");
		script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
		document.body.appendChild(script);
	  }, false);
	  document.body.appendChild(script);
	}

	// the guts of this userscript
	function main() {
		  /******************************************************
		* Vue d'un ticket
		******************************************************/
		$('.message-panel-content-outer').css('color', '#000');
	
		/******************************************************
		* Liste des tickets
		******************************************************/
		if ($('table.portfolio-tickets').length) {
		
			/******************************************************
			* General view
			******************************************************/
			$('table.portfolio-tickets tr td span').css("color", "#444");
	
			/**************************
			* Bouton Reformater
			**************************/
	
			var $newdiv1 = $('<div class="float-left field-button"><a class="btn colorinit"><i class="icon-plus-sign" style="background-position: -312px 0;"></i>Décolorer les tickets</a></div>');
			$('.main .right-block').prepend($newdiv1);
			$('a.colorinit').click(function(elt){
				$('table.portfolio-tickets tr td span').css({'color': 'inherit', 'text-decoration': 'inherit', 'font-style': 'inherit'});
			});
	
		
			/**************************
			* Mes tickets / Tickets non pris en charge
			**************************/
			$('table.portfolio-tickets tr td span.info-popup-trigger').each(function(index, elt){
				if ($(elt).html() == 'Moi' || $(elt).html() == '-') {
					$(elt).closest('tr').find('span').css({'color': '#000'});
				}
			});
	
			/**************************
			* En attente de livraison
			**************************/
			$('table.portfolio-tickets tr td .tag-item a.tag-link[href*="livrer"]').each(function(index, elt){
				$(elt).closest('tr').find('span').css({'font-style': 'italic', 'color': '#8a8a8a'});
			});
		
			/**************************
			* En attente
			**************************/
			$('table.portfolio-tickets tr td .tag-item a.tag-link[href*="attente"]').each(function(index, elt){
				$(elt).closest('tr').find('span').css({'color': '#595959'});
			});
		
			/**************************
			* En attente du client
			**************************/
			$('table.portfolio-tickets tr td img[alt="En attente du client"]').closest('tr').find('span').css({'font-style': 'italic', 'color': '#8a8a8a'});
		
			//$('.content div.information.followable-entity-list:first > a').click();
		}
	}

	// load jQuery and execute the main function
	addJQuery(main);


	

		
})();
