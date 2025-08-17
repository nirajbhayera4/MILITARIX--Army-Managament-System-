import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [soldierCount, setSoldierCount] = useState(0);

  useEffect(() => {
    // fetch soldiers from backend
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
    <div className="min-h-screen bg-gray-100">
      {/* Top Nav */}
      <nav className="bg-white shadow py-4 px-6 flex justify-between items-center">
        <h1 className="font-bold text-xl">MILITARIX Dashboard</h1>
      </nav>

      {/* Dashboard Cards */}
      <div className="p-6 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Soldiers */}
        <div className="bg-white rounded-xl p-4 shadow text-center">
          <h2 className="text-gray-500">Total Soldiers</h2>
          <p className="text-3xl font-bold">{soldierCount}</p>
        </div>

        {/* Units */}
        <div className="bg-white rounded-xl p-4 shadow text-center">
          <h2 className="text-gray-500">Total Units</h2>
          <p className="text-3xl font-bold">0</p>
        </div>

        {/* Inventory */}
        <div className="bg-white rounded-xl p-4 shadow text-center">
          <h2 className="text-gray-500">Total Inventory</h2>
          <p className="text-3xl font-bold">0</p>
        </div>

        {/* Attendance */}
        <div className="bg-white rounded-xl p-4 shadow text-center">
          <h2 className="text-gray-500">Today's Attendance</h2>
          <p className="text-3xl font-bold">0</p>
        </div>
      </div>
    </div>
  );
}
