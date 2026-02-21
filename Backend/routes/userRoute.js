import express from 'express'
import { RegisterUser,LoginUser, GetProfile,UpdateProfile, bookAppointment, Myappointment ,cancelAppointment,payment} from '../controllers/UserController.js'
import Authuser from '../middlewares/Authuser.js'
import upload from '../middlewares/multer.js'

const userRouter=express.Router()

userRouter.post('/register',RegisterUser)
userRouter.post('/login',LoginUser)
userRouter.get('/getprofile',Authuser,GetProfile)
userRouter.post('/updateProfile',upload.single('image'),Authuser,UpdateProfile)
userRouter.post('/book-appointment',Authuser,bookAppointment)
userRouter.get('/myappointment',Authuser,Myappointment)
userRouter.post('/cancelAppointment',Authuser,cancelAppointment)
userRouter.post('/payment',Authuser,payment)


export default userRouter