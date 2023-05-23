import React from 'react';
import Footer from '../footer/footer';
import Header_post from '../header_post/header_post';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faUsers } from '@fortawesome/free-solid-svg-icons';


const Dashboard = () => {

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
                                    <p className='ms-2 mb-0 fw-bold'>Andrés Felipe Rodríguez Lamus</p>
                                </div>
                                <div className="d-flex align-items-center text-start mb-3">
                                    <FontAwesomeIcon className="mw-icon-dash color-icon" icon={faComments} />
                                    <a className='ms-2 text-decoration-none text-dark' href='#usuarios'><p className='mb-0 fw-bold'>Usuarios pendientes por aceptar</p></a>
                                </div>
                                <div className="d-flex align-items-center text-start mb-3">
                                    <FontAwesomeIcon className="mw-icon-dash color-icon" icon={faUsers} />
                                    <a className='ms-2 text-decoration-none text-dark' href='#publicaciones'><p className='mb-0 fw-bold'>Publicaciones por aprobar</p></a>
                                </div>
                                <div className="d-flex align-items-center text-start mb-3">
                                    <FontAwesomeIcon className="mw-icon-dash color-icon" icon={faUsers} />
                                    <a className='ms-2 text-decoration-none text-dark' href='#comentarios'><p className='mb-0 fw-bold'>Comentarios por aprobar</p></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8 col-xl-8 middle-wrapper mt-3">
                        <div className="row">
                            <div className="col-md- gri-margi">
                                <div className="card rounded">
                                    <div className="card-body" id='usuarios'>
                                        <h4 className="card-title text-center fw-bold my-4">Usuarios pendientes por aceptar</h4>
                                        <div className="d-flex justify-content-between mb-2 pb-2 border-bottom mt-4">
                                            <div className="d-flex align-items-center hover-pointer">
                                                <img className="mw-icon-aproba rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" />
                                                <div className="ms-2">
                                                    <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Usuario 2</p></a>
                                                </div>
                                            </div>
                                            <div class="d-flex justify-content-end align-items-center" role="group" aria-label="Basic mixed styles example">
                                                <button type="button" class="btn btn-success text-white mx-2">Aceptar</button>
                                                <button type="button" class="btn bg-danger text-white mx-2">Rechazar</button>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div className="d-flex align-items-center hover-pointer">
                                                <img className="mw-icon-aproba rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
                                                <div className="ms-2">
                                                    <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Usuario 3</p></a>
                                                </div>
                                            </div>
                                            <div class="d-flex justify-content-end align-items-center" role="group" aria-label="Basic mixed styles example">
                                                <button type="button" class="btn btn-success text-white mx-2">Aceptar</button>
                                                <button type="button" class="btn bg-danger text-white mx-2">Rechazar</button>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div className="d-flex align-items-center hover-pointer">
                                                <img className="mw-icon-aproba rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" />
                                                <div className="ms-2">
                                                    <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Usuario 4</p></a>
                                                </div>
                                            </div>
                                            <div class="d-flex justify-content-end align-items-center" role="group" aria-label="Basic mixed styles example">
                                                <button type="button" class="btn btn-success text-white mx-2">Aceptar</button>
                                                <button type="button" class="btn bg-danger text-white mx-2">Rechazar</button>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div className="d-flex align-items-center hover-pointer">
                                                <img className="mw-icon-aproba rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="" />
                                                <div className="ms-2">
                                                    <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Usuario 5</p></a>
                                                </div>
                                            </div>
                                            <div class="d-flex justify-content-end align-items-center" role="group" aria-label="Basic mixed styles example">
                                                <button type="button" class="btn btn-success text-white mx-2">Aceptar</button>
                                                <button type="button" class="btn bg-danger text-white mx-2">Rechazar</button>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div className="d-flex align-items-center hover-pointer">
                                                <img className="mw-icon-aproba rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" />
                                                <div className="ms-2">
                                                    <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Usuario 6</p></a>
                                                </div>
                                            </div>
                                            <div class="d-flex justify-content-end align-items-center" role="group" aria-label="Basic mixed styles example">
                                                <button type="button" class="btn btn-success text-white mx-2">Aceptar</button>
                                                <button type="button" class="btn bg-danger text-white mx-2">Rechazar</button>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex align-items-center hover-pointer">
                                                <img className="mw-icon-aproba rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" />
                                                <div className="ms-2">
                                                    <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Usuario 7</p></a>
                                                </div>
                                            </div>
                                            <div class="d-flex justify-content-end align-items-center" role="group" aria-label="Basic mixed styles example">
                                                <button type="button" class="btn btn-success text-white mx-2">Aceptar</button>
                                                <button type="button" class="btn bg-danger text-white mx-2">Rechazar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card rounded mt-3">
                                    <div className="card-body" id='publicaciones'>
                                        <h4 className="card-title text-center fw-bold my-4">Publicaciones por aprobar</h4>
                                        <div className="d-flex justify-content-between mb-2 pb-2 border-bottom mt-4">
                                            <div className="d-flex align-items-center hover-pointer text-start">
                                                <img className="mw-icon-post rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" />
                                                <div className="ms-2">
                                                    <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Usuario 2</p></a>
                                                    <p className="mb-0 text-muted">Hace 20 minutos</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body border-bottom mb-2">
                                            <p className="mb-3 tx-14 text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus minima delectus nemo unde quae recusandae assumenda.</p>
                                        </div>
                                        <div class="d-flex justify-content-center align-items-center" role="group" aria-label="Basic mixed styles example">
                                            <button type="button" class="btn btn-success text-white mx-2">Aceptar</button>
                                            <button type="button" class="btn bg-danger text-white mx-2">Rechazar</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card rounded mt-3 mb-3">
                                    <div className="card-body" id="comentarios">
                                        <h4 className="card-title text-center fw-bold my-4">Comentarios por aprobar</h4>
                                        <div className="d-flex justify-content-between mb-2 pb-2 border-bottom mt-4">
                                            <div className="d-flex align-items-center hover-pointer text-start">
                                                <img className="mw-icon-post rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" />
                                                <div className="ms-2">
                                                    <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Usuario 2</p></a>
                                                    <p className="mb-0 text-muted">Hace 20 minutos</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body border-bottom mb-2">
                                            <p className="mb-3 tx-14 text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus minima delectus nemo unde quae recusandae assumenda.</p>
                                        </div>
                                        <h5 className="card-title text-start fw-bold my-4">Comentarios</h5>
                                        <div className="col fw-bold text-start mx-4 mt-4 bg-perfil p-4 rounded-3">
                                            <div className="d-flex align-items-center hover-pointer text-start">
                                                <img className="mw-icon-comenta rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" />
                                                <div className="ms-2">
                                                    <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Usuario 2</p></a>
                                                    <p className="mb-0 text-muted fw-normal">Hace 20 minutos</p>
                                                </div>
                                            </div>
                                            <p className='fw-normal'>Vivamus tristique finibus quam ac placerat. Phasellus tincidunt efficitur libero, sed pretium ipsum porttitor eget. Quisque id lorem nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec euismod id metus vel finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ut turpis id nunc aliquam rutrum. Aenean aliquet mattis fringilla.</p>
                                        </div>
                                        <div class="d-flex justify-content-center align-items-center mt-2" role="group" aria-label="Basic mixed styles example">
                                            <button type="button" class="btn btn-success text-white mx-2">Aceptar</button>
                                            <button type="button" class="btn bg-danger text-white mx-2">Rechazar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )

}

export default Dashboard;