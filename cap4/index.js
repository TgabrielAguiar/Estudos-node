// conhecendo o nodemon e reestartando o servidor automaticamente

// codigo reciclado do cap anterior
const express = require("express");

const app = express();

app.get("/", function(req,res){
  res.send("Gerenciador Financeiro.");
});

app.get("/contato", function(req, res){
  res.send("Página de contato.");
});

app.get("/sobre-empresa", function(req, res){
  res.send("Página sobre empresa.");
});

app.get("/blog", function(req, res){
  res.send("Página do blog.");
});

app.listen(8080);
