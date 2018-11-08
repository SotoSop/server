const router = require('express').Router()
const Controller = require('../controllers/image.js')
const Image = require('../helpers/image')

router.get('/', Controller.getImages)
router.get('/search?', Controller.searchImage)

module.exports = router