/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Logo from '../../assets/img/cropped-logo_positivo.png';
import { faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../footer/footer';
import Header from '../header/header';
import axios from 'axios';

// En este ejemplo, se llama al endpoint /token para autenticar al usuario y obtener el token. 
// Luego, se extrae el token de la respuesta y se utiliza en una solicitud GET al endpoint /api/users/me. 
// El token se incluye en el encabezado Authorization con el prefijo "Bearer".


class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			token: null,
			credentials: {
				username: "",
				password: "",
			},
			showIncorrectLogin: false
		};
	  }
	componentDidMount() {
		let _token = sessionStorage.getItem("token")
		if(_token){
			this.setState({ token: _token });
			this.loginDefaultUser();
		}
	}


	loginDefaultUser (){
		axios.get('http://localhost:8000/api/user/get', {
			headers: {
				'Authorization': `Bearer ${this.state.token}`
			}
		}).then(data => {
			this.setState({
				credentials: {
					username: data.data[0].username,
					password: sessionStorage.getItem("password"),
					// password: data.data[0].password,
				}
			})
			setTimeout(()=> this.handleLoginFormSubmit(),100)
			
		})
	}

	handleFormChange = (event, id) => {
		let { value } = event.target;
		const { credentials } = { ...this.state };
	
		if (value === "" || value.ength === 0) {
		  value = null;
		}
	
		credentials[id] = value;
	
		this.setState({
		  credentials,
		  showAlert: false,
		});
	  };


	handleLoginFormSubmit() {
		const form = new FormData();
		form.append('username', this.state.credentials.username);
		form.append('password', this.state.credentials.password);
		axios
		.post('http://localhost:8000/token', form)
		.then(response => {
			const token = response.data.access_token;
			axios.get('http://localhost:8000/api/users/me', {
				headers: {
					'Authorization': `Bearer ${token}`
				}
			}).then(response => {
				if (response.status === 200) {
					const username = response.data.username;
					sessionStorage.setItem("username", username);
					sessionStorage.setItem("password", this.state.credentials.password);
					sessionStorage.setItem("token", token);
					// Update the current page's location
					window.location.href = '/home/' + username;
				}
			}).catch(error => {
				console.log("!!!!!!");
				console.log(error);
				this.setState({showIncorrectLogin: true})
			});
		}).catch(error => {
			console.log("!!!!!!");
			console.log(error);
			this.setState({showIncorrectLogin: true})
		});
	}


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
									{/* <form> */}
										<div className="d-flex flex-row align-items-center justify-content-center mb-4">
											<h3 className="">Inicio de sesión</h3>
										</div>
										<div className="form-outline mb-4">
											<label className="form-label fw-bolder d-flex justify-content-start" htmlFor="username">Usuario</label>
											<input type="username" id="username" name="username" className="form-control form-control-lg fs-6 bg-light" placeholder="Introduzca un nombre de usuario." 
											onChange={(event) =>
												this.handleFormChange(event, "username")
											  }
											/>
										</div>
										<div className="form-outline mb-3">
											<label className="form-label fw-bolder d-flex justify-content-start" htmlFor="password">Contraseña</label>
											<input type="password" id="password" name="password" className="form-control form-control-lg fs-6 bg-light" placeholder="Introduzca la contraseña."
											onChange={(event) =>
												this.handleFormChange(event, "password")
											  }
											/>
										</div>
										<div className="d-flex justify-content-between align-items-center">
											<div className="form-check mb-0">
												<input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
												<label className="form-check-label" htmlFor="form2Example3"> Recordar contraseña </label>
											</div>
										</div>
										{
											this.state.showIncorrectLogin ?
												<div class="alert alert-danger mt-3 mb-3" role="alert"> Credenciales incorrectas </div>
											:
											null
										}
										
										<div className="text-center text-lg-center mt-4 pt-2">
											<button className="btn-lg color-button" onClick={() => this.handleLoginFormSubmit()}><FontAwesomeIcon icon={faRightToBracket}/> Iniciar sesión</button>
											<div className="form-outline mb-3">
												<a href="/restablecer_contraseña" className="text-body">¿Olvidó la contraseña?</a>
											</div>
											<p className="small fw-bold mt-2 pt-1 mb-0">¿No tiene una cuenta?</p>
											<button  id="btn-login"  className="btn-lg color-button" onClick={() => window.location.href='/signup'}><FontAwesomeIcon icon={faUserPlus} /> Registrarse</button>											
										</div>
									{/* </form> */}
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