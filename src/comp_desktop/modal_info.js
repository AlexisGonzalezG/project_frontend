import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody,Row} from 'reactstrap';
import './desktop.css';

class Modal_info extends Component{

    constructor() {
        super();

        this.state ={
            empleado_info:[]
        }

    }

    consulta_empleado = () => {

        let data = {
            id_empleado:this.props.id_empleado
        }

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            };

            fetch("http://localhost:8000/api/consulta_empleado", requestOptions)
                .then(response => response.json())
                .then((response) => {

                    if(response.ok == 100){
                        this.setState({empleado_info:response.datos});
                    }
                    
                })
                .catch(e => console.log(e));

    };

    componentDidMount() {
        this.consulta_empleado(); 
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
                            <table className="table table-responsive table-striped table-bordered text-center" width={'100%'}>
                                        <thead className="table-primary">
                                            <tr>
                                                <th>Habilidad</th>
                                                <th>Calificación</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                {this.state.empleado_info?this.state.empleado_info.map((objetos) =>( 

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