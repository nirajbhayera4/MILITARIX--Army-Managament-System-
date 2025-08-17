import Dashboard from "./pages/dashboard";
import { Route, Routes } from "react-router-dom";
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