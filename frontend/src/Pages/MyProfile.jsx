import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../Context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";

function Myprofile() {
  const { userdata, setuserdata,backendURL,LoadUserProfileData,token } = useContext(AppContext);

  const [isEdit, setisEdit] = useState(false);
  const [image, setimage] = useState(false);

  const updateUserProfile = async () => {
    try {
      const formData = new FormData();

      formData.append("name", userdata.name);
      formData.append("phone", userdata.phone);
      formData.append("gender", userdata.gender);
      formData.append("dob", userdata.dob);
      formData.append("address", JSON.stringify(userdata.address));

      if (image) {
        formData.append("image", image);
      }

      const { data } = await axios.post(backendURL + "/api/user/updateProfile",formData,{headers:{token}});

      if (data.success) {
        await LoadUserProfileData();
        toast.success(data.message)
        setisEdit(false);
        setimage(false);
        
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(data.message)
    }
  };


  return (
    userdata && (
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 mt-10 border border-blue-200">

        <div className="flex flex-col sm:flex-row items-center gap-8 border-b pb-8">
          {isEdit ? (
            <label htmlFor="image" className="relative w-36 h-36 cursor-pointer group">
              <img src={image ? URL.createObjectURL(image) : userdata.image} alt="profile" className="w-36 h-36 rounded-full object-cover border-4 border-blue-400 shadow-lg"/>

              <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                <img src={assets.upload_icon} alt="upload" className="w-8 h-8"/>
              </div>

              <input type="file" id="image" hidden onChange={(e) => setimage(e.target.files[0])}/>
            </label>
          ) : (
            <img src={userdata.image} alt="profile" className="w-36 h-36 rounded-full object-cover border-4 border-blue-400 shadow-lg"/>
          )}

          <div className="flex-1 text-center sm:text-left">
            {isEdit ? (
              <input type="text" value={userdata.name} onChange={(e) => setuserdata((prev) => ({  ...prev,  name: e.target.value }))} className="border px-4 py-2 rounded-lg text-xl font-semibold w-full"/>
            ) : (
              <h2 className="text-3xl font-bold text-gray-800">{userdata.name}</h2>
            )}

            <p className="text-blue-500 text-lg mt-2">{userdata.email}</p>
          </div>
        </div>


        <div className="mt-8">
          <p className="text-xl font-semibold text-gray-800 mb-6"> Contact Information</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-600">
            <div>
              <p className="text-sm font-medium mb-1">Phone</p>
              {isEdit ? (
                <input type="text" value={userdata.phone} onChange={(e) =>setuserdata((prev) => ({...prev,phone: e.target.value,}))} className="border px-3 py-2 rounded-md w-full"/>
              ) : (
                <p className="text-blue-600">{userdata.phone}</p>
              )}
            </div>


            <div>
              <p className="text-sm font-medium mb-1">Address</p>
              {isEdit ? (
                <div className="space-y-3">
                  <input type="text" value={userdata.address.line1} onChange={(e) =>setuserdata((prev) => ({...prev,address: {...prev.address,line1: e.target.value},}))} className="border px-3 py-2 rounded-md w-full"/>
                  <input type="text" value={userdata.address.line2} onChange={(e) => setuserdata((prev) => ({...prev,address: { ...prev.address, line2: e.target.value, }, }))} className="border px-3 py-2 rounded-md w-full"/>
                </div>
              ) : (
                <p>{userdata.address.line1}<br />{userdata.address.line2}</p>
              )}
            </div>
          </div>
        </div>


        <div className="mt-10">
          <p className="text-xl font-semibold text-gray-800 mb-6">Basic Information</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-600">
            <div>
              <p className="text-sm font-medium mb-1">Gender</p>
              {isEdit ? (
                <select value={userdata.gender} onChange={(e) => setuserdata((prev) => ({...prev, gender: e.target.value, }))}className="border px-3 py-2 rounded-md w-full">
                  <option>Male</option>
                  <option>Female</option>
                </select>
              ) : (
                <p>{userdata.gender}</p>
              )}
            </div>

            <div>
              <p className="text-sm font-medium mb-1">Date of Birth</p>
              {isEdit ? (
                <input type="date" value={userdata.dob} onChange={(e) => setuserdata((prev) => ({  ...prev, dob: e.target.value,}))} className="border px-3 py-2 rounded-md w-full"/>
              ) : (
                <p>{userdata.dob}</p>
              )}
            </div>
          </div>
        </div>


        <div className="flex justify-end mt-10">
          {isEdit ? (
            <button onClick={updateUserProfile} className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded-lg shadow-md transition">Save Changes </button>
          ) : (
            <button onClick={() => setisEdit(true)} className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-2 rounded-lg transition">  Edit Profile </button>
          )}
        </div>
      </div>
    )
  );
}

export default Myprofile;
