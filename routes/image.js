const router = require('express').Router()
const Controller = require('../controllers/image.js')

router.get('/', Controller.getImages)
router.post('/add-nael', Controller.addImageNael)
router.get('/search?', Controller.searchImage)

module.exports = router