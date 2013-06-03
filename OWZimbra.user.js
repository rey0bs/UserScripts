// ==UserScript==
// @name        OWZimbra
// @namespace   sboye
// @include     *mail.openwide.fr*
// @include     *zimbra2.corp.accelance.fr*
// @version     1.1
// @require http://code.jquery.com/jquery-1.7.2.min.js
// ==/UserScript==


// ==/UserScript==
(function(){
	

    /*** UTILS ***/
    function add_style( rules, media ) {
        el = document.createElement('style');
        el.setAttribute( 'type', 'text/css' );
        for ( i=0; i<rules.length; i++ ) {
            el.innerHTML += rules[ i ] + "\n";
        }
        if ( typeof media != "undefined" ) {
            el.innerHTML = "@media " + media + " { \n" + el.innerHTML + "} \n";
        }
        document.head.appendChild(el);
    }
    function replace_url_with_html_links_in_text( text ) {
        var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+éèàçùêëôûäâöü&@#\/%?=~_|!:,.;()\[\]]*[-A-Z0-9+éèàçùêëôûäâöü&@#\/%=~_|(\[\]])/ig;
        return text.replace(exp,"<a href='$1' style='color: #050293; text-decoration: underline;' target='_blank'>$1</a>"); 
    }
    function replace_url_with_html_links_in_html( text ) {
        var exp = /([^"])((https?|ftp|file):\/\/[-A-Z0-9+éèàçùêëôûäâöü&@#\/%?=~_|!:,.;()\[\]]*[-A-Z0-9+éèàçùêëôûäâöü&@#\/%=~_|(\[\]])/ig;
        return text.replace(exp,"$1<a href='$2' style='color: #050293; text-decoration: underline;' target='_blank'>$2</a>"); 
    }

    /*** ZIMBRA ***/
    var msgs = document.getElementsByClassName('MsgBody-text');
    if ( msgs ) {
        for ( i=0; i<msgs.length; i++ ) {
            msgs[i].innerHTML = replace_url_with_html_links_in_text( msgs[i].innerHTML );
        }
    }
    var msgs = document.getElementsByClassName('MsgBody-html');
    if ( msgs ) {
        for ( i=0; i<msgs.length; i++ ) {
            msgs[i].innerHTML = replace_url_with_html_links_in_html( msgs[i].innerHTML );
        }
    }
    if ( appContextPath && appContextPath == "/zimbra" && self==top) {
        setInterval(
            function(){
                var unread = 0;
                var folders = $('#main_Mail-parent-FOLDER .DwtTreeItem-Text');
                for ( i=0; i<folders.length; i++ ) {
                    var open_pos = folders[i].innerHTML.indexOf(" (") + 2;
                    
                    if ( open_pos != 1 && folders[i].innerHTML.indexOf("Brouillons")+2 == 1 && folders[i].innerHTML.indexOf("Spam")+2 == 1) {
                        var close_pos = folders[i].innerHTML.indexOf(")");
                        unread += parseInt( folders[i].innerHTML.substr( open_pos, close_pos - open_pos ) );
                    }
                }
                if ( unread == 0 ) {
                    document.title = "Zimbra";
                } else {
                    document.title = "("+unread+") Zimbra";
                }
            },
            2000
        );
    }


})();
