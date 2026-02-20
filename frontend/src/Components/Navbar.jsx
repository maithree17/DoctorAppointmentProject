import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import "../index.css";
import { AppContext } from "../Context/AppContext";

function Navbar() {
  const navigate = useNavigate();

  const [showmenu, setShowmenu] = useState(false);
  const {token,settoken,userdata}=useContext(AppContext)

  const logout=()=>{
    settoken(false)
    localStorage.removeItem('token')
    navigate("/login")
  }
  

  return (
    <div className="relative flex items-center justify-between text-sm py-3 px-4 md:px-10 mb-5 border-b border-gray-300">
      {/* Logo */}
      <img onClick={() => navigate("/")} src={assets.logo} alt="Logo" className="w-32 cursor-pointer"/>

      {/* Nav Links hidden for phone and after medium is visible */}
      <ul className="hidden md:flex items-center gap-8 text-base md:text-sm">
        <NavLink to="/">
          <li className="cursor-pointer">HOME</li>
          <hr className="h-0.5 w-3/5 bg-primary border-none mx-auto hidden" />
        </NavLink>

        <NavLink to="/doctors">
          <li className="cursor-pointer">ALL DOCTORS</li>
          <hr className="h-0.5 w-3/5 bg-primary border-none mx-auto hidden" />
        </NavLink>

        <NavLink to="/about">
          <li className="cursor-pointer">ABOUT</li>
          <hr className="h-0.5 w-3/5 bg-primary border-none mx-auto hidden" />
        </NavLink>

        <NavLink to="/contact">
          <li className="cursor-pointer">CONTACT</li>
          <hr className="h-0.5 w-3/5 bg-primary border-none mx-auto hidden" />
        </NavLink>
      </ul>

      {/* Right Side profile & menu */}
      <div className="flex items-center gap-4">
        {/* Profile (all screens) */}
        {token && userdata ?(
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img src={userdata.image} className="w-14 rounded-full" />
            <img src={assets.dropdown_icon} className="w-2" />

            {/* Profile Dropdown */}
            <div className="absolute right-0 top-full mt-0 z-30 hidden group-hover:block hover:block">
              <div className="min-w-52 bg-white rounded-xl shadow-xl border border-gray-100 flex flex-col py-2">
                <p onClick={() => navigate("./Myprofile")} className="px-5 py-2.5 text-sm text-gray-600 hover:bg-primary/10 hover:text-primary cursor-pointer transition">MyProfile</p>
                <p onClick={() => navigate("./myappointment")} className="px-5 py-2.5 text-sm text-gray-600 hover:bg-primary/10 hover:text-primary cursor-pointer transitionr">MyAppointment</p>
                <p onClick={logout} className="px-5 py-2.5 text-sm text-gray-600 hover:bg-primary/10 hover:text-primary cursor-pointer transitionr">Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button onClick={() => navigate("./login")} className="bg-primary text-white px-4 py-1.5 text-xs sm:px-5 sm:py-1.5 sm:text-xs md:px-8 md:py-3 md:text-base rounded-full font-light hover:bg-primary/90">Create Account</button>
          )}

        {/*  (mobile only) */}
        <img
          src={showmenu?assets.cross_image:assets.menu_icon}
          className="w-6 cursor-pointer md:hidden"
          onClick={() => setShowmenu(!showmenu)}
        />
      </div>

      {/* Mobile Menu */}
      {showmenu && (
        <ul className="absolute top-full left-0 w-full bg-white border-t border-gray-200 flex flex-col items-center gap-4 py-4 md:hidden z-10">
          <NavLink to="/" onClick={() => setShowmenu(false)}>
            HOME
          </NavLink>
          <NavLink to="/doctors" onClick={() => setShowmenu(false)}>
            ALL DOCTORS
          </NavLink>
          <NavLink to="/about" onClick={() => setShowmenu(false)}>
            ABOUT
          </NavLink>
          <NavLink to="/contact" onClick={() => setShowmenu(false)}>
            CONTACT
          </NavLink>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
