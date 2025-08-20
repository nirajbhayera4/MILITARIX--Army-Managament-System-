import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SoldierManagement() {
  const [soldiers, setSoldiers] = useState([]);
  const [form, setForm] = useState({ name: "", rank: "", age: "" });
  const [editingId, setEditingId] = useState(null);

  // Fetch all soldiers
  const fetchSoldiers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/soldiers");
      setSoldiers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSoldiers();
  }, []);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/api/soldiers/${editingId}`, form);
      } else {
        await axios.post("http://localhost:5000/api/soldiers", form);
      }
      setForm({ name: "", rank: "", age: "" });
      setEditingId(null);
      fetchSoldiers();
    } catch (err) {
      console.error(err);
    }
  };

  // Delete soldier
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/soldiers/${id}`);
      setSoldiers(soldiers.filter((s) => s._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  // Edit soldier
  const handleEdit = (soldier) => {
    setForm({ name: soldier.name, rank: soldier.rank, age: soldier.age });
    setEditingId(soldier._id);
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-green-200 to-green-100">
      <h1 className="text-3xl font-bold text-green-900 mb-6">Enter the details of soldier</h1>

      {/* Add/Edit Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-green-100 p-6 rounded-xl shadow-md mb-8 max-w-md"
      >
        <h2 className="text-xl font-semibold text-green-900 mb-4">
          {editingId ? "Edit Soldier" : "Add Soldier"}
        </h2>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-2 mb-3 rounded border"
          required
        />
        <input
          type="text"
          placeholder="Rank"
          value={form.rank}
          onChange={(e) => setForm({ ...form, rank: e.target.value })}
          className="w-full p-2 mb-3 rounded border"
        />
        <input
          type="number"
          placeholder="Age"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
          className="w-full p-2 mb-3 rounded border"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400 transition"
        >
          {editingId ? "Update Soldier" : "Add Soldier"}
        </button>
      </form>

      {/* Soldier List */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {soldiers.map((soldier) => (
          <div
            key={soldier._id}
            className="bg-white rounded-xl shadow-lg p-5 hover:scale-105 transform transition relative"
          >
            <h2 className="text-xl font-bold text-green-900 mb-2">{soldier.name}</h2>
            <p className="text-green-900 mb-1">
              <strong>Rank:</strong> {soldier.rank || "N/A"}
            </p>
            <p className="text-green-900 mb-4">
              <strong>Age:</strong> {soldier.age || "N/A"}
            </p>

            <div className="flex justify-between items-center mt-2">
              <button
                onClick={() => handleEdit(soldier)}
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(soldier._id)}
                className="text-red-600 hover:text-red-800 font-semibold"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
