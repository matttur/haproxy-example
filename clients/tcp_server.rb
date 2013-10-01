require 'socket'

port = 9999
server = TCPServer.open( port )

loop {
    client = server.accept
    client.puts( 'ruby / tcp @ ' + Socket.gethostname );
    client.close
}
