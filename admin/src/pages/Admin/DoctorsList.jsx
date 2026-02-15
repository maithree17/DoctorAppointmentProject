import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";

function DoctorsList() {
  const { doctors, atoken, getAlldoctors, changeAvailability } =
    useContext(AdminContext);

  useEffect(() => {
    if (atoken) {
      getAlldoctors();
    }
  }, [atoken]);

  return (
    <div className="m-5 w-full">
      <h1 className="text-2xl font-semibold mb-6">All Doctors</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {doctors.map((doc, idx) => (
          <div
            key={doc._id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition duration-300">
            <div className="flex flex-col items-center text-center">
              <img className="w-32 h-32 rounded-full object-cover shadow-md border border-gray-200" src={doc.image} alt={doc._id}/>

              <div className="mt-4">
                <div className="flex items-center gap-2 justify-center">
                  <input onChange={() => changeAvailability(doc._id)} type="checkbox" checked={doc.available}/>
                  <p className={`font-semibold ${doc.available ? "text-green-600" : "text-red-600"}`}>{doc.available ? "Available" : "Unavailable"}</p>
                </div>

                <p className="text-gray-900 font-semibold mt-2">{doc.name} </p>

                <p className="text-gray-600 text-sm">{doc.speciality}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorsList;
