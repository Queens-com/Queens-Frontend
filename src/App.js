import './App.css';
import { Route, Routes } from 'react-router';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Succes from './Pages/Succes';

function App() {
  return (
    <div className="App">
      <Login />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/succes" element={<Succes />} />
      </Routes>
    </div>
  );
}

export default App;
