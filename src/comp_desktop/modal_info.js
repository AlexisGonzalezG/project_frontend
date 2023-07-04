import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody,Row} from 'reactstrap';
import './desktop.css';

class Modal_info extends Component{

    constructor() {
        super();

        this.state ={
        }

    }

    componentDidMount() {
        this.props.consulta_empleado(); 
    };

    render(){
        
        return(
            <div>
                <Modal className='modal-lg' isOpen={true}>
                    <ModalHeader toggle={this.props.cierra}>
                        Habilidades
                    </ModalHeader>
                        <ModalBody>
                          <Row>
                            <div className='col-sm-12'>
                            <button type="button" className="btn btn-link" onClick={this.props.showModalHabilidad.bind(this)}>Agregar habilidad +</button>
                            <table className="table table-responsive table-striped table-bordered text-center" width={'100%'}>
                                        <thead className="table-primary">
                                            <tr>
                                                <th>Habilidad</th>
                                                <th>Calificación</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                {this.props.empleado_info?this.props.empleado_info.map((objetos) =>( 

                                        <tr>
                                        <td className="border" style={{ minWidth:'300px' }}>{ objetos.nombre_habilidad }</td>
                                        <td className="border" style={{ minWidth:'300px' }}>{ objetos.calificacion }</td>
                                        </tr>

                                    ))
                                    : 
                                    ""
                                }
                                </tbody>
                             </table> 
                            </div>
                            
                          </Row>
                        </ModalBody>
                </Modal>    
            </div>
        );
    }    
}

export default Modal_info