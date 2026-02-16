import express from 'express'
import { DoctorList } from '../controllers/doctorController.js'

const doctorRouter=express.Router()

doctorRouter.get('/list',DoctorList)

export default doctorRouter