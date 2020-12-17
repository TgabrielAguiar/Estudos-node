// editando no mysql com node

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

// editando usuario

connection.query("UPDATE users SET nome = 'Charles' WHERE id='3'", function(err, result){
  if(!err){
    console.log("Usuario editado com sucesso!")
  } else{
    console.log("Erro: o usuario não foi editado com sucesso")
  }
});