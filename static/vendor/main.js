var clip = new ZeroClipboard( document.getElementById("copy-button"), {
  moviePath: "/vendor/ZeroClipboard.swf"
} );

clip.on( 'dataRequested', function (client, args) {
  client.setText( $("#fe_text").text() );
});