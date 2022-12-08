var express = require('express');
var router = express.Router();
var nftModel = require('../model/nftModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/nft', async function (req, res, next) {
    let nft = await nftModel.getNft();
    nft = nft.map(nft => {
        if (nft.imgpath) {
            const imgpath = cloudinary.url(nft.imgpath, {
                width: 200,
                height: 200,
                crop: 'fill'
            });
            return {
                ...nft,
                imgpath
            }
        } else {
            return {
                ...nft,
                imgpath:''
            }
        }
    });
    res.json(nft);
});

router.post('/contact', async (req, res) => {
    const mail = {
        to: 'guillermo.codes@gmail.com',
        subject: 'Contact from NFT Livewire',
        html: `The client ${req.body.nombre}. <br>with email: ${req.body.email}<br> Requested this contact: ${req.body.mensaje}`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });
    await transport.sendMail(mail);
    res.status(201).json({
        error:false,
        message: 'Message Sent'
    });
});

module.exports = router;