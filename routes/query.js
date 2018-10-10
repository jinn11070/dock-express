var mysql = require('mysql');

/* 새로운 커넥트 생성*/
var client = mysql.createConnection({
  host: 'localhost',
  port: '3309',
  user: 'root',
  password: '',
  database: 'di'
});

client.connect(function(err) {
  if (err) console.error('error!');
  else console.info('mysql connection open!')
});

module.exports = query;

function query() {
  return {
    writeBBS: function(params, cb) { // parma 은 리스트 형식이어야 함.
      client.query(
      'insert into bbs (userId, userName, subject, content) values(?,?,?,?)'
      , params
      , function(err, results, fields) {
        if (err) cb(false)
        cb(results);
      })
    },
    listBBS: function(cb) {
      client.query(
        'select * from bbs', [], function(err, results, fields) {
          if (err) throw err;
          cb(results);
        }
      )
    }

  }
}




