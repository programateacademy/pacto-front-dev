/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Footer from '../footer/footer';
import Header_post from '../header_post/header_post';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faFile, faImage, faUserPlus, faUsers, faVideo } from '@fortawesome/free-solid-svg-icons';
import ModalLogin from '../modal_perfil/modal-profile';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Posts from '../posts/posts';

const Home = () => {

    const [show, setShow] = useState(false);
    const [nombre, setNombre] = useState();
    const [apellido, setApellido] = useState();
    const [description, setDescription] = useState('');
    const [updatePost, setUpdatePost] = useState(false);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    const { username } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/api/user/get/" + username)
            .then((response) => {
                setNombre(response.data.name_user);
                setApellido(response.data.lastname);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])


    const createPost = async () => {
        axios.post('http://localhost:8000/api/post/new', {
            "status": 0,
            "description": description,
            "image_post": "../image/profile1.jpg",
            "document_post": "link de documento 2",
            "video_post": "link de video"
        }, {
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem("token")}`
        }
        }).then(response => {
            if(response.data.message === 'Se ha creado el post correctamente') {
                setUpdatePost(!updatePost)
                setDescription('')
            }
        })
    }


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
                                                    <Link to={"/profile/" + username} className='text-decoration-none'>
                                                        <a className='text-decoration-none text-dark'><p className='mb-0 fs-5 fw-bolder'>{nombre + " " + apellido}</p></a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <form>
                                        <div className="card-body text-start d-flex align-items-center">
                                            <input className="card-body text-start d-flex align-items-center border-active-none" type="text"
                                             placeholder='¿Qué estas pensando?' value={description} onChange={(e) => setDescription(e.target.value)}
                                            />
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
                                                <button className="btn btn-primary fs-6 color-corp-boton" onClick={()=> createPost()}>
                                                    Publicar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*
                                AQUI DEBEN DE IR LOS POST
                                */}
                                <Posts updatePost={updatePost} setUpdatePost={setUpdatePost}/>
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