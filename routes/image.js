const router = require('express').Router()
const Controller = require('../controllers/image.js')
const Image = require('../helpers/image')

router.get('/', Controller.getImages)
router.post('/add',Image.multer.single('img'),Image.sendUploadToGCS, Controller.addImage)
router.post('/search?', Controller.searchImage)

module.exports = router