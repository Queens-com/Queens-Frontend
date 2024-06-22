import './App.css';
import { Route, Routes } from 'react-router';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Succes from './Pages/Succes';
import ResetPassword from './Pages/ResetPassword';
import OTP from './Pages/OTP';
import LandingPage from './Pages/LandingPage';

  function App() {
  return (
    <div className="App">
      <LandingPage/>
      <Routes>
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/succes" element={<Succes />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/otp" element={<OTP />} />
      </Routes>
    </div>
  );
}

export default App;
