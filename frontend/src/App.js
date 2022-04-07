import "./App.css";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./components/Navigation";
import FundingRequest from "./components/FundingRequest";
import AdminView from "./components/AdminView";
function App() {
  return (
    <>
      <ToastContainer />
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/funding" element={<FundingRequest />} />
          <Route path="/admin" element={<AdminView />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
