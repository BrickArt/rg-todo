const express = require('express');
const router = express.Router();

router.route('/*')
    .get(function(req, res, next) {
        res.status(403).redirect('/')
    })



module.exports = router;