import { faBars, faUser, faMagnifyingGlass, faUniversalAccess, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../img/cropped-logo_positivo.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { Link } from 'react-router-dom';

class Header_post extends React.Component {

    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-white border-nav-color">
                <div className="container-fluid px-5 py-3">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <FontAwesomeIcon className="color-icon-l" icon={faBars} />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <a className="navbar-brand mt-2 mt-lg-0" href="https://www.pactodeproductividad.com/">
                            <img
                                src={Logo}
                                height="60"
                                alt="Logo Pacto de Productividad"
                                loading="lazy"
                            />
                        </a>
                    </div>
                    <div>
                        <Link to="/home">
                            <button
                                className="btn btn-link ms-3 text-dark"
                                type="button"
                            >
                                <FontAwesomeIcon className="color-icon-l" icon={faHouse} size="xl" />
                            </button>
                        </Link>
                    </div>

                    <div class="input-group rounded ms-4 me-5">
                        <input type="search" class="form-control rounded" placeholder="Buscar..." aria-label="Search" aria-describedby="search-addon" />
                        <span class="input-group-text border-0" id="search-addon">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </span>
                    </div>


                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item me-2">
                            <div className="d-flex align-items-center">
                                <FontAwesomeIcon className="color-icon-l" icon={faUser} size="xl" />
                                <NavDropdown id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="/login">Iniciar sesión</NavDropdown.Item>
                                    <NavDropdown.Item href="/register">Registrarse</NavDropdown.Item>
                                </NavDropdown>
                            </div>
                        </li>
                        <li class="nav-item">
                            <div className="d-flex align-items-center space">
                                <FontAwesomeIcon className="color-icon-l" icon={faUniversalAccess} size="xl" />
                                <NavDropdown id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action4"> Ajuste del nivel de contraste</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4"> Ajuste del tamaño de la letra</NavDropdown.Item>
                                </NavDropdown>
                            </div>
                        </li>
                    </ul>

                </div>
            </nav>

        )

    }

}

export default Header_post;