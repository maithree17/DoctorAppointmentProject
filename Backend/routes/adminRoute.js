import express from 'express'
import { addDoctor,AllDoctors,LoginAdmin,Allappointment} from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import Authadmin from '../middlewares/Authadmin.js'
import { changeAvailability } from '../controllers/doctorController.js'

const adminRouter=express.Router()

adminRouter.post('/add-doctor',Authadmin,upload.single('image'),addDoctor)
adminRouter.post('/login',LoginAdmin)
adminRouter.post('/all-doctor',Authadmin,AllDoctors)
adminRouter.post('/change-availability',Authadmin,changeAvailability)
adminRouter.get('/Allappointments',Authadmin,Allappointment)

export default adminRouter