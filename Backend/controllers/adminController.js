import validator from 'validator'
import bcrypt from 'bcrypt'
import {v2 as cloudinary} from 'cloudinary'
import doctorModel from '../models/doctormodel.js'


//api for adding doctor
const addDoctor = async(req,res)=>{
    try{
        const {name,email,password,speciality,degree,experience,about,fees,address} =req.body
        const imageFile=req.file

        if(!name||!email||!password||!speciality||!degree||!experience||!about||!fees||!address||!imageFile){
            return res.json({success:false,message:"Some data is missing fill all details"})
        }

        //checking format
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter a valid email"})
        }

        //checking password
        if(password.length<8){
            return res.json({success:false,message:"Please enter a strong password"})
        }

        //hashing doctor password
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)

        //upload image to cloudinary
        const imageUpload=await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})
        const imageURL=imageUpload.secure_url

        const doctorData={
            name,
            email,
            image:imageURL,
            password:hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address:JSON.parse(address),
            date:Date.now()
        }

        const newDoctor=new doctorModel(doctorData)
        await newDoctor.save()

        res.json({success:true,message:"doctor added"})
        console.log(doctorData)
    }catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}
export {addDoctor}