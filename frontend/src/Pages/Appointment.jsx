import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "./RelatedDoctors";
import { toast } from "react-toastify";
import axios from "axios";

function Appointment() {
  const { docId } = useParams();
  const { doctors, dollor ,backendURL,getDoctorsData,token} = useContext(AppContext);

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [Doctorinformation, setDoctorinformation] = useState(null);
  const [docSlot, setdocSlot] = useState([]);
  const [slotidx, setslotidx] = useState(0);
  const [slotTime, setslotTime] = useState("");

  const navigate=useNavigate()

  const Fetchdocinfo = () => {
    const docinfo = doctors.find((doc) => doc._id === docId);
    setDoctorinformation(docinfo);
    console.log(docinfo);
  };

  const AvailableSlote = () => {
    setdocSlot([]);

    //Todays date
    let today = new Date();
    for (let i = 0; i < 7; i++) {
      let currentdate = new Date(today);
      currentdate.setDate(today.getDate() + i);

      let endtime = new Date(currentdate);
      endtime.setHours(21, 0, 0, 0);

      if (i === 0) {
        if (i === 0) {
          let hour = today.getHours();
          let minute = today.getMinutes();

          if (minute > 30) {
            hour += 1;
            minute = 0;
          } else if (minute > 0) {
            minute = 30;
          }

          if (hour < 10) {
            hour = 10;
            minute = 0;
          }

          currentdate.setHours(hour);
          currentdate.setMinutes(minute);
        }
      } else {
        currentdate.setHours(10);
        currentdate.setMinutes(0);
      }

      let timeslot = [];
      while (currentdate < endtime) {
        let formattedtime = currentdate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        //Add slot to array
        let day = currentdate.getDate();
        let month = currentdate.getMonth() + 1;
        let year = currentdate.getFullYear();

        const slotDate = `${day}-${month}-${year}`;

        const isBooked =
          Doctorinformation?.slots_booked?.[slotDate]?.includes(formattedtime);

        if (!isBooked) {
          timeslot.push({
            datetime: new Date(currentdate),
            time: formattedtime,
          });
        }


        //Increment current time by 30 minutes
        currentdate.setMinutes(currentdate.getMinutes() + 30);
      }

      if (timeslot.length > 0) {
        setdocSlot((prev) => [...prev, timeslot]);
      }
    }
  };

  const bookAppointment=async()=>{
    if(!token){
      toast.warn('Login to book appointment')
      return navigate('/login')
    }

    try{
      const date=docSlot[slotidx][0].datetime
      let day=date.getDate()
      let month=date.getMonth()+1
      let year=date.getFullYear()

      const slotDate=day+"-"+month+"-"+year

      const {data}=await axios.post(backendURL+'/api/user/book-appointment',{docId,slotDate,slotTime},{headers:{token}})
      if(data.success){
        toast.success(data.message)
        getDoctorsData()
        navigate('/myappointment')
      }else{
        toast.error(data.message)
      }
    }catch(error){
      console.log(error)
       toast.error(error.message)
    }
  }

  useEffect(() => {
    Fetchdocinfo();
  }, [doctors, docId]);

  useEffect(() => {
    AvailableSlote();
  }, [Doctorinformation]);

  useEffect(() => {
    console.log(docSlot);
  }, [docSlot]);

  useEffect(() => {
    setslotTime("");
  }, [slotidx]);

  return (
    Doctorinformation && (
      <div>
        {/*-----Doctor Details-----*/}
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-blue-500 w-full sm:max-w-64 rounded-lg"
              src={Doctorinformation.image}
              alt="doc image"
            />
          </div>

          <div className="flex-1 border border-gray-400 rounded-lg p-6 sm:p-7 bg-white mx-2 sm:mx-0 mt-4 sm:mt-0">
            {/*----Doc info----*/}
            <p className="flex items-center gap-2 text-2xl font-medium">
              {Doctorinformation.name}
              <img className="w-5" src={assets.verified_icon} alt="verified" />
            </p>
            <div className="flex items-center gap-2 text-ms mt-1 text-gray-600">
              <p>
                {Doctorinformation.degree}-{Doctorinformation.speciality}
              </p>
              <button className="px-3 py-0.5 text-xs font-medium bg-blue-50 border border-blue-200 rounded-full my-3">
                {Doctorinformation.experience}
              </button>
            </div>

            {/*----About doc----*/}
            <div>
              <p className="flex items-center gap-2 text-medium my-2">
                About
                <img src={assets.info_icon} alt="info" />
              </p>
              <p className="text-sm text-gray-600">{Doctorinformation.about}</p>
            </div>

            <p className="text-gray-500 font-medium mt-4">
              Appointment fee :
              <span className="text-gray-600">
                {dollor}
                {Doctorinformation.fees}
              </span>
            </p>
          </div>
        </div>

        {/*-----Booking Slots------*/}
        <div className="sm:ml-72 sm:pl-6 font-medium text-gray-700">
          <p className="py-4 text-lg">Booking Slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {docSlot.length &&
              docSlot.map((item, idx) => (
                <div
                  onClick={() => setslotidx(idx)}
                  className={`text-center py-5 min-w-16 rounded-full cursor-pointer ${slotidx === idx ? "bg-primary text-white" : "border border-gray-200"}`}
                  key={idx}
                >
                  <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>

          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {docSlot.length &&
              docSlot[slotidx].map((item, idx) => (
                <p
                  onClick={() => setslotTime(item.time)}
                  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? "bg-primary text-white" : "text-gray-400 border border-gray-300"}`}
                  key={idx}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>

          <div className="py-14">
            <button onClick={bookAppointment} className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full">
              Book Appointment
            </button>
          </div>
        </div>

        {/*------Listing realted doctors*/}
        <RelatedDoctors
          docId={docId}
          speciality={Doctorinformation.speciality}
        />
      </div>
    )
  );
}

export default Appointment;
