// ==UserScript==
// @name        HeliosVulgaris
// @namespace   sboye
// @include     *helios*
// @include     *xguard*
// @version     1.3
// ==/UserScript==
(function(){

	var messages = document.querySelectorAll(".message-box-content-outer, #listing .infocell td");
	var reg1 = new RegExp("( +)(un|le|votre|notre|leur|ce|son|du)( +)([bcdfghjklmnpqrstvwxz]+)", "gim");
	var reg1b = new RegExp("( +)(une|la|votre|notre|leur|cette|sa)( +)([bcdfghjklmnpqrstvwxz]+)", "gim");
	var reg2 = new RegExp("( +)(une?|le|la|votre|notre|leur|ce|cette)( +)([aeiouyéèê]+)", "gim");
	var reg3 = new RegExp("( +)(une?|le|la|votre|notre|leur|ce|cette)( +)(<i>)(putain|saloperie)(</i>)( de)( +)(qui|que|[a-z]+er|[a-z]+ir|[a-z]+endre)( +)", "gim");
	for (var i = 0; i < messages.length; i++) {
		if( Math.random() > 0.6) { 
			messages[i].innerHTML = messages[i].innerHTML.replace(reg1, " $2 <i>putain</i> de $4");
		}
		if( Math.random() > 0.6) { 
			messages[i].innerHTML = messages[i].innerHTML.replace(reg1b, " $2 <i>saloperie</i> de $4");
		}
		if( Math.random() > 0.6) { 
			messages[i].innerHTML = messages[i].innerHTML.replace(reg2, " $2 <i>putain</i> d'$4");
		}
		messages[i].innerHTML = messages[i].innerHTML.replace(reg3, " $2 $9 ");
		//messages[i].innerHTML = messages[i].innerHTML.replace(reg1, "$1$2putain d'$3$4");
	 // Faire quelque chose avec cellules.item(i) ou cellules[i]
	}
	
	
})();
