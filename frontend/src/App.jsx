import Dashboard from "./pages/dashboard";
import { Route, Routes } from "react-router-dom";
import React from "react";
import "./index.css"; // Assuming you have Tailwind CSS set up
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
      </Routes>
    </div>
  )
}
export default App;