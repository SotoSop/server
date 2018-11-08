const router = require('express').Router()
const Controller = require('../controllers/image.js')

router.get('/', Controller.getImages)
router.post('/add', Controller.addImage)
router.post('/search', Controller.searchImage)


module.exports = router