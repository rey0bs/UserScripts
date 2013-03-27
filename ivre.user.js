// ==UserScript==
// @name        ivre
// @namespace   sboye
// @include     *20minutes.fr*
// @include     *lefigaro.fr*
// @include     *legorafi.fr*
// @include     *metrofrance.com*
// @include     *lyonplus.com*
// @include     *sudouest.com*
// @include     *lemonde.fr*
// @include     *nicematin.com*
// @include     *liberation.fr*
// @include     *corsematin.com*
// @include     *francesoir.fr*
// @include     *varmatin.com*
// @include     *humanite.fr*
// @include     *lamarseillaise.fr*
// @include     *lequipe.fr*
// @include     *laprovence.com*
// @include     *la-croix.com*
// @include     *republicain-lorrain.fr*
// @include     *lesechos.fr*
// @include     *lanouvellerepublique.fr*
// @include     *latribune.fr*
// @include     *ledauphine.com*
// @include     *nouveleconomiste.fr*
// @include     *estrepublicain.fr*
// @include     *nytimes.com*
// @include     *lavoixdunord.fr*
// @include     *leparisien.fr*
// @include     *ouest-france.fr*
// @include     *midilibre.com*
// @include     *lamontagne.fr*
// @include     *leberry.fr*
// @include     *lejdc.fr*
// @include     *lepopulaire.fr*
// @include     *lindependant.com*
// @include     *dna.fr*
// @include     *presseocean.fr*
// @include     *lesoir-echos.com*
// @include     *ladepeche.fr*
// @include     *leparisien.fr*
// @include     *lest-eclair.fr*
// @include     *courrier-picard.fr*
// @version     1.2
// @require http://code.jquery.com/jquery-1.7.2.min.js
// ==/UserScript==
(function(){
	function lcfirst (str) {
	  str += '';
	  var f = str.charAt(0).toLowerCase();
	  return f + str.substr(1);
	}

	$('h1, h2').each(function(i, elt) {
		if ( Math.floor((Math.random()*2)+1) == 1 ) {
			var element = $(this);
			if( $('a', element).length ) {
				element = $('a', element).first();
			}
			element.html('Ivre, '+lcfirst( element.html() ));
		}
	});
	
})();
