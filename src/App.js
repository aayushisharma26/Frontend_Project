import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from './Component/Login';
import Signup from './Component/Signup';
import Api from './Component/Api'



function App() {
  return (
    <div className="App">
          <Api/>

      <div className='About'>
        <BrowserRouter>
          <div className='page'>
            <div className='btn-login'>
            <Link className='login' to="/Login" >Login</Link>
            </div>

            <div className='btn-signup'>
            <Link className='signup' to="/Signup" >Signup</Link>

            </div>
            
          </div>
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>

      </div>

    </div>
  );
}

export default App;
