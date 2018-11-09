const router = require('express').Router()
const Controller = require('../controllers/image.js')
const Image = require('../helpers/image')

router.get('/', Controller.getImages)
router.get('/search?', Controller.searchImage)
router.post('/add', Controller.addImage)
router.post('/add-photo',Image.multer.single('img'), Image.sendUploadToGCS, Controller.addPhoto)

module.exports = router