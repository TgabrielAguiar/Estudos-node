// criando servidor http e imprimindo texto

const http = require("http");

http.createServer(function(req, res){
  res.end("Gerenciador Financeiro");
}).listen(8080);
