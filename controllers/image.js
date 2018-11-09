const Image = require('../models/image.js')
class Controller {
    static getImages(req, res) {
        Image
            .find()
            .then((data) => {
                res.status(200).json({ data: data })
            })
            .catch((err) => {
                console.log(err)
                res.status(500).json({ message: err })
            })
    }
    static addPhoto(req, res) {
        // console.log(req.file)
        Image
            .find({
                title: req.body.title
            })
            .then((data) => {
                //if data is found: AKA title is already used
                if (data.length !== 0) {
                    res.status(400).json({ message: "Title has already been used" })
                    //if data is not found : aka data is null and title is not already used
                } else {
                    let newImage = new Image({
                        image: req.file.cloudStoragePublicUrl,
                        title: req.body.title,
                        name: req.body.name
                    })
                    return newImage
                        .save()
                        .then((data) => {
                            res.status(201).json({ message: "Image Added", data: data })
                        })
                }
            })
            .catch((err) => {
                console.log(err)
                res.status(500).json({ message: err })
            })
    }
    static addImage(req, res) {
        Image
            .find({
                title: req.body.title
            })
            .then((data) => {
                //if data is found: AKA title is already used
                if (data.length !== 0) {
                    res.status(400).json({ message: "Title has already been used" })
                    //if data is not found : aka data is null and title is not already used
                } else {
                    let newImage = new Image({
                        image: req.body.img,
                        title: req.body.title,
                        name: req.body.name
                    })
                    return newImage
                        .save()
                        .then((data) => {
                            res.status(201).json({ message: "Image Added", data: data })
                        })
                }
            })
            .catch((err) => {
                console.log(err)
                res.status(500).json({ message: err })
            })
    }
    static searchImage(req, res) {
        console.log(req.query.search)
        Image
            .find({
                $or: [
                    { name: new RegExp(req.query.search, 'i') },
                    { title: new RegExp(req.query.search, 'i') }
                ]
            })
            .then((data) => {
                //if not found . . .
                if(data.length === 0) {
                    res.status(400).json({message: "Image with that search criteria not found"})
                } else {
                    res.status(200).json({ message: "Image Found", data: data })
                }
            })
    }
}

module.exports = Controller