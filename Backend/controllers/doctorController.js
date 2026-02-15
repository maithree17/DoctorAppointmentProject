import doctorModel from "../models/doctormodel.js"

const changeAvailability =async(req,res)=>{
    try{
        const {docId} =req.body
        const docData=await doctorModel.findById(docId)

        await doctorModel.findByIdAndUpdate(docId,{available:!docData.available})
        res.json({success:true,message:'availabilty changed'})
    }catch(error){
        console.log(error)
       return  res.json({success:false,message:error.message})
    }
}

export {changeAvailability}