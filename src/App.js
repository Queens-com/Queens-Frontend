import './App.css';
import { Route, Routes } from 'react-router';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Succes from './Pages/Succes';
import ResetPassword from './Pages/Reset_Password';
import OTP from './Pages/OTP';
import LandingPage from './Pages/Landing_Page';

  function App() {
  return (
    <div className="App">
      <LandingPage />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/succes" element={<Succes />} />
        <Route path="/reset_password" element={<ResetPassword />} />
        <Route path="/otp" element={<OTP />} />
      </Routes>
    </div>
  );
}

export default App;
