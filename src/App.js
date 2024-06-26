import './App.css';
import { Route, Routes } from 'react-router';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Succes from './Pages/Succes';
import ResetPassword from './Pages/ResetPassword';
import OTP from './Pages/OTP';
import LandingPage from './Pages/LandingPage';
import Stores from './Pages/Stores';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Profile from './Pages/Profile';

  function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/succes" element={<Succes />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
