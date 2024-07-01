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
import TermsOfService from './Pages/TermsOfService';
import Profile from './Pages/Profile';
import PageNotFound from './Pages/404';
import AccountDeleted from './Pages/AccountDeleted';

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
        <Route path="/TOS" element={<TermsOfService />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="/accountdeleted" element={<AccountDeleted />} />
      </Routes>
    </div>
  );
}

export default App;
