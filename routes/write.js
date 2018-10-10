var express = require('express');
var router = express.Router();

var query = require('./query')();

/* POST write */
router.post('/', function(req, res, next) {
  var writeInfo = req.body

  console.log(JSON.stringify(writeInfo))

  /* 1. DB에 저장 */
  query.writeBBS(
      [writeInfo.userId, writeInfo.userName, writeInfo.subject, writeInfo.content]
      , function (result) {
        if (!result) {
          alert("실패!! 저장실패!!")
          return false;
        } else {
          res.render('write', result);
        }

      });
});

module.exports = router;