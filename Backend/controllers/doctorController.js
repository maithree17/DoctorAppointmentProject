import doctorModel from "../models/doctormodel.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import appointmentModel from "../models/Appointmentmodel.js";


const changeAvailability = async (req, res) => {
  try {
    const { docId } = req.body;
    const docData = await doctorModel.findById(docId);

    await doctorModel.findByIdAndUpdate(docId, {
      available: !docData.available,
    });
    res.json({ success: true, message: "availabilty changed" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

const DoctorList = async (req, res) => {
  try {
    const doctors = await doctorModel.find({}).select(["-password", "-email"]);
    res.json({ success: true, doctors });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

//API for doctor Login
const LoginDoctor = async (req, res) => {
  try {
    const { email, password } = req.body;
    const doctor = await doctorModel.findOne({ email });

    if (!doctor) {
      return res.json({ success: false, message: "Invalid credencials" });
    }

    const ismatch = await bcrypt.compare(password, doctor.password);
    if (ismatch) {
      const token = jwt.sign({ id: doctor._id }, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      return res.json({ success: false, message: "Invalid credentials" });
    }

  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

//Api to get all appointments of doctor
const appointmentsDoctor=async(req,res)=>{
  try{
    const docId=req.docId
    const doctorappointments=await appointmentModel.find({docId})

    res.json({success:true,appointments:doctorappointments})

  }catch(error){
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
}

//API to mark appointment completed completed
const appointmentcomplete=async(req,res)=>{
  try{
    const docId=req.docId
    const {appointmentId}=req.body
    const appointmentData=await appointmentModel.findById(appointmentId)
    if(appointmentData &&appointmentData.docId===docId){
      await appointmentModel.findByIdAndUpdate(appointmentId,{isCompleted:true})
      return res.json({success:true,message:'Appointment complete'})
    }else{
      res.json({success:false,message:'Mark failed'})
    }
  }catch(error){
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
}

//API to cancel appointment 
const appointmentcancel=async(req,res)=>{
  try{
    const docId=req.docId
    const {appointmentId}=req.body
    const appointmentData=await appointmentModel.findById(appointmentId)
    if(appointmentData &&appointmentData.docId===docId){
      await appointmentModel.findByIdAndUpdate(appointmentId,{cancelled:true})
      return res.json({success:true,message:'Appointment cancelled'})
    }else{
      res.json({success:false,message:'cancellation failed'})
    }
  }catch(error){
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
}

//API to get dashboarddata for doctor panel
const doctorDashboard=async(req,res)=>{
  try{
    const docId=req.docId
    const appointments=await appointmentModel.find({docId})
    let earning=0
    appointments.map((item)=>{
      if(item.isCompleted||item.payment){
        earning+=item.amount
      }
    }
    )
    let patients=[]
    appointments.map((item)=>{
      if(!patients.includes(item.userId)){
        patients.push(item.userId)
      }
    })

    const dashData={
      earning,
      appointments:appointments.length,
      patients:patients.length,
      latestAppointment:appointments.reverse().slice(0,5)
    }

    res.json({success:true,dashData})

  }catch(error){
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
}

//API to getdoctor profile for Doctor panel
const doctorProfile =async (req,res)=>{
  try{
    const docId=req.docId
    const profileData=await doctorModel.findById(docId).select('-password')

    res.json({success:true,profileData})

  }catch(error){
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
}

//API to update doctor profile
const UpdateProfile=async(req,res)=>{
  try{
    const docId=req.docId
    const {fees,address,available}=req.body

    await doctorModel.findByIdAndUpdate(docId,{fees,address,available})
    res.json({success:true,message:'Profile Updated'})

  }catch(error){
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
}
export { changeAvailability, DoctorList ,LoginDoctor,appointmentsDoctor,appointmentcomplete,appointmentcancel,doctorDashboard,doctorProfile,UpdateProfile};
