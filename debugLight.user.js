// ==UserScript==
// @name        debugLight
// @namespace   sboye
// @include     *
// @exclude     *google.*
// @exclude     *openwide.fr*
// @exclude     *duckduckgo.com*
// @version     1
// ==/UserScript==
(function(){
	
	if (typeof unsafeWindow.jQuery !== 'undefined') {
		var $ = unsafeWindow.jQuery;

		// We check that is really an eZ Publish Back Office
		$('#debug .notice, #debug .notice + tr, #debug .debug, #debug .debug + tr, #debug .timing, #debug .timing + tr, #debug .debug-toolbar').hide();
		
		$('#debug, #debug h2, #debug h3').css('font-size', '13px');
		
	}
	GM_wait();
})();
