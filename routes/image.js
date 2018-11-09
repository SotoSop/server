const router = require('express').Router()
const Controller = require('../controllers/image.js')
const Image = require('../helpers/image')

router.get('/', Controller.getImages)
router.post('/add', Controller.addImage)
router.post('/add-photo',Image.multer.single('img'), Image.sendUploadToGCS, Controller.addPhoto)
router.post('/search?', Controller.searchImage)

module.exports = router