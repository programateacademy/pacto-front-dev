import React from 'react';
import Button from 'react-bootstrap/Button';

import Footer from '../footer/footer';
import Header from '../header/header';


class waiting_confirmation extends React.Component {
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
                    <h1 className="text-center">Te has registrado exitosamente, deberás esperar a que un administrador acepte tu registro para que puedas acceder a nuestra comunidad</h1>
                    <p className="text-center">Gracias por unirte a nuestra comunidad</p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Button
                      variant="primary"
                      size="lg"
                      type="button"
                      active
                      onClick={() => window.location.href='https://www.pactodeproductividad.com/'}
                    >
                      Volver a Inicio
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default waiting_confirmation;