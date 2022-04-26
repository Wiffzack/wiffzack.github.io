
function saveFile(blob, filename) {
	const a = document.createElement('a');
	document.body.appendChild(a);
    a.href = blob;
    a.download = filename;
    a.click();
  }


const $select = document.getElementById( 'select' );

$select.addEventListener( 'change', function ( event ) {

	const file0 = event.target.files[ 0 ];

	ZipLoader.unzip( file0 ).then( function ( unziped ) {

		Object.keys( unziped.files ).forEach( ( fileName ) => {

			if ( unziped.files[ fileName ].buffer.length === 0 ) return;

			const $div = document.createElement( 'div' );
			const $a = document.createElement( 'a' );
			$a.textContent = fileName;
			//alert(fileName);
			ending = fileName.split(".").pop();
			$a.href = unziped.extractAsBlobUrl( fileName, guessFileType( fileName ) );
			saveFile($a.href, fileName);
			//$div.appendChild( $a );
			//document.body.appendChild( $div );

		} );

	} );

} );


function guessFileType( fileName ) {

	return /\.jpe?g$/i.test( fileName ) ? 'image/jpeg' :
	       /\.png$/i  .test( fileName ) ? 'image/png'  :
	       /\.gif$/i  .test( fileName ) ? 'image/gif'  :
	       /\.txt$/i  .test( fileName ) ? 'text/plain' :
	       /\.js$/i   .test( fileName ) ? 'text/plain' :
	       /\.json$/i .test( fileName ) ? 'text/plain' :
	       /\.html$/i .test( fileName ) ? 'text/plain' :
	       /\.css$/i  .test( fileName ) ? 'text/plain' :
	       /\.svg$/i  .test( fileName ) ? 'text/plain' :
	       /\.mp4$/i  .test( fileName ) ? 'video/mp4   '  :		   
	       /\.mp3$/i  .test( fileName ) ? 'audio/mpeg'  :
	       /\.pdf$/i  .test( fileName ) ? 'application/pdf  '  :
	       /\.gz$/i   .test( fileName ) ? 'application/x-gzip'  :	   
	       'application/octet-stream';

}
