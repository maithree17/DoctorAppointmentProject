import React, { useContext, useEffect, useState } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'

function DoctorProfile() {

  const { dtoken, profileData, setprofileData, getProfiledata, updateProfile } = useContext(DoctorContext)
  const { currency } = useContext(AppContext)

  const [isEdit, setisEdit] = useState(false)

  useEffect(() => {
    if (dtoken) {
      getProfiledata()
    }
  }, [dtoken])

  const handleSave = async () => {
    await updateProfile(profileData)
    setisEdit(false)
  }

  const handleCancel = () => {
    getProfiledata()
    setisEdit(false)
  }

  return profileData && (
    <div className="w-full px-6 lg:px-10 py-8">
      <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-10 w-full">

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <img className="w-64 h-64 object-cover rounded-2xl shadow-md border" src={profileData.image} alt="doc-image"/>

          <div className="space-y-6 flex-1">

            <p className="text-3xl font-bold text-gray-800">{profileData.name}</p>

            <div className="flex flex-wrap items-center gap-4">
              <p className="text-gray-600 text-lg">{profileData.degree} - {profileData.speciality}</p>
              <button className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"> {profileData.experience}</button>
            </div>

            {/* About */}
            <div>
              <p className="font-semibold text-gray-700 mb-1">About:</p>

              {isEdit ? (
                <textarea className="w-full border rounded-lg p-2" value={profileData.about} onChange={(e) => setprofileData(prev => ({ ...prev, about: e.target.value })) }/>
              ) : (
                <p className="text-gray-600 leading-relaxed"> {profileData.about}</p>
              )}
            </div>

            {/* Fees */}
            <p className="text-lg font-medium text-gray-700">Appointment fee:
              <span className="ml-2 text-blue-600 font-semibold"> {currency} {isEdit ? (
                  <input type="number" className="ml-2 border rounded px-2 py-1 w-24" value={profileData.fees} onChange={(e) => setprofileData(prev => ({  ...prev, fees: e.target.value}))}/>
                ) : (
                  profileData.fees
                )}
              </span>
            </p>

            {/* Address */}
            <div>
              <p className="font-semibold text-gray-700 mb-1">Address:</p>

              {isEdit ? (
                <>
                  <input className="w-full border rounded-lg p-2 mb-2" value={profileData.address.line1} onChange={(e) => setprofileData(prev => ({...prev,address: {...prev.address,line1: e.target.value} }))}/>
                  <input className="w-full border rounded-lg p-2" value={profileData.address.line2} onChange={(e) => setprofileData(prev => ({  ...prev,address: { ...prev.address,line2: e.target.value}}))}/>
                </>
              ) : (
                <>
                  <p className="text-gray-600">{profileData.address.line1}</p>
                  <p className="text-gray-600"> {profileData.address.line2}</p>
                </>
              )}
            </div>

            {/* Availability */}
            <div className="flex items-center gap-3">
              <input type="checkbox" checked={profileData.available} onChange={() =>setprofileData(prev => ({...prev,available: !prev.available}))} className="w-5 h-5 accent-green-600 cursor-pointer"/>
              <label className="text-gray-700 font-medium">Available</label>
            </div>

            {/* Buttons */}
            {isEdit ? (
              <div className="flex gap-4 mt-4">
                <button onClick={handleSave} className="px-6 py-2 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition">Save</button>
                <button onClick={handleCancel} className="px-6 py-2 bg-gray-500 text-white rounded-xl shadow-md hover:bg-gray-600 transition">Cancel</button>
              </div>
            ) : (
              <button onClick={() => setisEdit(true)} className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"> Edit</button>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorProfile