// apagando no mysql com node

//conexao com o banco
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "gabrielone",
  password: "1234",
  database: "gabriel"
});

connection.connect(function(err){
  if (err) console.error("Erro ao realizar conexão co o BD: "
  + err.stack); return;
});

// deletando usuarios

connection.query("DELETE FROM users WHERE id = 3", function(err,result){
  if(!err){
    console.log("Usuario apagado com sucesso!");
  } else {
    console.log("Erro ao apagar usuario");
  }
});