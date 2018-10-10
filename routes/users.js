var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({'userList': [
    {'name':'정수진', age: 37, blood: 'B'}
    , {'name': '김규완', age: 24, blood: 'O'}
    , {'name': '박인호', age: 26, blood: 'O'}
  ]});
});

module.exports = router;
