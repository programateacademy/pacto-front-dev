import React, { useState, useEffect } from "react";

import Footer from "../footer/footer";
import Header from "../header/header";
import axios from "axios";
import Avatar from '../img/perfil.png';

function Signup() {

  const [name_user, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [id_type_actor, setId_type_actor] = useState([]);
  const [id_city, setId_city] = useState([]);
  const [id_contribution, setId_contribution] = useState([]);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name_enti, setNameEnti] = useState("");//New
  const [phone_number, setPhone_number] = useState("");
  const [countries, setCountries] = useState([]);
  const [contribution_text, setContribution_text] = useState("");//New
  const [departments, setDepartments] = useState([]);
  const [description, setDescription] = useState("");
  const [knowledge_interests, setKnowledge_interests] = useState("");
  const [image_profile, setImage_profile] = useState("");//New

  //   for the terms and conditions
  const [userData, setUserData] = useState({
    cohabitation_agreement: false,
  })

  function handleImageUpload(event) {
    const formData = new FormData();
    formData.append("image_profile", event.target.files[0]);
    // console.log(event.target.files)
    setImage_profile(URL.createObjectURL(event.target.files[0]));

  //   axios.post("http://localhost:8000/uploadfile/", formData)
  //     .then(response => {
  //       console.log(response.data.message);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  }
  function handleSignupSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const form_data = new FormData(form);
    // const type_actor_id = form_data.get('typeactor')
    // form_data.append("id_type_actor", type_actor_id)
    // console.log (form_data)
    const formDataObj = Object.fromEntries(form_data.entries());

    axios.post("http://localhost:8000/api/user/post", formDataObj).then((response) => {
      window.location.href = '/waiting_confirmation';
    })
      .catch((error) => {
        console.log(error);
      });
  }
  // traerme las entidades
  useEffect(() => {
    axios.get("http://localhost:8000/api/typeactor/get").then((response) => {
      setId_type_actor(response.data);
      console.log(response.data);
      
    });
  }, []);
  // traerme las contribuciones
  useEffect(() => {
    axios.get("http://localhost:8000/api/contribution/get").then((response) => {
      setId_contribution(response.data);
    });
  }, []);
    // traerme los paises
  useEffect(() => {
    axios.get("http://localhost:8000/api/country/get").then((response) => {
      setCountries(response.data);
    })
      .catch((error) => {
        console.log(error);
      });
  }, []);


//   useEffect(() => {
//     // Realizar una llamada a la API al cargar la página
//     axios.get('http://localhost:8000/api/user/getimageprofile/asdasda')
//       .then((response) => {
//         setImage_profile(response);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);


  function handleCountryChange(event) {
    // Obtener el ID del país seleccionado
    const countryId = event.target.value;
    // Solicitar los departamentos correspondientes al país seleccionado
    fetch(`http://localhost:8000/api/countries/${countryId}/departments/`)
      .then((response) => response.json())
      .then((data) => {
        setDepartments(data);
      });
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  function handleDepartmentChange(event) {
    // Obtener el ID del departamento seleccionado
    const departmentId = event.target.value;
    // Solicitar las ciudades correspondientes al departamento seleccionado
    fetch(`http://localhost:8000/api/departments/${departmentId}/cities/`)
      .then((response) => response.json())
      .then((data) => {
        setId_city(data);
      });
  }


  return (
    <div>
      <Header />
      <main role="main" className="flex-shrink-0 mt-5 mb-5">
        <div className="">
          <div className="container h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <form onSubmit={handleSignupSubmit}>
                <div className="mb-4 row">
                  <div className="col">
                    <h3 className="text-start fw-bold">FORMULARIO DE REGISTRO</h3>
                  </div>
                </div>
                <h4 className='fw-bold text-center'>Foto de perfil</h4>
                <div className='mb-4 mt-4 text-center'>
                  <img
                    src={image_profile}
                    height="100"
                    alt="Avatar perfil"
                    loading="lazy"
                    name="image_profile"
                  />
                </div>
                <div className='row text-start'>
                  <div class="col">
                    <label className="form-label fw-bold" for="form3Example4">Seleccione un foto de perfil:</label>
                    <input type="file" className="form-control" name="image" placeholder="Inserte sus nombres" onChange={handleImageUpload} />                  
                  </div>
                </div>
                <div className="row text-start">
                  <div className="col">
                    <label className="form-label fw-bold" htmlFor="form3Example4"> Nombres:</label>
                    <input type="text" className="form-control" placeholder="Inserte sus nombres" name="name_user" value={name_user} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="col">
                    <label className="form-label fw-bold" htmlFor="form3Example4">Apellidos:</label>
                    <input type="text" className="form-control" placeholder="Inserte sus apellidos" name="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                  </div>
                </div>
                <div className="row text-start">
                  <div className="col">
                    <label className="form-label fw-bold" htmlFor="form3Example4">Tipo de actor social:</label>
                    <select className="form-select" name="id_type_actor">
                      {id_type_actor.map((actor) => (
                        <option key={actor.id} value={actor.id}>
                          {actor.type_actor}{" "}
                        </option>
                      ))}{" "}
                    </select>
                  </div>
                  <div className="col">
                    <label className="form-label fw-bold" htmlFor="form3Example3">Correo electrónico:</label>
                    <input type="email" className="form-control" placeholder="Inserte su correo electrónico" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>
                <div className="row text-start">
                  <div className="col">
                    <label className="form-label fw-bold" htmlFor="form3Example3">Nombre de usuario:</label>
                    <input type="text" className="form-control" placeholder="Inserte su nombre de usuario" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                  </div>
                  <div className="col">
                    <label className="form-label fw-bold" htmlFor="form3Example4">Contraseña:</label>
                    <input type="password" className="form-control" placeholder="Inserte su contraseña" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                </div>
                <div className="row text-start">
                  <div className="col">
                    <label className="form-label fw-bold" htmlFor="form3Example3">Nombre de la entidad:</label>
                    <input className="form-control" placeholder="Inserte el nombre d ela entidad" name="name_enti" value={name_enti} onChange={(e) => setNameEnti(e.target.value)} />
                  </div>
                  <div className="col text-start">
                    <label className="form-label fw-bold" htmlFor="form3Example4">Aportes a la comunidad:</label>
                    <select className="form-select" name="id_contribution">
                      {id_contribution.map((contribution) => (
                        <option key={contribution.id} value={contribution.id} >
                          {contribution.name}{" "}
                        </option>
                      ))}{" "}
                    </select>
                  </div>
                </div>
                <div className="row text-start">
                  <div className="col">
                    <label className="form-label fw-bold" for="form3Example4">Contacto:</label>
                    <input type="text" className="form-control" placeholder="Contacto" name="phone_number" value={phone_number} onChange={(e) => setPhone_number(e.target.value)} />
                    <label className="form-label fw-bold" htmlFor="form3Example1">País:</label>
                    <select className="form-select" name="country" onChange={handleCountryChange}>
                      <option value="">Seleccione un país</option>
                      {countries.map((country) => (
                        <option key={country.id} value={country.id}>
                          {country.name}{" "}
                        </option>
                      ))}{" "}
                    </select>
                  </div>
                  <div className="col text-start">
                    <label className='form-label fw-bold' for="exampleFormControlTextarea1">Breve descripción de aportes a la comunidad:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" name="contribution_text" value={contribution_text} onChange={(e) => setContribution_text(e.target.value)} ></textarea>
                  </div>
                </div>
                <div className="row text-start">
                  <div className="col">
                    <label className="form-label fw-bold" htmlFor="form3Example2">Departamento:</label>
                    <select className="form-select" name="department" onChange={handleDepartmentChange}>
                      <option value="">Seleccione un departamento</option>
                      {departments.map((department) => (
                        <option key={department.id} value={department.id}>
                          {department.name}{" "}
                        </option>
                      ))}{" "}
                    </select>
                  </div>
                  <div className="col">
                    <label className="form-label fw-bold" htmlFor="form3Example3"> Ciudad:</label>
                    <select className="form-select" name="id_city">
                      <option value="">Seleccione una ciudad</option>
                      {id_city.map((city) => (
                        <option key={city.id} value={city.id}>
                          {city.name}{" "}
                        </option>
                      ))}{" "}
                    </select>
                  </div>
                </div>
                <div className="col text-start">
                  <label className="form-label fw-bold" htmlFor="form3Example3">Descripción del perfil:</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" name="description" placeholder="Inserte una breve descripción" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className="col text-start">
                  <label className="form-label fw-bold p" htmlFor="form3Example4" > Intereses de conocimiento:</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" name="knowledge_interests" placeholder="Inserte sus intereses de conocimientos" value={knowledge_interests} onChange={(e) => setKnowledge_interests(e.target.value)}></textarea>
                </div>
                <div>
                  <input type="checkbox" id="cohabitation_agreement" name="cohabitation_agreement" value={userData.cohabitation_agreement} onChange={handleInputChange} />
                  <label className="ms-2 fw-bold mt-3" htmlFor="cohabitation_agreement">Acepto los términos y condiciones.</label>
                </div>
                <button type="submit" className="btn btn-primary btn-block mt-3 mb-0" disabled={!userData.cohabitation_agreement}>Registrarse</button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default Signup;