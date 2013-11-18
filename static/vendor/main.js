var clip = new ZeroClipboard( document.getElementById("copy-button"), {
  moviePath: "/vendor/ZeroClipboard.swf"
} );

clip.on( 'dataRequested', function (client, args) {
  client.setText( $("#fe_text").html().replace(/<br>/g,'\n').trim().replace(/&gt;/g,'>') );
});