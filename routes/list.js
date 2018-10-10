var express = require('express');
var router = express.Router();

var query = require('./query')();

/* POST write */
router.get('/', function(req, res, next) {
  /* 1. DB에 저장 */
  query.listBBS(function(results) {
    // res.send({userList:results})

    console.log(JSON.stringify(results))
    res.render('list', {userList:results})
  });

});

module.exports = router;