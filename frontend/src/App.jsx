import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Dashboard from "./pages/dashboard";
import SoldierList from "./pages/SoldierList";
import Addsoldier from "./pages/Addsoldier";
import Editsoldier from "./pages/Editsoldier";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Dashboard */}
        <Route path="/" element={<Dashboard />} />

        {/* Soldier Management */}
        <Route path="/soldiers" element={<SoldierList />} />
        <Route path="/Addsoldier" element={<Addsoldier />} />
        <Route path="/Editsoldier" element={<Editsoldier />} />
      </Routes>
    </Router>
  );
}

export default App;
