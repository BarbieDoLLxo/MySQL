var MySQL = require("MySQL");
var connection = MySQL.createConnection({
    host:"localhost",
    port: 3306,
    user:"root",
    password:"juicyJ03@$",
    database: "bamazon_db"
});

connection.connect(function(err){
    if(err) throw err;
    console.log("connected as id" + connection.threadId);
    connection.end();
});
