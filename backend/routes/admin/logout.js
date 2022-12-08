var express = require('express');
var router = express.Router();
var userModel = require('../../model/usersModel');

router.get('/', function (req, res, next) {
    req.session.destroy();
    res.redirect('/admin/login');
});

module.exports = router;