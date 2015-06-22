var http = require('http'); //récupération du module http, permet de récupéré des requêtes.
var server = http.createServer();
server.on('request', function(req,res){
	res.writeHead(200, {'content-type' : 'text/plain'});//mise en header du code 200 (succès)
	res.write('Bonjour Nantes');
	res.end();
});


//code permettant d'écouter ce qui se passe sur le port 8080
var port = 8080;
server.listen(port);
server.once('listening', function(){
	console.log('Server démarré sur le port %d, port');
});