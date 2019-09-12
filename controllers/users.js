var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mbugua21",
  database: "daenjel"
});

con.connect(function(err) {
  if (err) throw err;
  // con.query("SELECT *FROM user", function (err, result, fields) {
  //   if (err) throw err;
  //   console.log(fields);
  // });
  console.log("Connected!");
});