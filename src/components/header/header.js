import { faBars,  faUser, faMagnifyingGlass, faUniversalAccess } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../img/cropped-logo_positivo.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';

class Header extends React.Component {

    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-white border-nav-color">
            <div className="container px-5 py-3">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <a className="navbar-brand mt-2 mt-lg-0" href="#">
                        <img
                            src={Logo}
                            height="60"
                            alt="Logo Pacto de Productividad"
                            loading="lazy"
                        />
                    </a>

                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <a className="nav-link text-color-header text-decoration-none" href='https://www.pactodeproductividad.com/'>Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-color-header text-decoration-none" href='https://www.pactodeproductividad.com/2022/11/01/sobre-nosotros/'>Sobre nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-color-header text-decoration-none" href='https://www.pactodeproductividad.com/2022/12/26/modelo-territorial/'>Modelo Territorial</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-color-header text-decoration-none" href='https://www.pactodeproductividad.com/2022/11/01/que-hacemos/'>Lo que hacemos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-color-header text-decoration-none" href='https://www.pactodeproductividad.com/2022/11/01/conocimiento/'>Conocimiento</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-color-header text-decoration-none" href='https://www.pactodeproductividad.com/2022/11/01/escuela-virtual/'>Escuela Virtual</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-color-header text-decoration-none" href='https://www.pactodeproductividad.com/contacto/'>Contacto</a>
                        </li>


                    </ul>
                </div>

                <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faUser} />
                    <NavDropdown  id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/">Iniciar sesión</NavDropdown.Item>
                        <NavDropdown.Item href="/signup">Registrarse</NavDropdown.Item>
                    </NavDropdown>
                </div>

                <div className="d-flex align-items-center space">
                     <FontAwesomeIcon icon={faUniversalAccess} />
                    <NavDropdown  id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action4"> Ajuste del nivel de contraste</NavDropdown.Item>
                        <NavDropdown.Item href="#action4"> Ajuste del tamaño de la letra</NavDropdown.Item>
                    </NavDropdown>
                </div>
            </div>         
        </nav>
        
        )

    }

}

export default Header;