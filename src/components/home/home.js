import React, { useEffect, useState } from 'react';
import Footer from '../footer/footer';
import Header_post from '../header_post/header_post';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faFile, faImage, faUserPlus, faUsers, faVideo } from '@fortawesome/free-solid-svg-icons';
import ModalLogin from '../modal_perfil/modal-profile';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


const Home = () => {

    const [show, setShow] = useState(false);
    const [nombre, setNombre] = useState();
    const [apellido, setApellido] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { username } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/api/user/get/" + username).
            then((response) => {
                setNombre(response.data.name_user);
                setApellido(response.data.lastname);
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
                                        {/* <p className='mb-0 fw-bold'>Andrés Felipe Rodríguez Lamus</p> */}
                                    </div>
                                </div>
                                <div className="d-flex align-items-center text-start mb-3">
                                    <FontAwesomeIcon className="mw-icon-nav-left color-icon-h" icon={faComments} />
                                    <div className="ms-2">
                                        <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Publicaciones</p></a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center text-start mb-3">
                                    <FontAwesomeIcon className="mw-icon-nav-left color-icon-h" icon={faUsers} />
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
                                    <div className="card-header">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center text-start">
                                                <img className="mw-image rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" />
                                                <div className="ms-2">
                                                    <Link to={"/perfil/" + username} className='text-decoration-none'>
                                                        <a className='text-decoration-none text-dark'><p className='mb-0 fs-5 fw-bolder'>{nombre + " " + apellido}</p></a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <form>
                                        <div className="card-body text-start d-flex align-items-center">
                                            <input className="card-body text-start d-flex align-items-center border-active-none" type="text" placeholder='¿Qué estas pensando?' />
                                        </div>
                                    </form>
                                    <hr className='m-0' />
                                    <div className="">
                                        <div className="d-flex justify-content-start post-actions my-1 me-0">
                                            <button type='button' className="btn btn-link text-decoration-none text-muted fs-6 mx-0 my-0 button-size-l border-active-none">
                                                <FontAwesomeIcon className="mw-icon-post color-corp" icon={faImage} /> Añadir imagen
                                            </button>
                                            <button type='button' className="btn btn-link text-decoration-none text-muted fs-6 mx-0 my-0 button-size-l border-active-none">
                                                <FontAwesomeIcon className="mw-icon-post color-corp" icon={faVideo} /> Añadir video
                                            </button>
                                            <button type='button' className="btn btn-link text-decoration-none text-muted fs-6 mx-0 my-0 button-size-l border-active-none">
                                                <FontAwesomeIcon className="mw-icon-file color-corp" icon={faFile} /> Añadir archivo
                                            </button>
                                            <div className='d-grid col-4 my-1 justify-content-end'>
                                                <button type='button' className="btn btn-primary fs-6 color-corp-boton">
                                                    Publicar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card rounded mt-3">
                                    <div className="card-header">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center text-start">
                                                <img className="mw-image rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" />
                                                <div className="ms-2">
                                                    <Link to="/perfil" className='text-decoration-none'>
                                                        <a className='text-decoration-none text-dark'><p className='mb-0 fs-5 fw-bolder'>{nombre + " " + apellido}</p></a>
                                                    </Link>
                                                    <p className="mb-0 text-muted">Hace 40 minutos</p>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <button className="btn p-0" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-horizontal icon-lg pb-3px color-corp">
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="19" cy="12" r="1"></circle>
                                                        <circle cx="5" cy="12" r="1"></circle>
                                                    </svg>
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-meh icon-sm mr-2">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <line x1="8" y1="15" x2="16" y2="15"></line>
                                                            <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                                            <line x1="15" y1="9" x2="15.01" y2="9"></line>
                                                        </svg> <span className="">Unfollow</span></a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-corner-right-up icon-sm mr-2">
                                                            <polyline points="10 9 15 4 20 9"></polyline>
                                                            <path d="M4 20h7a4 4 0 0 0 4-4V4"></path>
                                                        </svg> <span className="">Go to post</span></a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-share-2 icon-sm mr-2">
                                                            <circle cx="18" cy="5" r="3"></circle>
                                                            <circle cx="6" cy="12" r="3"></circle>
                                                            <circle cx="18" cy="19" r="3"></circle>
                                                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                                                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                                                        </svg> <span className="">Share</span></a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-copy icon-sm mr-2">
                                                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                                        </svg> <span className="">Copy link</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p className="mb-3 tx-14 text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus minima delectus nemo unde quae recusandae assumenda.</p>
                                        <img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" />
                                    </div>
                                    <div className="card-footer">
                                        <div className="d-flex justify-content-evenly post-actions my-2">
                                            <a href="javascript:;" className="d-flex align-items-center text-muted mr-4 text-decoration-none color-corp">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-heart icon-md color-corp">
                                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                                </svg>
                                                <p className="d-none d-md-block ms-2 mb-0 align-items-center">Me gusta</p>
                                            </a>
                                            <a href="javascript:;" className="d-flex align-items-center text-muted mr-4 text-decoration-none color-corp">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-square icon-md color-corp">
                                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                                </svg>
                                                <p className="d-none d-md-block ms-2 mb-0">Comentarios</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card rounded mt-3">
                                    <div className="card-header">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center text-start">
                                                <img className="mw-image rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" />
                                                <div className="ms-2">
                                                    <Link to="/perfil" className='text-decoration-none'>
                                                        <a className='text-decoration-none text-dark'><p className='mb-0 fs-5 fw-bolder'>{nombre + " " + apellido}</p></a>
                                                    </Link>
                                                    <p className="mb-0 text-muted">Hace 1 minuto</p>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <button className="btn p-0" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-horizontal icon-lg pb-3px color-corp">
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="19" cy="12" r="1"></circle>
                                                        <circle cx="5" cy="12" r="1"></circle>
                                                    </svg>
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-meh icon-sm mr-2">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <line x1="8" y1="15" x2="16" y2="15"></line>
                                                            <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                                            <line x1="15" y1="9" x2="15.01" y2="9"></line>
                                                        </svg> <span className="">Unfollow</span></a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-corner-right-up icon-sm mr-2">
                                                            <polyline points="10 9 15 4 20 9"></polyline>
                                                            <path d="M4 20h7a4 4 0 0 0 4-4V4"></path>
                                                        </svg> <span className="">Go to post</span></a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-share-2 icon-sm mr-2">
                                                            <circle cx="18" cy="5" r="3"></circle>
                                                            <circle cx="6" cy="12" r="3"></circle>
                                                            <circle cx="18" cy="19" r="3"></circle>
                                                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                                                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                                                        </svg> <span className="">Share</span></a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-copy icon-sm mr-2">
                                                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                                        </svg> <span className="">Copy link</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p className="mb-3 tx-14 text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus minima delectus nemo unde quae recusandae assumenda.</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="d-flex justify-content-evenly post-actions my-2">
                                            <a href="javascript:;" className="d-flex align-items-center text-muted mr-4 text-decoration-none color-corp">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-heart icon-md color-corp">
                                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                                </svg>
                                                <p className="d-none d-md-block ms-2 mb-0 align-items-center">Me gusta</p>
                                            </a>
                                            <a href="javascript:;" className="d-flex align-items-center text-muted mr-4 text-decoration-none color-corp">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-square icon-md color-corp">
                                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                                </svg>
                                                <p className="d-none d-md-block ms-2 mb-0">Comentarios</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
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
            <ModalLogin show={show} handleClose={handleClose} />
        </>
    )

}

export default Home;