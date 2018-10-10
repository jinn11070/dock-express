var express = require('express');
var router = express.Router();

/* POST write */
router.post('/', function(req, res, next) {
  var writeInfo = req.body

  /* 1. DB에 저장 */

  /* 2. list 로 이동 */
  res.render('list', result);
});

module.exports = router;