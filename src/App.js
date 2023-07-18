import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Setting from './components/Setting';
import Notification from './components/Notification';
import Signup from './components/Signup';

function App() {
  return (
    <div>

        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route  element={<Login/>} path='Login'/>
          <Route  element={<Signup/>} path='Signup'/>
          <Route  element={<Setting/>} path='Setting'/>
          <Route  element={<Home/>} path='/'/>
          <Route  element={<Notification/>} path='Notification'/>
          
        </Routes>
        
        </BrowserRouter>
    </div>
  );
}

export default App;
