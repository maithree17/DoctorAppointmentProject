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
export { changeAvailability, DoctorList ,LoginDoctor,appointmentsDoctor};
