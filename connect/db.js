var mysql      = require('mysql');
module.exports = () => {
  return mysql.createConnection({
    host     : 'localhost',
    user     : 'juan',
    password : 'juan',
    database : 'visibilidad'
  });
}

