import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody,Row} from 'reactstrap';
import './desktop.css';
import Swal from 'sweetalert2';


class Modal_habilidad extends Component{

    constructor() {
        super();

        this.state ={
            empleado_info:[]
        }

    }

    agrega_habilidad = () => {

        var nombre = document.getElementById("habilidad").value;
        var calificacion = document.getElementById("calificacion").value;

        if( !nombre || !calificacion || calificacion == 0 ){
            Swal.fire("Error", "Llene todos los campos para continuar", "warning");
            return false;
        }

        let data = {
            nombre:nombre,
            calificacion:document.getElementById("calificacion").value,
            id_empleado:this.props.id_empleado
        }

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            };

            fetch("http://localhost:8000/api/nueva_habilidad", requestOptions)
                .then(response => response.json())
                .then((response) => {

                    if(response.ok == 100){

                        Swal.fire(
                            'Éxito',
                            'Se agregó habilidad exitosamente',
                            'success'
                        );

                        this.props.cierra();
                        this.props.consulta_empleado();
                    }
                    
                })
                .catch(e => console.log(e));

    };   

    render(){
        
        return(
            <div>
                <Modal className='modal-sm' isOpen={true}>
                    <ModalHeader toggle={this.props.cierra}>
                        Nueva habilidad
                    </ModalHeader>
                        <ModalBody>
                          <Row>
                            <div className='col-sm-12 col-12 text-center'>
                             <label>Nombre de la habilidad:</label>
                             <input type='text' className='form-control text-center' id='habilidad' />
                            </div>
                            <div className='col-sm-12 col-12 text-center'>
                             <label>Calificación:</label>
                             <select className='form-control text-center' id='calificacion'>
                              <option value={0}>Seleccione...</option>
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                             </select>
                            </div>
                            <div className='col-sm-12 col-12 text-center'>
                             <br/>
                             <button type='button' className='btn btn-secondary' onClick={this.agrega_habilidad.bind(this)} >Agregar</button>
                            </div>
                          </Row>
                        </ModalBody>
                </Modal>    
            </div>
        );
    }    
}

export default Modal_habilidad