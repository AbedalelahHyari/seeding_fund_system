import "./App.css";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./components/Navigation";
import FundingRequest from "./components/FundingRequest";
function App() {
  return (
    <>
      <ToastContainer />
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/funding" element={<FundingRequest />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
