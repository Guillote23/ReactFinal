var express = require('express');
var router = express.Router();
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);
var nftModel = require('../../model/nftModel');

router.get('/dashboard', function (req, res, next) {
    res.render('admin/dashboard', {
        layout: 'admin/layout',
        active: req.session.active
    });
});

router.get('/nft', async function (req, res, next) {
    var nft = await nftModel.getNft();

    nft = nft.map(nft => {
        if (nft.imgpath) {
            const image = cloudinary.image(nft.imgpath, {
                width: 80,
                height: 50,
                crop: 'fill'
            });
            return {
                ...nft,
                image
            }
        } else {
            return {
                ...nft,
                image: ''
            }
        }
    });
    res.render('admin/nft', {
        layout: 'admin/layout',
        active: req.session.active,
        nft
    });
});

router.get('/add', function (req, res, next) {
    res.render('admin/add', {
        layout: 'admin/layout',
        active: req.session.active,
    });
});

router.post('/add', async (req, res, next) => {
    try {
        var imgpath = '';
        if(req.files && Object.keys(req.files).length > 0) {
            image = req.files.imgpath;
            imgpath = (await uploader(image.tempFilePath)).public_id;
        }
        if (req.body.name != "" && req.body.price != "") {
            await nftModel.addNft({
                ...req.body,
                imgpath
            });
            res.redirect("/admin/nft");
        } else {
            res.render('admin/add', {
                layout: 'admin/layout',
                active: req.session.active,
                error: true,
                message: 'All inputs are required'
            });
        }

    } catch (error) {
        res.render('admin/add', {
            layout: 'admin/layout',
            active: req.session.active,
            error: true,
            message: 'ERROR adding NFT to the database'
        });
    }
});

router.get('/deletenft/:id', async (req, res, next) => {
    var id = req.params.id;
    let nft = await nftModel.getNftById(id);
    if (nft.imgpath) {
        await (destroy(nft.imgpath));
    }
    await nftModel.deleteNft(id);
    res.redirect('/admin/nft');
});

router.get('/edit/:id', async (req, res, next) => {
    var id = req.params.id;
    var nft = await nftModel.getNftById(id);

    res.render('admin/edit', {
        layout: 'admin/layout',
        active: req.session.active,
        nft
    })
});

router.post('/edit', async (req, res, next) => {

    try {
      
        let imgpath = req.body.img_org;
        let rmold = false;

        if (req.body.delcurrent == 1) {
            imgpath=null;
            rmold = true;
        } else {
            if (req.files && Object.keys(req.files).length > 0) {
                image = req.files.imgpath;
                imgpath = (await uploader(image.tempFilePath)).public_id;
                rmold = true;
            }
        }

        if (rmold && req.body.img_org) {
            await(destroy(req.body.img_org));
        }

        let obj = {
            name: req.body.name,
            price: req.body.price,
            imgpath
        }
        await nftModel.updateNft(obj, req.body.id);

        res.redirect('/admin/nft');

    } catch (error) {
        res.render('admin/edit', {
            layout: 'admin/layout',
            error: true, message: 'ERROR while editing this product.',
            active: req.session.active
        });
    }

});
module.exports = router;