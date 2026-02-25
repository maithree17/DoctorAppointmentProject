import express from 'express'
import { DoctorList,LoginDoctor,appointmentsDoctor } from '../controllers/doctorController.js'
import Authdoctor from '../middlewares/Authdoctor.js'

const doctorRouter=express.Router()

doctorRouter.get('/list',DoctorList)
doctorRouter.post('/login',LoginDoctor)
doctorRouter.get('/appointments',Authdoctor,appointmentsDoctor)


export default doctorRouter