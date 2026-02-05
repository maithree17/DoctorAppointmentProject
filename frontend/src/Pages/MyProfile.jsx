import React, { useState } from "react";
import { assets } from "../assets/assets";

function Myprofile() {
  const [userdata, setuserdata] = useState({
    name: "Richard",
    image: assets.profile_pic,
    email: "abc@gmail.com",
    phone: "1234567890",
    address: {
      line1: "17th cross",
      line2: "Mysuru",
    },
    gender: "Male",
    dob: "2005-01-05",
  });

  const [isEdit, setisEdit] = useState(false);

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-6 mt-10 border border-blue-300">
      
      {/* Profile Header */}
      <div className="flex items-center gap-6">
        <img
          src={userdata.image}
          alt="user-img"
          className="w-28 h-28 rounded-full object-cover border"
        />

        <div>
          {isEdit ? (
            <input
              type="text"
              value={userdata.name}
              onChange={(e) =>
                setuserdata((prev) => ({ ...prev, name: e.target.value }))
              }
              className="border px-3 py-1 rounded-md text-lg"
            />
          ) : (
            <p className="text-2xl font-semibold text-gray-800">
              {userdata.name}
            </p>
          )}

          <p className="text-blue-600">{userdata.email}</p>
        </div>
      </div>

      <hr className="my-6" />

      {/* Contact Info */}
      <div>
        <p className="text-lg font-semibold text-gray-700 mb-4">
          Contact Information
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600">
          <div>
            <p className="text-sm font-medium">Phone</p>
            {isEdit ? (
              <input
                type="text"
                value={userdata.phone}
                onChange={(e) =>
                  setuserdata((prev) => ({ ...prev, phone: e.target.value }))
                }
                className="border px-3 py-1 rounded-md w-full"
              />
            ) : (
              <p className="text-blue-600">{userdata.phone}</p>
            )}
          </div>

          <div>
            <p className="text-sm font-medium">Address</p>
            {isEdit ? (
              <div className="space-y-2">
                <input
                  type="text"
                  value={userdata.address.line1}
                  onChange={(e) =>
                    setuserdata((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                  className="border px-3 py-1 rounded-md w-full"
                />
                <input
                  type="text"
                  value={userdata.address.line2}
                  onChange={(e) =>
                    setuserdata((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                  className="border px-3 py-1 rounded-md w-full"
                />
              </div>
            ) : (
              <p>
                {userdata.address.line1}
                <br />
                {userdata.address.line2}
              </p>
            )}
          </div>
        </div>
      </div>

      <hr className="my-6" />

      {/* Basic Info */}
      <div>
        <p className="text-lg font-semibold text-gray-700 mb-4">
          Basic Information
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600">
          <div>
            <p className="text-sm font-medium">Gender</p>
            {isEdit ? (
              <select
                value={userdata.gender}
                onChange={(e) =>
                  setuserdata((prev) => ({ ...prev, gender: e.target.value }))
                }
                className="border px-3 py-1 rounded-md w-full"
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            ) : (
              <p>{userdata.gender}</p>
            )}
          </div>

          <div>
            <p className="text-sm font-medium">Date of Birth</p>
            {isEdit ? (
              <input
                type="date"
                value={userdata.dob}
                onChange={(e) =>
                  setuserdata((prev) => ({ ...prev, dob: e.target.value }))
                }
                className="border px-3 py-1 rounded-md w-full"
              />
            ) : (
              <p>{userdata.dob}</p>
            )}
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="flex justify-end mt-6">
        {isEdit ? (
          <button
            onClick={() => setisEdit(false)}
            className="bg-primary text-white px-6 py-2 rounded-md hover:opacity-90"
          >
            Save Changes
          </button>
        ) : (
          <button
            onClick={() => setisEdit(true)}
            className="border border-primary text-primary px-6 py-2 rounded-md hover:bg-blue-500 hover:text-white transition"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
}

export default Myprofile;
