var express = require('express');
var router = express.Router();
var userModel = require('../../model/usersModel');

router.get('/', function (req, res, next) {
    res.render('admin/login', {
        layout: 'admin/layout',
    });
});

router.post('/', async function (req, res, next) {
    try {
        var user = req.body.user;
        var password = req.body.passwd

        var data = await userModel.getUserAndPassword(user, password);
        if (data != undefined) {
            req.session.active = data.id;
            req.session.user = data.usuer;
            res.redirect('/admin/dashboard');
        } else {
            res.render('admin/login', {
                layout: 'admin/layout',
                error: true
            });
        }
    } catch (error) {
        console.log(error);
    }

});
module.exports = router;