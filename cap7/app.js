// cadastrando no mysql com node

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

// cadastrando usuario
connection.query(
  "INSERT INTO users(nome, email) VALUES ('Tayane', 'tayane@mail.com')",function(err, result){
    if(!err){
      console.log("Usuario cadastrado com sucesso!")
    } else {
      console.log("Erro ao cadastrar usuario");
    }
  }
);