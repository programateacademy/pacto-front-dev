/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-unused-vars */
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Edit_profile from '../edit_profile/edit_profile';

const ModalLogin = ({ show, handleClose, usuario }) => {


    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Actualizar perfil</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Edit_profile usuario={usuario}/>
            </Modal.Body>

        </Modal>
    );
};

export default ModalLogin;
