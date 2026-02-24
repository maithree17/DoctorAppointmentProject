import express from 'express'
import { DoctorList,LoginDoctor } from '../controllers/doctorController.js'

const doctorRouter=express.Router()

doctorRouter.get('/list',DoctorList)
doctorRouter.post('/login',LoginDoctor)


export default doctorRouter