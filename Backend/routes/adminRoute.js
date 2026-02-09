import express from 'express'
import { addDoctor,LoginAdmin } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import Authadmin from '../middlewares/Authadmin.js'

const adminRouter=express.Router()

adminRouter.post('/add-doctor',Authadmin,upload.single('image'),addDoctor)
adminRouter.post('/login',LoginAdmin)

export default adminRouter