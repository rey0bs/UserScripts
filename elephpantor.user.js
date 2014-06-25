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
  filtered[i].style.backgroundImage = 'url("http://placephant.com/'+Math.max(16,filtered[i].offsetWidth%750)+'/'+Math.max(15,filtered[i].offsetHeight%750)+'")';
}

var imgs = document.querySelectorAll('img');
for (i = 0; i < imgs.length; i++) {
  imgs[i].src = 'http://placephant.com/'+Math.max(14,imgs[i].offsetWidth%750)+'/'+Math.max(17,imgs[i].offsetHeight%750);
}
	
	

}) ();
