import './App.css';
import { Route, Routes } from 'react-router';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Succes from './Pages/Succes';
import Reset_Password from './Pages/Reset_Password';

function App() {
  return (
    <div className="App">
      <Reset_Password />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/succes" element={<Succes />} />
      </Routes>
    </div>
  );
}

export default App;
