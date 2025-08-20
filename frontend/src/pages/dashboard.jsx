import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

export default function Dashboard() {
  const [soldierCount, setSoldierCount] = useState(0);
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    rank: "Captain",
  });
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/soldiers");
        setSoldierCount(res.data.length);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCounts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-200 to-green-100 p-6">
      {/* Top Nav */}
      <nav className="bg-green-300 text-green-900 shadow py-2 px-6 flex justify-between items-center relative rounded-xl">
        <Link to="/">
          <h1 className="font-bold text-xl cursor-pointer">MILITARIX</h1>
        </Link>

        <div className="relative">
          {user ? (
            <div
              className="flex items-center gap-2 cursor-pointer"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <FaUserCircle className="text-3xl text-green-900" />
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-green-100 text-green-900 rounded shadow-lg p-4 z-50">
                  <p>
                    <strong>Name:</strong> {user.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p>
                    <strong>Rank:</strong> {user.rank}
                  </p>
                  <button className="mt-2 bg-green-400 text-white px-3 py-1 rounded hover:bg-green-300 w-full">
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <p
                onClick={() => navigate("/Account")}
                className="cursor-pointer hover:text-green-500"
              >
                Profile
              </p>
              <button
                className="cursor-pointer text-blue-600 hover:text-blue-800"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Dashboard Cards */}
      <div className="p-6 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        <Link to="/soldiers"><div className="bg-green-100 rounded-xl p-6 shadow-xl text-center hover:scale-105 transform transition cursor-pointer">
            <h2 className="text-green-900 font-semibold">Total Soldiers</h2>
            
          </div></Link>
          
        
<Link to="/"><div className="bg-green-100 rounded-xl p-6 shadow-xl text-center hover:scale-105 transform transition cursor-pointer">
          <h2 className="text-green-900 font-semibold">Total Units</h2>
          
        </div></Link>
        

        <div className="bg-green-100 rounded-xl p-6 shadow-xl text-center hover:scale-105 transform transition cursor-pointer">
          <h2 className="text-green-900 font-semibold">Total Inventory</h2>
          
        </div>

        <div className="bg-green-100 rounded-xl p-6 shadow-xl text-center hover:scale-105 transform transition cursor-pointer">
          <h2 className="text-green-900 font-semibold">Today's Attendance</h2>
          
        </div>
      </div>
      <br />
        {/* About Us Section */}
     <div className="mb-8 px-4 sm:px-6 md:px-8">
  <h2 className="text-green-900 font-bold text-xl sm:text-2xl md:text-3xl mb-4 text-center">
    About Us
  </h2>
  <div className="bg-green-200 rounded-xl p-4 sm:p-6 md:p-8 shadow-xl text-center hover:scale-102 transform transition-all duration-200 max-w-4xl mx-auto">
    <p className="text-green-900 text-sm sm:text-base md:text-lg">
      We provide a comprehensive platform for managing military personnel, units, and inventory. Our mission is to streamline operations and enhance communication within the military community.
    </p>
  </div>
</div>


      {/* Another Container */}
      <div className="bg-green-300 rounded-xl p-6 sm:p-8 md:p-10 shadow-xl text-center hover:scale-105 transform transition-all duration-200 w-full max-w-4xl mx-auto mt-8">
  <h2 className="text-green-900 font-semibold text-xl sm:text-2xl mb-2">
    Contact / Footer
  </h2>
  <p className="text-green-900 text-sm sm:text-base">
    Feel free to reach out to us at <a href="mailto:contact@militarix.com" className="underline">contact@militarix.com</a>
  </p>
</div>

    </div>
    
  );
}
