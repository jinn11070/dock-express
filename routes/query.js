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
    listBBS: function(no, cb) {

      var sql = 'select no, subject, content, userId, userName from bbs';
      var param = [];

      if (no !== '' && no !== null) {
        sql = 'select no, subject, content, userId, userName from bbs where no = ?'
        param.push(no)
      }

      client.query(
        sql, param, function(err, results, fields) {
          if (err) throw err;
          cb(results);
        }
      )
/*
    },
    listBBSByNo: function(no, cb) {
      client.query(
          // 'select * from bbs', [], function(err, results, fields) {
          'select no, subject, content, userId, userName from bbs where no = ?', [no], function(err, results, fields) {
            if (err) throw err;
            cb(results[0]);
          }
      )
*/
    }

  }
}




