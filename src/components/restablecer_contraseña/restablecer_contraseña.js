import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { isEmail } from 'validator';

import Footer from '../footer/footer';
import Header from '../header/header';


class Restablecer_pw extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      message: "",
      error: "",
    };
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleFormSubmit = () => {
    if (!isEmail(this.state.email)) {
      this.setState({ error: "Ingrese un correo electrónico válido." });
      return;
    }

    // Envía una solicitud POST al backend para restablecer la contraseña
    axios
      .post("http://localhost:8000/restablecer-pw", {
        email: this.state.email,
      })
      .then((response) => {
        this.setState({ message: response.data.message });
        window.alert("Se ha enviado una nueva contraseña a su correo electrónico.");
      })
      .catch((error) => {
        console.error(error);
        this.setState({ error: "No hemos encontrado el correo." });
      });
  };

  render() {
    return (
      <div>
        <Header />
        <main role="main" className="flex-shrink-0 mt-5 mb-5">
          <section className="">
            <div className="container h-custom">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <form>
                  <div className="mb-5">
                    <h1 className="text-center">Restablecer contraseña</h1>
                  </div>
                  <Form.Group
                    className="mb-3 text-start"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>
                      Ingrese el correo electrónico con el cual se registro:
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Ingrese un correo electrónico valido"
                      value={this.state.email}
                      onChange={this.handleEmailChange}
                    />
                    {this.state.error && (
                      <div className="mt-2 text-danger">{this.state.error}</div>
                    )}
                  </Form.Group>
                  <Button
                    variant="primary"
                    size="lg"
                    type="button"
                    active
                    onClick={this.handleFormSubmit}
                  >
                    Enviar nueva contraseña
                  </Button>
                </form>
                {this.state.message && (
                  <div className="mt-3 text-center">{this.state.message}</div>
                )}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}
export default Restablecer_pw;