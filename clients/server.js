var http = require('http');

function start()
{
	function onRequest( req, res )
	{
		var os = require( "os" );

		res.writeHead(
			200,
			{
				"Content-Type": "text/plain",
				"Cache-Control": "no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0"
			}
		);
		res.write( "node.js / http @ " + os.hostname( ) );
		res.end( );
	}

	http.createServer( onRequest ).listen(8888);
}

exports.start = start;
