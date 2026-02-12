import React from "react";
import { assets } from "../../assets/assets";

function Adddoctor() {
  return (
    <form className="m-5 w-full">

      <p className="text-2xl font-semibold mb-6">Add Doctor</p>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">

        {/* Upload Section */}
        <div className="flex items-center gap-6 mb-8">
          <label
            htmlFor="doc.image"
            className="cursor-pointer border-2 border-dashed border-gray-300 p-4 rounded-lg hover:border-blue-400 transition"
          >
            <img src={assets.upload_area} alt="" className="w-20" />
          </label>

          <input type="file" id="doc.image" hidden />
          <p className="text-gray-600">Upload doctor picture</p>
        </div>

        {/* Input Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <p className="text-sm font-medium mb-1">Doctor Name</p>
            <input type="text" placeholder="Name" required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <p className="text-sm font-medium mb-1">Doctor Email</p>
            <input type="email" placeholder="Email" required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <p className="text-sm font-medium mb-1">Doctor Password</p>
            <input type="password" placeholder="Password" required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <p className="text-sm font-medium mb-1">Experience</p>
            <select
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {[...Array(10)].map((_, i) => (
                <option key={i} value={`${i + 1} Year`}>
                  {i + 1} Year
                </option>
              ))}
            </select>
          </div>

          <div>
            <p className="text-sm font-medium mb-1">Fees</p>
            <input type="number" placeholder="Fees" required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <p className="text-sm font-medium mb-1">Speciality</p>
            <select
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
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
            <input type="text" placeholder="Education" required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <p className="text-sm font-medium mb-1">Address</p>
            <input type="text" placeholder="Address Line 1" required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input type="text" placeholder="Address Line 2" required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

        </div>

        {/* About Section */}
        <div className="mt-6">
          <p className="text-sm font-medium mb-1">About Doctor</p>
          <textarea
            placeholder="Write about doctor"
            rows={5}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-lg transition"
        >
          Add Doctor
        </button>

      </div>
    </form>
  );
}

export default Adddoctor;
