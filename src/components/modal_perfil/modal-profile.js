import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Editar_perfil from '../editar_perfil/editar_perfil';

const ModalLogin = ({ show, handleClose, usuario }) => {


    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Actualizar perfil</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Editar_perfil usuario={usuario}/>
            </Modal.Body>

        </Modal>
    );
};

export default ModalLogin;
