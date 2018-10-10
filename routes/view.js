var express = require('express');
var router = express.Router();

var query = require('./query')();

/* view */
router.get('/view/:no', function(req, res) {
  query.listBBS(req.params.no, function(result) {
    console.log(JSON.stringify(result))
    res.render('view', result[0])
  })
});

module.exports = router;