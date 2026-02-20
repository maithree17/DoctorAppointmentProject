import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { useState } from "react";
import { AdminContext } from "../../context/AdminContext";
import {toast} from 'react-toastify'
import axios from "axios"

function Adddoctor() {

  const [docimg,setdocimg] =useState(false)
  const [name,setname] =useState("")
  const [email,setemail] =useState("")
  const [password,setpassword] =useState("")
  const [experience,setexperience] =useState("1 Year")
  const [fees,setfees] =useState(0)
  const [about,setabout] =useState("")
  const [speciality,setspeciality] =useState("General Physician")
  const [degree,setdegree] =useState("")
  const [address1,setaddress1] =useState("")
  const [address2,setaddress2] =useState("")

  const {backendURL,atoken}=useContext(AdminContext)

  const onSubmitHandler=async (event)=>{
    event.preventDefault()
    try{
      if(!docimg){
        return toast.error("Image not selected")
      }
        const formdata=new FormData()
        formdata.append('name',name)
        formdata.append('email',email)
        formdata.append('image',docimg)
        formdata.append('password',password)
        formdata.append('speciality',speciality)
        formdata.append('degree',degree)
        formdata.append('experience',experience)
        formdata.append('about',about)
        formdata.append('fees',fees)
        formdata.append('address',JSON.stringify({line1:address1,line2:address2}))

        formdata.forEach((value,key)=>{
          console.log(`${key} - ${value}`)
        })

        const {data} =await axios.post(backendURL+'/api/admin/add-doctor',formdata,{headers:{atoken}})

        if(data.success){
          toast.success(data.message)
          setdocimg(false)
          setname("")
          setemail("")
          setpassword("")
          setexperience("1 Year")
          setfees("")
          setabout("")
          setspeciality("General Physician")
          setdegree("")
          setaddress1("")
          setaddress2("")

        }else{
          toast.error(data.message)
        }

    }catch(error){
      toast.error(error.message)
      console.log(error)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full">
      <p className="text-2xl font-semibold mb-6">Add Doctor</p>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">

        <div className="flex flex-col items-start gap-6 mb-8">
          <label htmlFor="doc.image" className="cursor-pointer border-2 border-dashed border-gray-300 p-4 rounded-lg hover:border-blue-400 transition">
            <img src={docimg?URL.createObjectURL(docimg) :assets.upload_area} alt="" className="w-20" />
          </label>

          <input onChange={(e)=>setdocimg(e.target.files[0])} type="file" id="doc.image" hidden />
          <p className="text-gray-600">Upload doctor picture</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm font-medium mb-1">Doctor Name</p>
            <input onChange={(e)=>setname(e.target.value)} value={name} type="text" placeholder="Name" required className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
          </div>

          <div>
            <p className="text-sm font-medium mb-1">Doctor Email</p>
            <input onChange={(e)=>setemail(e.target.value)} value={email} type="email" placeholder="Email" required className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
          </div>

          <div>
            <p className="text-sm font-medium mb-1">Doctor Password</p>
            <input onChange={(e)=>setpassword(e.target.value)} value={password} type="password" placeholder="Password" required className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
          </div>

          <div>
            <p className="text-sm font-medium mb-1">Experience</p>
            <select onChange={(e)=>setexperience(e.target.value)} value={experience} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
              {[...Array(10)].map((_, i) => (
                <option key={i} value={`${i + 1} Year`}>
                  {i + 1} Year
                </option>
              ))}
            </select>
          </div>

          <div>
            <p className="text-sm font-medium mb-1">Fees</p>
            <input onChange={(e)=>setfees(e.target.value)} value={fees}  type="number" placeholder="Fees" required className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
          </div>

          <div>
            <p className="text-sm font-medium mb-1">Speciality</p>
            <select onChange={(e)=>setspeciality(Number(e.target.value))} value={speciality} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option>General Physician</option>
              <option>Gynecologist</option>
              <option>Dermatologist</option>
              <option>Pediatrician</option>
              <option>Neurologist</option>
              <option>Gastroenterologist</option>
            </select>
          </div>

          <div>
            <p className="text-sm font-medium mb-1">Education</p>
            <input onChange={(e)=>setdegree(e.target.value)} value={degree} type="text" placeholder="Education" required className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
          </div>

          <div>
            <p className="text-sm font-medium mb-1">Address</p>
            <input onChange={(e)=>setaddress1(e.target.value)} value={address1} type="text" placeholder="Address Line 1" required className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
            <input onChange={(e)=>setaddress2(e.target.value)} value={address2} type="text" placeholder="Address Line 2" required className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
          </div>

        </div>

        <div className="mt-6">
          <p className="text-sm font-medium mb-1">About Doctor</p>
          <textarea onChange={(e)=>setabout(e.target.value)} value={about} placeholder="Write about doctor" rows={5} required className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
        </div>


        <button type="submit" className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-lg transition">Add Doctor</button>

      </div>
    </form>
  );
}

export default Adddoctor;
