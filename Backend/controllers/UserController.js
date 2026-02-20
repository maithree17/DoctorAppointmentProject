import validator from 'validator'
import bcrypt from 'bcrypt'
import userModel from '../models/usermodel.js'
import jwt from "jsonwebtoken"
import {v2 as cloudinary} from 'cloudinary'
import doctorModel from '../models/doctormodel.js'
import appointmentModel from '../models/Appointmentmodel.js'

//API to register
const RegisterUser=async (req,res)=>{
    try{
        const {name,email,password} =req.body
        if(!name||!email||!password){
            return res.json({success:false,message:'Details is missing'})
        }

        if(!validator.isEmail(email)){
            return res.json({success:false,message:'Enter a valid email'})
        }

        if(password.length<8){
            return res.json({success:false,message:"Please enter a strong password"})
        }

        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)

        const UserData={
            name,
            email,
            password:hashedPassword,

        }

        const newuser=new userModel(UserData)
        const user=await newuser.save()

        const token=jwt.sign({id:user._id},process.env.JWT_SECRET)
        res.json({success:true,token})
    }catch(error){
        console.log(error)
       return  res.json({success:false,message:error.message})
    }
}


//API for user login
const LoginUser=async(req,res)=>{
    try{
        const {email,password} =req.body
        const user=await userModel.findOne({email})
        if(!user){
            return  res.json({success:false,message:"User does not exist"}) 
        }
        const ismatch=await bcrypt.compare(password,user.password)
        if(ismatch){
            const token=jwt.sign({id:user._id},process.env.JWT_SECRET)
            res.json({success:true,token})
        }else{
            return  res.json({success:false,message:"Invalid credentials"}) 
        }
    }catch(error){
       console.log(error)
       return  res.json({success:false,message:error.message}) 
    }
}

//API to get user progile data,user login so sends token and access userid using that token
const GetProfile=async(req,res)=>{
    try{
        const userId =req.userId
        const userData=await userModel.findById(userId).select('-password')

        res.json({success:true,userData})

    }catch(error){
        console.log(error)
       return  res.json({success:false,message:error.message}) 
    }
}

const UpdateProfile=async(req,res)=>{
    try{
        const userId = req.userId
        const {name,phone,address,dob,gender}=req.body
        const imageFile=req.file

        if(!name||!phone||!address||!dob||!gender){
            return res.json({success:false,message:"Data missing"})
        }

        await userModel.findByIdAndUpdate(userId,{name,phone,address:JSON.parse(address),dob,gender})
        if(imageFile){
            //upload image to cloudinary
            const imageUpload=await cloudinary.uploader.upload(imageFile.path,{resource_type:'image'})
            const imageURL=imageUpload.secure_url

            await userModel.findByIdAndUpdate(userId,{image:imageURL})
        }

        res.json({success:true,message:"Profile updated"})
    }catch(error){
        console.log(error)
       return  res.json({success:false,message:error.message}) 
    }
}

//API to book appointment
const bookAppointment =async(req,res)=>{
    try{
        const userId=req.userId
        const {docId,slotDate,slotTime}=req.body
        const docData=await doctorModel.findById(docId).select('-password')
        if(!docData.available){
            return res.json({success:false,message:'Doctor not available'})
        }

        let slots_booked=docData.slots_booked

        if(slots_booked[slotDate]){
            if(slots_booked[slotDate].includes(slotTime)){
                return res.json({success:false,message:'Slot not avalable'})
            }else{
                slots_booked[slotDate].push(slotTime)
            }
        }else{
            slots_booked[slotDate]=[]
            slots_booked[slotDate].push(slotTime)
        }

        const userData=await userModel.findById(userId).select('-password')
        delete docData.slots_booked

        const appointment={
            userId,
            docId,
            userData,
            docData,
            amount:docData.fees,
            slotTime,
            slotDate,
            date:Date.now()
        }

        const newappointment=new appointmentModel(appointment)
        await newappointment.save()

        //Save new Slots data in docData
        await doctorModel.findByIdAndUpdate(docId,{slots_booked})

        res.json({success:true,message:'appointment booked'})
    }catch(error){
        console.log(error)
       return  res.json({success:false,message:error.message})
    }
}

//API to get myappointment
const Myappointment=async(req,res)=>{
    try{
        const userId=req.userId
        const userappointmentData=await appointmentModel.find({userId})
        res.json({success:true,userappointmentData})
    }catch(error){
        console.log(error)
       return  res.json({success:false,message:error.message})
    }
}
export {RegisterUser,LoginUser,GetProfile,UpdateProfile,bookAppointment,Myappointment}
