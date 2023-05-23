import React, { useState, useEffect } from 'react';
import Logo from '../img/cropped-logo_positivo.png';
import { faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import axios from 'axios';

function handleLoginFormSubmit(event) {
	event.preventDefault();
	const form = event.target;
	const form_data = new FormData(form);

	axios
		.post('http://localhost:8000/token',
			form_data
		)
		.then(response => {
			const token = response.data.access_token;
			axios.get('http://localhost:8000/api/users/me', {
				headers: {
					'Authorization': `Bearer ${token}`
				}
			}).then(response => {
				if (response.status === 200) {
					const username = response.data.username;
					// Update the current page's location
					window.location.href = '/home/' + username;
				}
				console.log(response);
			}).catch(error => {
				console.log(error);
			});
		})
}
// En este ejemplo, se llama al endpoint /token para autenticar al usuario y obtener el token. 
// Luego, se extrae el token de la respuesta y se utiliza en una solicitud GET al endpoint /api/users/me. 
// El token se incluye en el encabezado Authorization con el prefijo "Bearer".


class Login extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<main role="main" className="flex-shrink-0 mt-5 mb-5">
					<section className="">
						<div className="container h-custom">
							<div className="row d-flex justify-content-center align-items-center h-100">
								<div className="col-md-9 col-lg-6 col-xl-5">
									<img src={Logo} className="img-fluid" alt="Sample image" />
								</div>
								<div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
									<form onSubmit={handleLoginFormSubmit}>
										<div className="d-flex flex-row align-items-center justify-content-center mb-4">
											<h3 className="">Inicio de sesión</h3>
										</div>
										<div className="form-outline mb-4">
											<label className="form-label fw-bolder d-flex justify-content-start" for="username">Usuario</label>
											<input type="username" id="username" name="username" className="form-control form-control-lg fs-6 bg-light" placeholder="Introduzca un nombre de usuario." />
										</div>
										<div className="form-outline mb-3">
											<label className="form-label fw-bolder d-flex justify-content-start" for="password">Contraseña</label>
											<input type="password" id="password" name="password" className="form-control form-control-lg fs-6 bg-light" placeholder="Introduzca la contraseña." />
										</div>
										<div className="d-flex justify-content-between align-items-center">
											<div className="form-check mb-0">
												<input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
												<label className="form-check-label" for="form2Example3"> Recordar contraseña </label>
											</div>
										</div>
										<div className="text-center text-lg-center mt-4 pt-2">
											<button type="submit" className="btn-lg color-button" git ><FontAwesomeIcon icon={faRightToBracket} /> Iniciar sesión</button>
											<div className="form-outline mb-3">
												<a href="/restablecer_contraseña" className="text-body">¿Olvidó la contraseña?</a>
											</div>
											<p className="small fw-bold mt-2 pt-1 mb-0">¿No tiene una cuenta?</p>
											<button type="button" id="btn-login"  className="btn-lg color-button" onClick={() => window.location.href='/signup'}><FontAwesomeIcon icon={faUserPlus} /> Registrarse</button>											
										</div>
									</form>
								</div>
							</div>
						</div>
					</section>
				</main>
				<Footer />
			</div>
		)
	}
}
export default Login;