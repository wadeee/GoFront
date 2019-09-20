var express = require('express');
var router = express.Router();

/* GET works */
router.get(encodeURI('/e⁻'), function(req, res, next) {
  res.render('e⁻', { title: 'Electron Builder e⁻' });
});

module.exports = router;
