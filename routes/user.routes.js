const router = require('express').Router()
const crudController = require('../controller/user.controller')
const multer = require('multer')
const path = require('path')


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./public/uploads')

    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)

    }
})

const uploads = multer({storage:storage})

router.get('/add',crudController.docUploadForm)
router.post('/insert',uploads.single('file'),crudController.insertForm)
router.get('/list',crudController.listData)


module.exports = router