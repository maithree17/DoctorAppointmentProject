import express from 'express'
import { DoctorList,LoginDoctor,appointmentsDoctor,appointmentcomplete,appointmentcancel } from '../controllers/doctorController.js'
import Authdoctor from '../middlewares/Authdoctor.js'

const doctorRouter=express.Router()

doctorRouter.get('/list',DoctorList)
doctorRouter.post('/login',LoginDoctor)
doctorRouter.get('/appointments',Authdoctor,appointmentsDoctor)
doctorRouter.post('/complete-appointment',Authdoctor,appointmentcomplete)
doctorRouter.post('/cancel-appointment',Authdoctor,appointmentcancel)




export default doctorRouter