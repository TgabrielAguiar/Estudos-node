// conectando Mysql com Node
const express = require("express");
const path = require("path");


const app = express();

//conexao com o banco
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "gabrielone",
  password: "1234",
  database: "gabriel"
});

//verifica se tem erro na connection, caso não tenha chama a coneção
connection.connect(function(err){
  if(err){
    console.log("erro ao conectar: " + err.stack);
    return;
  }

  console.log("conectado a " + connection.threadId);
});

// imprime dados do banco
connection.query("SELECT * FROM users", function(err, rows, fields){
  if(!err){
    console.log("Resultado:");
    console.log(rows);
  } else {
    console.log("Erro ao executar consulta");
  }
});



app.listen(8080);