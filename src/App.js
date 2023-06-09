/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles/App.css';
import axios from 'axios';
import Login from './components/login/login';
import Profile from './components/profile/profile';
import Dashboard from './components/dashboard/dashboard';
import Home from './components/home/home';
import Signup from './components/signup/signup';
import Edit_profile from './components/edit_profile/edit_profile';
import Restablecer_contraseña from './components/restablecer_contraseña/restablecer_contraseña';
import Waiting_confirmation from './components/signup/waiting_confirmation';



const App = () => {
//  const [isDarkMode, setIsDarkMode] = useState(false);
//  const toggleDarkMode = () => {
//    setIsDarkMode(!isDarkMode);
//    document.body.classList.toggle('dark');
//  };

const yourElement = useRef(null)


 useEffect(() => {
   axios.get('http://localhost:8000/')
     .then(response => {
      console.log(response.data.includes('This is from the backend'))
      if(response.data.includes('This is from the backend')){
        let _token = sessionStorage.getItem("token")
        axios.get('http://localhost:8000/api/users/me', {
          headers: {
            'Authorization': `Bearer ${_token}`
          }
        })
        .then(resp => console.log(resp))
        .catch(error => {
          console.error(error);
          console.log("el token está inválido")
          // logOut()
        })
      }
    });
 }, [])

 const logOut = () => {
    sessionStorage.clear();
    window.location.href = '/'
  } 


 return (
   <div className="App" ref={yourElement}>
     {/* <button onClick={toggleDarkMode}>
       {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
     </button> */}
    
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/edit_profile/:username" element={<Edit_profile />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/waiting_confirmation" element={<Waiting_confirmation />}></Route>
          <Route path="/restablecer_contraseña" element={<Restablecer_contraseña />}></Route>
          <Route path="/home/:username" element={<Home />}></Route>
          <Route path="/profile/:username" element={<Profile />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    


   </div>
 );


}


export default App;