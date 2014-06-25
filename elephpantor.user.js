// ==UserScript==
// @name           elephpantor
// @namespace      elephpantor
// @description    Replace all images by a elephpant
// @include        *
// ==/UserScript==
(function(){


var filter   = Array.prototype.filter,
    result   = document.querySelectorAll('*'),
    filtered = filter.call( result, function( node ) {
      var bg = window.getComputedStyle(node,null)['backgroundImage'];
      return !!(!!bg.length && bg.search('url')>-1)
    });
for (i = 0; i < filtered.length; i++) {
  filtered[i].style.backgroundImage = 'url("http://placephant.com/'+filtered[i].offsetWidth%500+'/'+filtered[i].offsetHeight%500+'")';
}

var imgs = document.querySelectorAll('img');
for (i = 0; i < imgs.length; i++) {
  imgs[i].src = 'http://placephant.com/'+imgs[i].offsetWidth%500+'/'+imgs[i].offsetHeight%500+'';
}
	
	

}) ();
