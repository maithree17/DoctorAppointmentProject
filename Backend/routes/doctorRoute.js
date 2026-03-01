import express from 'express'
import { DoctorList,LoginDoctor,appointmentsDoctor,appointmentcomplete,appointmentcancel ,doctorDashboard,doctorProfile,UpdateProfile} from '../controllers/doctorController.js'
import Authdoctor from '../middlewares/Authdoctor.js'

const doctorRouter=express.Router()

doctorRouter.get('/list',DoctorList)
doctorRouter.post('/login',LoginDoctor)
doctorRouter.get('/appointments',Authdoctor,appointmentsDoctor)
doctorRouter.post('/complete-appointment',Authdoctor,appointmentcomplete)
doctorRouter.post('/cancel-appointment',Authdoctor,appointmentcancel)
doctorRouter.get('/dashboard',Authdoctor,doctorDashboard)
doctorRouter.get('/profile',Authdoctor,doctorProfile)
doctorRouter.post('/update-profile',Authdoctor,UpdateProfile)


export default doctorRouter