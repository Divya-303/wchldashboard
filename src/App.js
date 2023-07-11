// import logo from './logo.svg';
import "./App.css";
import "../src/assets/css/custom.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UserManage from "./pages/UserManage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/wchl" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/manageUser" element={<UserManage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
