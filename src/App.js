import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles/App.css';
import axios from 'axios';
import Login from './components/login/login';
import Perfil from './components/perfil/perfil';
import Dashboard from './components/dashboard/dashboard';
import Home from './components/home/home';
import Signup from './components/signup/signup';
import Editar_perfil from './components/editar_perfil/editar_perfil';
import Restablecer_contraseña from './components/restablecer_contraseña/restablecer_contraseña';
import Waiting_confirmation from './components/signup/waiting_confirmation';



const App = () => {
 const [isDarkMode, setIsDarkMode] = useState(false);
 const toggleDarkMode = () => {
   setIsDarkMode(!isDarkMode);
   document.body.classList.toggle('dark');
 };


 useEffect(() => {
   axios.get('http://localhost:8000/')
     .then(response => console.log(response.data));
 }, [])


 return (
   <div className="App">
     <button onClick={toggleDarkMode}>
       {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
     </button>
    
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/editar_perfil/:username" element={<Editar_perfil />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/waiting_confirmation" element={<Waiting_confirmation />}></Route>
          <Route path="/restablecer_contraseña" element={<Restablecer_contraseña />}></Route>
          <Route path="/home/:username" element={<Home />}></Route>
          <Route path="/perfil/:username" element={<Perfil />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    


   </div>
 );


}


export default App;