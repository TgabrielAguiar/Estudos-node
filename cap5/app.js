// carregando arquivos html no node
const express = require("express");
const path = require("path");


const app = express();

app.get("/", function(req,res){
  res.sendFile(__dirname + "/src/index.html");
//  /home/gabriel6212/Documentos/node/cap5
});

app.get("/sobre-empresa", function(req, res){
  res.sendFile(__dirname + "/src/sobre-empresa.html")
});

app.get("/contato", function(req, res){
  res.send("Página de contato.");
});

app.get("/blog", function(req, res){
  res.send("Página do blog.");
});

app.listen(8080);