import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditSoldier() {
  const { id } = useParams();
  const [form, setForm] = useState({ name: "", rank: "", age: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSoldier = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/soldiers`);
        const soldier = res.data.find((s) => s._id === id);
        if (soldier) setForm(soldier);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSoldier();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/soldiers/${id}`, form);
      navigate("/soldiers");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Soldier</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          name="rank"
          placeholder="Rank"
          value={form.rank}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-forest-moss text-white px-4 py-2 rounded hover:bg-forest-olive"
        >
          Update Soldier
        </button>
      </form>
    </div>
  );
}
