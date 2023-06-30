import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody,Row} from 'reactstrap';
import './desktop.css';
import Swal from 'sweetalert2';

class Modal_agregar extends Component{

    constructor() {
        super();

        this.state ={
        }

    }
    render(){
        
        return(
            <div>
                <Modal className='modal-dialog' isOpen={true}>
                    <ModalHeader toggle={this.props.cierra}>
                        Agregar empleado
                    </ModalHeader>
                        <ModalBody>
                          <Row>
                            <div className='col-sm-12 col-12 text-center' style={{ padding:'5px' }}>
                                <input className='form-control text-center' type='text' placeholder='Ingrese nombre'/>
                                <br/>
                                <input className='form-control text-center' type='text' placeholder='Ingrese correo'/>
                                <br/>
                                <input className='form-control text-center' type='text' placeholder='Ingrese puesto'/>
                                <br/>
                                <input className='form-control text-center' type='date' placeholder='Ingrese fecha de nacimiento'/>
                                <br/>
                              <button className='btn btn-primary text-light fw-bold' >Agregar empleado</button>
                            </div>
                          </Row>
                        </ModalBody>
                </Modal>    
            </div>
        );
    }    
}

export default Modal_agregar