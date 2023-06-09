/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Footer from '../footer/footer';
import Header_post from '../header_post/header_post';
// import Posts from '../posts/posts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faLocationDot, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import ModalLogin from '../modal_perfil/modal-profile';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Profile = () => {

    const [show, setShow] = useState(false);
    const [nombre, setNombre] = useState();
    const [apellido, setApellido] = useState();
    const [tipo_actor, setTipo_actor] = useState();
    const [entidad, setEntidad] = useState();
    const [contribuciones, setContribuciones] = useState();
    const [correo, setCorreo] = useState();
    const [usernam, setUsernam] = useState();
    const [celular, setCelular] = useState();
    const [descrip_contribu, setDescrip_contribu] = useState();
    const [descrip_perfil, setDescrip_perfil] = useState();
    const [inte_conocimiento, setInte_conocimiento] = useState();
    const [ciudad, setCiudad] = useState();
    // const [id_ciudad, setId_ciudad] = useState();
    const [departamento, setDepartamento] = useState();
    // const [id_departamento, setId_departamento] = useState();
    // const [updatePost, setUpdatePost] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { username } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/api/user/get/" + username)
            .then((response) => {
                setNombre(response.data.name_user);
                setApellido(response.data.lastname);
                setTipo_actor(response.data.id_type_actor);
                setEntidad(response.data.name_enti);
                setContribuciones(response.data.id_contribution);
                setCorreo(response.data.email);
                setCelular(response.data.phone_number);
                setDescrip_contribu(response.data.contribution_text);
                setUsernam(response.data.username);
                setDescrip_perfil(response.data.description);
                setInte_conocimiento(response.data.knowledge_interests);
                // setId_ciudad(response.data.id_city);

                axios.get("http://localhost:8000/api/city/get/").then((responseCity) => {
                    const ciudadFiltrada = responseCity.data.filter((o) => o.id === response.data.id_city)[0];
                    setCiudad(ciudadFiltrada);
                    // setId_departamento(responseCity.data.id_department);
                    axios.get("http://localhost:8000/api/departament/get/")
                        .then((responseDepartment) => {
                            if(ciudadFiltrada){
                                setDepartamento(responseDepartment.data.filter((o) => o.id === ciudadFiltrada.id_department)[0]);
                            }
                        })

                });
            })
            .catch((error) => {
                console.log(error);
            });


    }, [])


    return (
        <>
            <div>
                <Header_post />

                <div className="row profile-body">
                    <div className="d-none d-md-block col-md-4 col-xl-3 left-wrapper mt-3">
                        <div className="card rounded">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <h6 className="card-title mb-4 fw-bold">Intereses</h6>
                                </div>
                                <div className="d-flex align-items-center text-start mb-3">
                                    <img className="mw-image-nav-left rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" />
                                    <div className="ms-2">
                                        <p className='mb-0 fw-bold'>{nombre + " " + apellido}</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center text-start mb-3">
                                    <FontAwesomeIcon className="mw-icon-nav-left color-icon" icon={faComments} />
                                    <div className="ms-2">
                                        <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Publicaciones</p></a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center text-start mb-3">
                                    <FontAwesomeIcon className="mw-icon-nav-left color-icon" icon={faUsers} />
                                    <div className="ms-2">
                                        <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Seguidos</p></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8 col-xl-6 middle-wrapper mt-3">
                        <div className="row">
                            <div className="col-md-12 gri-margin">

                                <div className="card rounded">
                                    <div className="d-flex align-items-center justify-content-center my-3">

                                        <img className="mw-image-perfil rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Imagen de perfil" />
                                    </div>
                                    <div className="ms-2">
                                        <a className='text-decoration-none text-dark'><p className='mb-2 fs-5 fw-bolder'>{nombre + " " + apellido}</p></a>
                                    </div>

                                    <hr className='m-0' />

                                    <div className="row align-items-start mt-3">
                                        <div className="col fw-bold">
                                            Actor social:
                                            <p className='fw-normal' >{tipo_actor}</p>
                                        </div>
                                        <div className="col fw-bold">
                                            Entidad:
                                            <p className='fw-normal' >{entidad}</p>
                                        </div>
                                        <div className="col fw-bold">
                                            Aportes a la comunidad:
                                            <p className='fw-normal' >{contribuciones}</p>
                                        </div>
                                    </div>

                                    <div className="col fw-bold text-start mx-4 mt-4 bg-perfil p-4 rounded-3">
                                        Descripción del perfil:
                                        <p className='fw-normal'>{descrip_perfil}</p>
                                    </div>

                                    <div className="col fw-bold text-start mx-4 my-4 bg-perfil p-4 rounded-3">
                                        Intereses de conocimiento:
                                        <p className='fw-normal'>{inte_conocimiento}</p>
                                    </div>

                                    <div className='d-flex align-items-center justify-content-center mb-3'>
                                        <FontAwesomeIcon className="icon-size d-flex align-items-center mx-2 color-corp" icon={faLocationDot} />
                                        <p className='mb-0 fs-6 fw-bolder'>{ciudad ? ciudad.name : null}/ {departamento ? departamento.name : null}</p>
                                    </div>

                                    <hr className='m-0' />

                                    <div className="d-flex justify-content-center post-actions my-1 me-0">
                                        <button type='button' className="btn btn-prim fs-6 my-2 color-corp-boton" onClick={handleShow}>
                                            Actualizar
                                        </button>
                                    </div>
                                </div>
                                {/*
                                AQUI DEBEN DE IR LOS POST
                                */}

                                {/* <Posts updatePost={updatePost} setUpdatePost={setUpdatePost}/> */}
                                
                            </div>

                        </div>
                    </div>


                    <div className="d-none d-xl-block col-xl-3 right-wrapper mt-3">
                        <div className="row">
                            <div className="col-md-12 grid-margin ">
                                <div className="card rounded mt-0 mx-1">
                                    <div className="card-body">
                                        <h6 className="card-title text-start fw-bold">Sugerencias para ti</h6>
                                        <div className="d-flex justify-content-between mb-2 pb-2 border-bottom mt-4">
                                            <div className="d-flex align-items-center hover-pointer">
                                                <img className="mw-icon-nav-right rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" />
                                                <div className="ms-2">
                                                    <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Usuario 2</p></a>
                                                </div>
                                            </div>
                                            <div className='d-grid col-4 mx-auto'>
                                                <button type='button' className="btn btn-primary fs-6 mx-3 my-3 color-corp-boton">
                                                    <FontAwesomeIcon className="mw-icon-nav-right-sug" icon={faUserPlus} /> Seguir
                                                </button>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div className="d-flex align-items-center hover-pointer">
                                                <img className="mw-icon-nav-right rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
                                                <div className="ms-2">
                                                    <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Usuario 3</p></a>
                                                </div>
                                            </div>
                                            <div className='d-grid col-4 mx-auto'>
                                                <button type='button' className="btn btn-primary fs-6 mx-3 my-3 color-corp-boton">
                                                    <FontAwesomeIcon className="mw-icon-nav-right-sug" icon={faUserPlus} /> Seguir
                                                </button>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div className="d-flex align-items-center hover-pointer">
                                                <img className="mw-icon-nav-right rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" />
                                                <div className="ms-2">
                                                    <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Usuario 4</p></a>
                                                </div>
                                            </div>
                                            <div className='d-grid col-4 mx-auto'>
                                                <button type='button' className="btn btn-primary fs-6 mx-3 my-3 color-corp-boton">
                                                    <FontAwesomeIcon className="mw-icon-nav-right-sug" icon={faUserPlus} /> Seguir
                                                </button>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div className="d-flex align-items-center hover-pointer">
                                                <img className="mw-icon-nav-right rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="" />
                                                <div className="ms-2">
                                                    <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Usuario 5</p></a>
                                                </div>
                                            </div>
                                            <div className='d-grid col-4 mx-auto'>
                                                <button type='button' className="btn btn-primary fs-6 mx-3 my-3 color-corp-boton">
                                                    <FontAwesomeIcon className="mw-icon-nav-right-sug" icon={faUserPlus} /> Seguir
                                                </button>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div className="d-flex align-items-center hover-pointer">
                                                <img className="mw-icon-nav-right rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" />
                                                <div className="ms-2">
                                                    <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Usuario 6</p></a>
                                                </div>
                                            </div>
                                            <div className='d-grid col-4 mx-auto'>
                                                <button type='button' className="btn btn-primary fs-6 mx-3 my-3 color-corp-boton">
                                                    <FontAwesomeIcon className="mw-icon-nav-right-sug" icon={faUserPlus} /> Seguir
                                                </button>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex align-items-center hover-pointer">
                                                <img className="mw-icon-nav-right rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" />
                                                <div className="ms-2">
                                                    <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Usuario 7</p></a>
                                                </div>
                                            </div>
                                            <div className='d-grid col-4 mx-auto'>
                                                <button type='button' className="btn btn-primary fs-6 mx-3 my-3 color-corp-boton">
                                                    <FontAwesomeIcon className="mw-icon-nav-right-sug" icon={faUserPlus} /> Seguir
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 grid-margin">
                                <div className="card rounded mt-3 mx-1 mb-3">
                                    <div className="card-body">
                                        <h6 className="card-title text-start fw-bold">Usuarios en línea</h6>
                                        <div className="d-flex justify-content-between mb-2 pb-2 border-bottom mt-4">
                                            <div className="d-flex align-items-center hover-pointer">
                                                <img className="mw-icon-nav-right rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" />
                                                <div className="ms-2">
                                                    <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Usuario 2</p></a>
                                                </div>
                                            </div>
                                            <div className='d-grid col-5 mx-auto'>
                                                <button type='button' className="btn btn btn-primary fs-6 mx-1 my-3 color-corp-boton">
                                                    <FontAwesomeIcon className="mw-icon-nav-right" icon={faComments} /> Enviar mensaje
                                                </button>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div className="d-flex align-items-center hover-pointer">
                                                <img className="mw-icon-nav-right rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
                                                <div className="ms-2">
                                                    <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Usuario 3</p></a>
                                                </div>
                                            </div>
                                            <div className='d-grid col-5 mx-auto'>
                                                <button type='button' className="btn btn btn-primary fs-6  mx-1 my-3 color-corp-boton">
                                                    <FontAwesomeIcon className="mw-icon-nav-right" icon={faComments} /> Enviar mensaje
                                                </button>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div className="d-flex align-items-center hover-pointer">
                                                <img className="mw-icon-nav-right rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" />
                                                <div className="ms-2">
                                                    <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Usuario 4</p></a>
                                                </div>
                                            </div>
                                            <div className='d-grid col-5 mx-auto'>
                                                <button type='button' className="btn btn btn-primary fs-6 mx-1 my-3 color-corp-boton">
                                                    <FontAwesomeIcon className="mw-icon-nav-right" icon={faComments} /> Enviar mensaje
                                                </button>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div className="d-flex align-items-center hover-pointer">
                                                <img className="mw-icon-nav-right rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="" />
                                                <div className="ms-2">
                                                    <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Usuario 5</p></a>
                                                </div>
                                            </div>
                                            <div className='d-grid col-5 mx-auto'>
                                                <button type='button' className="btn btn btn-primary fs-6  mx-1 my-3 color-corp-boton">
                                                    <FontAwesomeIcon className="mw-icon-nav-right" icon={faComments} /> Enviar mensaje
                                                </button>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div className="d-flex align-items-center hover-pointer">
                                                <img className="mw-icon-nav-right rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" />
                                                <div className="ms-2">
                                                    <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Usuario 6</p></a>
                                                </div>
                                            </div>
                                            <div className='d-grid col-5 mx-auto'>
                                                <button type='button' className="btn btn btn-primary fs-6 mx-1 my-3 color-corp-boton">
                                                    <FontAwesomeIcon className="mw-icon-nav-right" icon={faComments} /> Enviar mensaje
                                                </button>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex align-items-center hover-pointer">
                                                <img className="mw-icon-nav-right rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" />
                                                <div className="ms-2">
                                                    <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Usuario 7</p></a>
                                                </div>
                                            </div>
                                            <div className='d-grid col-5 mx-auto'>
                                                <button type='button' className="btn btn btn-primary fs-6 mx-1 my-3 color-corp-boton">
                                                    <FontAwesomeIcon className="mw-icon-nav-right" icon={faComments} /> Enviar mensaje
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            <ModalLogin show={show} handleClose={handleClose} usuario={{ nombre: nombre, apellido: apellido, tipo_actor: tipo_actor, entidad: entidad, contribuciones: contribuciones, correo: correo, celular: celular, descrip_contribu: descrip_contribu, usernam: usernam, descrip_perfil: descrip_perfil, inte_conocimiento: inte_conocimiento }} />
        </>
    )

}

export default Profile;