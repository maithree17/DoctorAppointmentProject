import { useContext } from "react";
import { useState } from "react";
import {AdminContext} from '../context/AdminContext.jsx'
import axios from 'axios'
import { toast } from "react-toastify";

function Login() {
  const [state, setState] = useState("Admin");
  const [email,setemail] =useState("")
  const [password,setpassword] =useState("")


  const {setatoken,backendURL} =useContext(AdminContext)

  const onSubmitHandler =async(event)=>{
    event.preventDefault()

    try{
      if(state==='Admin'){
        const {data} =await axios.post(backendURL+'/api/admin/login',{email,password})
        if(data.success){
          localStorage.setItem('atoken',data.token)
          setatoken(data.token)
        }else{
          toast.error(data.message)
        }
      }else{

      }

    }catch(error){

    }
  }
   



  return (
    <form onSubmit={onSubmitHandler} className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col gap-5 p-8 w-[340px] sm:w-[380px] bg-white border rounded-xl shadow-md">
        
        <p className="text-2xl font-semibold text-center text-gray-800">
          <span className="text-primary">{state}</span> Login
        </p>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Email</label>
          <input onChange={(e)=>setemail(e.target.value)}  value={email} type="email" required className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"/>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Password</label>
          <input onChange={(e)=>setpassword(e.target.value)}  value={password} type="password" required className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"/>
        </div>

        <button type="submit" className="mt-2 bg-primary text-white py-2 rounded-md font-medium hover:bg-primary/90 transition">
          Login
        </button>
        {
            state==='Admin'?
            <p>Doctor login?<span className='text-primary underline cursor-pointer' onClick={()=>setState('Doctor')}> Click here</span></p>
            :<p>Admin login?<span className='text-primary underline cursor-pointer' onClick={()=>setState('Admin')}> Click here</span></p>
        }
      </div>
    </form>
  );
}

export default Login;
