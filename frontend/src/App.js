import "./App.css";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Login />
    </div>
  );
}

export default App;
