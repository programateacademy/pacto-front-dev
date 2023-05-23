import React, { useState, useEffect } from "react";
import axios from "axios";
import Avatar from '../img/perfil.png';

function Editar_perfil({ usuario }) {

    const [name_user, setName] = useState(usuario.nombre);
    const [lastname, setLastname] = useState(usuario.apellido);
    const [id_type_actor, setId_type_actor] = useState(usuario.tipo_actor);
    const [email, setEmail] = useState(usuario.correo);
    const [username, setUsername] = useState(usuario.usernam);
    const [password, setPassword] = useState("");
    const [name_enti, setNameEnti] = useState(usuario.entidad);//New
    const [contributions, setContributions] = useState(usuario.contribuciones);
    const [phone_number, setPhone_number] = useState(usuario.celular);//New
    const [countries, setCountries] = useState([]);
    const [contribution_text, setContribution_text] = useState(usuario.descrip_contribu);//New
    const [departments, setDepartments] = useState([]);
    const [cities, setCities] = useState([]);
    const [description, setDescription] = useState(usuario.descrip_perfil);
    const [knowledge_interests, setKnowledge_interests] = useState(usuario.inte_conocimiento);
    const [list_type_actor, setList_type_actor] = useState([]);
    const [list_contibutions, setList_contibutions] = useState([]);
    const [list_countries, setList_countries] = useState([]);
    const [list_departamentos, setList_departamentos] = useState([]);
    const [list_ciudades, setList_ciudades] = useState([]);



    function handleSignupSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const form_data = new FormData(form);
        const formDataObj = Object.fromEntries(form_data.entries());

        axios.get("http://localhost:8000/api/user/get/"+ username).
            then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // traerme las contribuciones
    useEffect(() => {
        axios.get("http://localhost:8000/api/typeactor/get").then((response) => {
            setList_type_actor(response.data);
        });

        axios.get("http://localhost:8000/api/contribution/get").then((response) => {
            setList_contibutions(response.data);
        });

        axios.get("http://localhost:8000/api/country/get").then((response) => {
            setList_countries(response.data);
        })
            .catch((error) => {
                console.log(error);
            });

        axios.get("http://localhost:8000/api/departament/get").then((response) => {
            setList_departamentos(response.data);
        });

        axios.get("http://localhost:8000/api/city/get").then((response) => {
            setList_ciudades(response.data);
        });

    }, []);

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

    function handleDepartmentChange(event) {
        // Obtener el ID del departamento seleccionado
        const departmentId = event.target.value;
        // Solicitar las ciudades correspondientes al departamento seleccionado
        fetch(`http://localhost:8000/api/departments/${departmentId}/cities/`)
            .then((response) => response.json())
            .then((data) => {
                setCities(data);
            });
    }

    return (
        <div>
            <main role="main" className="flex-shrink-0 mt-5 mb-5">
                <section className="">
                    <div className="container h-custom">
                        <div className="row d-flex justify-content-center align-items-center h-100">

                            <div className="">
                                <form>
                                    <form>
                                        <form>
                                            <h4 className='fw-bold text-center'>Foto de perfil</h4>
                                            <div className='mb-4 mt-4 text-center'>
                                                <img
                                                    src={Avatar}
                                                    height="100"
                                                    alt="Avatar perfil"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className='row'>
                                                <div className="col text-start">
                                                    <label className="form-label fw-bold" for="form3Example4">Seleccione un foto de perfil:</label>
                                                    <input type="file" className="form-control" placeholder="Inserte sus nombres" />
                                                </div>
                                            </div>
                                            <div className="row text-start">
                                                <div className="col">
                                                    <label className="form-label fw-bold" for="form3Example4">Nombres:</label>
                                                    <input type="text" className="form-control" value={name_user} onChange={(e) => setName(e.target.value)} />
                                                </div>
                                                <div className="col">
                                                    <label className="form-label fw-bold" for="form3Example4">Apellidos:</label>
                                                    <input type="text" className="form-control" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                                                </div>
                                            </div>
                                        </form>

                                        <form>
                                            <div className="row text-start">
                                                <div className="col">
                                                    <div className="form-group">
                                                        <label className='form-label fw-bold' for="exampleFormControlSelect1">Tipo de actor social:</label>
                                                        <select className="form-control" id="exampleFormControlSelect1" value={id_type_actor} onChange={(e) => setId_type_actor(e.target.value)}>
                                                            {list_type_actor.map((actor) => (
                                                                <option key={actor.id} value={actor.id}>
                                                                    {actor.type_actor}{" "}
                                                                </option>
                                                            ))}{" "}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <label className="form-label fw-bold" for="correo">Correo electrónico:</label>
                                                    <input type="email" className="form-control" name="correo" value={email} onChange={(e) => setEmail(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="row text-start">
                                                <div className="col">
                                                    <label className="form-label fw-bold" htmlFor="form3Example3">Nombre de usuario:</label>
                                                    <input type="text" className="form-control" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                                </div>
                                                <div className="col">
                                                    <label className="form-label fw-bold" for="entidad">Nombre de la entidad:</label>
                                                    <input type="text" className="form-control" name="entidad" value={name_enti} onChange={(e) => setNameEnti(e.target.value)} />
                                                </div>
                                            </div>
                                        </form>

                                        <form>
                                            <div className="row text-start">

                                                <div className="col">
                                                    <div className="form-group">
                                                        <label className='form-label fw-bold' for="exampleFormControlSelect1">Aportes a la comunidad:</label>
                                                        <select className="form-control" id="exampleFormControlSelect1" value={contributions} onChange={(e) => setContributions(e.target.value)}>
                                                            {list_contibutions.map((contribution) => (
                                                                <option key={contribution.id} value={contribution.id}>
                                                                    {contribution.name}{" "}
                                                                </option>
                                                            ))}{" "}
                                                        </select>
                                                    </div>
                                                    <label className="form-label fw-bold" for="form3Example4">Contacto:</label>
                                                    <input type="text" className="form-control" value={phone_number} onChange={(e) => setPhone_number(e.target.value)} />
                                                </div>
                                                <div className="col text-start">
                                                    <label className='form-label fw-bold' for="exampleFormControlTextarea1">Breve descripción de aportes a la comunidad:</label>
                                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" value={contribution_text} onChange={(e) => setContribution_text(e.target.value)} ></textarea>
                                                </div>
                                            </div>
                                        </form>

                                        <form>
                                            <div className="row text-start">
                                                <div className="col">

                                                    <label className="form-label fw-bold" htmlFor="form3Example1">País:</label>
                                                    <select className="form-select" name="country" value={countries} onChange={(e) => setCountries(e.target.value)}>
                                                        {list_countries.map((countriess) => (
                                                            <option key={countriess.id} value={countriess.id}>
                                                                {countriess.name}{" "}
                                                            </option>
                                                        ))}{" "}
                                                    </select>
                                                </div>

                                            </div>
                                        </form>

                                        <form>
                                            <div className="row text-start">
                                                <div className="col">
                                                    <label className="form-label fw-bold" htmlFor="form3Example2">Departamento:</label>
                                                    <select className="form-select" name="department" value={departments} onChange={(e) => setDepartments(e.target.value)}>
                                                        {list_departamentos.map((departmento) => (
                                                            <option key={departmento.id} value={departmento.id}>
                                                                {departmento.name}{" "}
                                                            </option>
                                                        ))}{" "}
                                                    </select>
                                                </div>
                                                <div className="col">
                                                    <label className="form-label fw-bold" htmlFor="form3Example3">Ciudad:</label>
                                                    <select className="form-select" name="city" value={cities} onChange={(e) => setCities(e.target.value)}>
                                                        {list_ciudades.map((ciudades) => (
                                                            <option key={ciudades.id} value={ciudades.id}>
                                                                {ciudades.name}{" "}
                                                            </option>
                                                        ))}{" "}
                                                    </select>
                                                </div>
                                            </div>
                                        </form>
                                        <form>
                                            <div className="col text-start">
                                                <div className="form-group">
                                                    <label className='form-label fw-bold' for="exampleFormControlTextarea1">Descripción del perfil:</label>
                                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                                </div>
                                            </div>
                                            <div className="col text-start">
                                                <div className="form-group">
                                                    <label className='form-label fw-bold' for="exampleFormControlTextarea1">Intereses de conocimiento:</label>
                                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" value={knowledge_interests} onChange={(e) => setKnowledge_interests(e.target.value)}></textarea>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-block mt-3 mb-0">Registrarse</button>
                                        </form>
                                    </form>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
export default Editar_perfil;