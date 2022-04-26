loadjs(['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'], 'jqueryload');
loadjs.ready('jqueryload', function() {
loadjs(['https://cdnjs.cloudflare.com/ajax/libs/tinycolor/1.4.1/tinycolor.min.js','https://cdnjs.cloudflare.com/ajax/libs/AniJS/0.9.3/anijs-min.js', 'https://cdnjs.cloudflare.com/ajax/libs/jquery-contextmenu/2.9.0/jquery.contextMenu.min.js','https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.js','js/dynamics.js'], 'other');
});

loadjs.ready('other', function() {
loadjs(['js/file10.js']);
//loadjs(['js/mv.es5.js', 'js/detect-browser.js','js/effect.js','js/main.js','js/betweenmain.js','js/file5.js'], 'foobar');

});
