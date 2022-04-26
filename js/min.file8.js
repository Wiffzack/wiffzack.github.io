var loader = new ZipLoader( 'css/css1.zip' );

loader.on( 'progress', (function ( event ) {
  console.log( 'loading', event.loaded, event.total );
}) );

// on load
loader.on( 'load', (function ( e ) {

	Object.keys( loader.files ).forEach( (function ( filename ) {

		var url = loader.extractAsBlobUrl( filename, 'text/css' );
		//console.log(url);
		//alert(url);
		var objectURL = url; 
		//window.webkitURL.createObjectURL(url);

		link = document.createElement('link');
		head = document.getElementsByTagName('head')[0];
		link.rel = 'stylesheet';


		tmp = link.cloneNode(true);
		tmp.href = objectURL;
		head.appendChild(tmp);


	}) );

}) );

loader.on( 'error', (function ( event ) {
  console.log( 'error', event.error );
}) );

loader.load();	
	

