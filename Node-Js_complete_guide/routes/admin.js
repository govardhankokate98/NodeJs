const express = require('express');
const path = require('path')
const rootDir = require('../utils/path')
const router = express.Router()

router.get('/user', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))

})

module.exports = router;