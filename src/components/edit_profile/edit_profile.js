/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import axios from "axios";
// import Avatar from '../../assets/img/perfil.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';


function Edit_profile({ usuario }) {

    const [id_type_actor, setId_type_actor] = useState(usuario.tipo_actor);
    const [email, setEmail] = useState(usuario.correo);
    const [username, setUsername] = useState(usuario.usernam);
    // const [password, setPassword] = useState("");
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

    function handleSignupSubmit() {
        let newForm = {
            "name_user": username,
            "email": email,
            "username": username,
            "name_enti": name_enti,
            "contribution_text": contribution_text,
            "description": description,
            "knowledge_interests": knowledge_interests,
            "phone_number": phone_number
          }
        const formData = new FormData();
        for (const property in newForm) {
            formData.append(property, newForm[property]);
        }

        // axios.get("http://localhost:8000/api/user/get/"+ username)
        //     .then((response) => {
        //         console.log(response);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
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

    // function handleCountryChange(event) {
    //     // Obtener el ID del país seleccionado
    //     const countryId = event.target.value;
    //     // Solicitar los departamentos correspondientes al país seleccionado
    //     fetch(`http://localhost:8000/api/countries/${countryId}/departments/`)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setDepartments(data);
    //         });
    // }

    // function handleDepartmentChange(event) {
    //     // Obtener el ID del departamento seleccionado
    //     const departmentId = event.target.value;
    //     // Solicitar las ciudades correspondientes al departamento seleccionado
    //     fetch(`http://localhost:8000/api/departments/${departmentId}/cities/`)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setCities(data);
    //         });
    // }

    return (
        <div>
            <main role="main" className="flex-shrink-0 mt-5 mb-5">
                <section className="">
                    <div className="container h-custom">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="row text-start">
                                <div className="col">
                                    <div className="form-group">
                                        <a className="link--edit--profile" href="https://www.youtube.com/watch?v=CrY7GS6KKnM&list=PLCndDt4b5CnzTI2HgQ3knxXHcl5dsGNQe&index=4" target="_blank" rel="noreferrer">
                                            <label className="form-label fw-bold" >Tipo de actor social <FontAwesomeIcon className="icon--youtube" icon={faYoutube} /> :</label>
                                        </a>
                                        <select className="form-control"  value={id_type_actor} onChange={(e) => setId_type_actor(e.target.value)}>
                                            {list_type_actor.map((actor) => (
                                                <option key={actor.id} value={actor.id}>
                                                    {actor.type_actor}{" "}
                                                </option>
                                            ))}{" "}
                                        </select>

                                    </div>
                                </div>
                                <div className="col">
                                    <a className="link--edit--profile" href="https://www.youtube.com/watch?v=JX51GuYLHlY&list=PLCndDt4b5CnzTI2HgQ3knxXHcl5dsGNQe&index=9&pp=iAQB&ab_channel=PactodeProductividad" target="_blank" rel="noreferrer">
                                        <label className="form-label fw-bold" for="correo">Correo electrónico <FontAwesomeIcon className="icon--youtube" icon={faYoutube} /> :</label>
                                    </a>
                                    <input type="email" className="form-control" name="correo" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>
                            <div className="row text-start">
                                <div className="col">
                                    {/* <a className="link--edit--profile" href="" target="_blank"> */}
                                        <label className="form-label fw-bold">Nombre de usuario 
                                        {/* <FontAwesomeIcon className="icon--youtube" icon={faYoutube} />  */}
                                        :</label>
                                    {/* </a> */}
                                    <input type="text" className="form-control" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                </div>
                                <div className="col">
                                    <a className="link--edit--profile" href="https://www.youtube.com/watch?v=R_diAHMkn9o&list=PLCndDt4b5CnzTI2HgQ3knxXHcl5dsGNQe&index=14&ab_channel=PactodeProductividad" target="_blank" rel="noreferrer">
                                        <label className="form-label fw-bold">Nombre de la entidad <FontAwesomeIcon className="icon--youtube" icon={faYoutube} /> :</label>
                                    </a>
                                    <input type="text" className="form-control" name="entidad" value={name_enti} onChange={(e) => setNameEnti(e.target.value)} />
                                </div>
                            </div>

                            <div className="row text-start">

                                <div className="col">
                                    <div className="form-group">
                                        <a className="link--edit--profile" href="https://www.youtube.com/watch?v=u_YBKRgBI5c&list=PLCndDt4b5CnzTI2HgQ3knxXHcl5dsGNQe&index=27&ab_channel=PactodeProductividad" target="_blank" rel="noreferrer">
                                            <label className="form-label fw-bold" >Aportes a la comunidad <FontAwesomeIcon className="icon--youtube" icon={faYoutube} /> :</label>
                                        </a>
                                        <select className="form-control" value={contributions} onChange={(e) => setContributions(e.target.value)}>
                                            {list_contibutions.map((contribution) => (
                                                <option key={contribution.id} value={contribution.id}>
                                                    {contribution.name}{" "}
                                                </option>
                                            ))}{" "}
                                        </select>
                                    </div>
                                    <a className="link--edit--profile" href="https://www.youtube.com/watch?v=kPuMJbbhUHI&list=PLCndDt4b5CnzTI2HgQ3knxXHcl5dsGNQe&index=24&ab_channel=PactodeProductividad" target="_blank" rel="noreferrer">
                                        <label className="form-label fw-bold">Contacto <FontAwesomeIcon className="icon--youtube" icon={faYoutube} /> :</label>
                                    </a>
                                    <input type="text" className="form-control" value={phone_number} onChange={(e) => setPhone_number(e.target.value)} />
                                </div>
                                <div className="col text-start">
                                    {/* <a className="link--edit--profile" href="" target="_blank"> */}
                                        <label className="form-label fw-bold" for="exampleFormControlTextarea1">
                                            Breve descripción de aportes a la comunidad 
                                            {/* <FontAwesomeIcon className="icon--youtube" icon={faYoutube} /> */}
                                        :</label>
                                    {/* </a> */}
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" value={contribution_text} onChange={(e) => setContribution_text(e.target.value)} ></textarea>
                                </div>
                            </div>

                            <div className="row text-start">
                                <div className="col">
                                    {/* <a className="link--edit--profile" href="" target="_blank"> */}
                                        <label className="form-label fw-bold">País
                                            {/* <FontAwesomeIcon className="icon--youtube" icon={faYoutube} />  */}
                                            :</label>
                                    {/* </a> */}
                                    <select className="form-select" name="country" value={countries} onChange={(e) => setCountries(e.target.value)}>
                                        {list_countries.map((countriess) => (
                                            <option key={countriess.id} value={countriess.id}>
                                                {countriess.name}{" "}
                                            </option>
                                        ))}{" "}
                                    </select>
                                </div>

                            </div>

                            <div className="row text-start">
                                <div className="col">
                                    {/* <a className="link--edit--profile" href="" target="_blank"> */}
                                        <label className="form-label fw-bold" >Departamento
                                            {/* <FontAwesomeIcon className="icon--youtube" icon={faYoutube} />  */}
                                            :</label>
                                    {/* </a> */}
                                    <select className="form-select" name="department" value={departments} onChange={(e) => setDepartments(e.target.value)}>
                                        {list_departamentos.map((departmento) => (
                                            <option key={departmento.id} value={departmento.id}>
                                                {departmento.name}{" "}
                                            </option>
                                        ))}{" "}
                                    </select>
                                </div>
                                <div className="col">
                                    <a className="link--edit--profile" href="https://www.youtube.com/watch?v=Z6j5i7u1otc&list=PLCndDt4b5CnzTI2HgQ3knxXHcl5dsGNQe&index=17&pp=iAQB&ab_channel=PactodeProductividad" target="_blank" rel="noreferrer">
                                        <label className="form-label fw-bold" >Ciudad <FontAwesomeIcon className="icon--youtube" icon={faYoutube} /> :</label>
                                    </a>
                                    <select className="form-select" name="city" value={cities} onChange={(e) => setCities(e.target.value)}>
                                        {list_ciudades.map((ciudades) => (
                                            <option key={ciudades.id} value={ciudades.id}>
                                                {ciudades.name}{" "}
                                            </option>
                                        ))}{" "}
                                    </select>
                                </div>
                            </div>
                            <div className="col text-start">
                                <div className="form-group">
                                    {/* <a className="link--edit--profile" href="" target="_blank"> */}
                                        <label className="form-label fw-bold" for="exampleFormControlTextarea1">Descripción del perfil 
                                        {/* <FontAwesomeIcon className="icon--youtube" icon={faYoutube} />  */}
                                        :</label>
                                    {/* </a> */}
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                </div>
                            </div>
                            <div className="col text-start">
                                <div className="form-group">
                                    {/* <a className="link--edit--profile" href="" target="_blank"> */}
                                        <label className="form-label fw-bold" for="exampleFormControlTextarea1">Intereses de conocimiento
                                            {/* <FontAwesomeIcon className="icon--youtube" icon={faYoutube} />  */}
                                            :</label>
                                    {/* </a> */}
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" value={knowledge_interests} onChange={(e) => setKnowledge_interests(e.target.value)}></textarea>
                                </div>
                            </div>
                            <button className="btn btn-primary btn-block mt-3 mb-0" onClick={()=>handleSignupSubmit()}>Actualizar</button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
export default Edit_profile;