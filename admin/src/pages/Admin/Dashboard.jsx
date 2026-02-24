import React from "react";
import { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import { useEffect } from "react";
import { assets } from "../../assets/assets";

function Dashboard() {
  const { atoken, getDashboardData, dashData, cancelAppointment } =
    useContext(AdminContext);

  useEffect(() => {
    if (atoken) {
      getDashboardData();
    }
  }, [atoken]);

  return (
    dashData && (
      <div className="m-7 max-w-[1400px] mx-auto bg-gray-50 min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9">
          <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
            <img className="w-12 h-12" src={assets.doctor_icon} alt="doc_icon"/>
            <div>
              <p className="text-3xl font-bold text-gray-800"> {dashData.doctors}</p>
              <p className="text-gray-500 text-sm">Doctors</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
            <img className="w-12 h-12" src={assets.appointments_icon} alt="doc_icon"/>
            <div>
              <p className="text-3xl font-bold text-gray-800"> {dashData.appointments}</p>
              <p className="text-gray-500 text-sm">Appointments</p>
            </div>
          </div>

          <div className="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
            <img className="w-12 h-12" src={assets.patients_icon} alt="doc_icon"/>
            <div>
              <p className="text-3xl font-bold text-gray-800"> {dashData.patients}</p>
              <p className="text-gray-500 text-sm">Patients</p>
            </div>
          </div>
        </div>

        <div className="bg-white mt-12 rounded-2xl shadow-md border border-gray-100">
          <div className="flex items-center gap-3 px-6 py-4 border-b bg-gray-50 rounded-t-2xl">
            <img src={assets.list_icon} alt="list_icon" />
            <p>Latest Bookings</p>
          </div>

          <div className="p-6 space-y-4">
            {dashData.latest_appointments.map((appointmnet, idx) => (
              <div key={idx} className="flex items-center gap-8 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
                <img className="w-12 h-12 rounded-full object-cover border"  src={appointmnet.docData.image}  alt="doc_image"/>
                <div className="flex items-center gap-5 flex-1">
                  <div>
                    <p className="font-semibold text-gray-800"> {appointmnet.docData.name}</p>
                    <p className="text-sm text-gray-500">{appointmnet.slotDate}</p>
                  </div>
                </div>
                {appointmnet.cancelled ? (
                  <p className="text-red-500 text-xs font-semibold bg-red-50 px-3 py-1 rounded-full">Cancelled</p>
                ) : (
                  <img  onClick={() => cancelAppointment(appointmnet._id)} className="w-10 cursor-pointer" src={assets.cancel_icon} alt="cancelimg" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
}

export default Dashboard;
