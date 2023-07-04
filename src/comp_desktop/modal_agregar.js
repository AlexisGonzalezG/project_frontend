import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody,Row} from 'reactstrap';
import './desktop.css';
import ReactDOM from 'react-dom'
import Swal from 'sweetalert2';

class Modal_agregar extends Component{

    constructor() {
        super();

        this.state ={
            habs:[],
            califs:[]
        }
    }

    agregarFila = () => {
        var hab = document.getElementById("habilidad").value;
        this.state.habs.push(hab); 
        this.setState({habs:this.state.habs});

        var calif = document.getElementById("calificacion").value;
        this.state.califs.push(calif); 
        this.setState({califs:this.state.califs});

        document.getElementById("habilidad").value = "";
    };

    agrega_empleado = () => {

        var nombre_empleado = document.getElementById("nombre_empleado").value;
        var correo_empleado = document.getElementById("correo_empleado").value;
        var puesto_empleado = document.getElementById("puesto_empleado").value;
        var nacimiento_empleado = document.getElementById("nacimiento_empleado").value;
        var domicilio_empleado = document.getElementById("domicilio_empleado").value;

        if( !nombre_empleado || !correo_empleado || !puesto_empleado || !nacimiento_empleado || !domicilio_empleado){
            Swal.fire("Error", "Llene todos los campos para continuar", "warning");
            return false;
        }

        let data = {
            nombre: nombre_empleado,
            correo: correo_empleado,
            puesto: puesto_empleado,
            nacimiento: nacimiento_empleado,
            domicilio: domicilio_empleado,
            habilidades: this.state.habs,
            calificaciones: this.state.califs
        }

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            };

            fetch("http://localhost:8000/api/nuevo_empleado", requestOptions)
                .then(response => response.json())
                .then((response) => {

                    if(response.ok == 100){

                        this.props.cierra();
                        this.props.consulta_empleados();

                        Swal.fire(
                            'Éxito',
                            'Se agregó empleado exitosamente',
                            'success'
                        );
                    }
                    
                })
                .catch(e => console.log(e));

    };

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
                             <label>Ingrese nombre</label>
                             <input className='form-control text-center' type='text' id='nombre_empleado' />
                            </div>
                            <div className='col-sm-12 col-12 text-center' style={{ padding:'5px' }}>
                             <label>Ingrese correo</label>
                             <input className='form-control text-center' type='text' id='correo_empleado' />
                            </div>
                            <div className='col-sm-12 col-12 text-center' style={{ padding:'5px' }}>
                             <label>Ingrese puesto</label>
                             <input className='form-control text-center' type='text' id='puesto_empleado' />
                            </div>
                            <div className='col-sm-12 col-12 text-center' style={{ padding:'5px' }}>
                             <label>Ingrese fecha de nacimiento</label>
                             <input className='form-control text-center' type='date' id='nacimiento_empleado' />
                            </div>
                            <div className='col-sm-12 col-12 text-center' style={{ padding:'5px' }}>
                             <label>Ingrese domicilio</label>
                             <input className='form-control text-center' type='text' id='domicilio_empleado' />
                            </div>
                            <div className='col-sm-12 col-12 text-center' style={{ padding:'5px' }}>
                                <br/>
                            </div>
                            <div className='col-sm-6 col-12 text-center' style={{ padding:'5px' }}>
                             <label>Habilidad</label>
                             <input className='form-control text-center' type='text' id='habilidad' />
                            </div>
                            <div className='col-sm-6 col-12 text-center' style={{ padding:'5px' }}>
                             <label>Calificación</label>
                             <select className='form-control text-center' id='calificacion'>
                              <option value={0}>Seleccione...</option>
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                             </select>
                            </div>
                            <div className='col-sm-12 col-12 text-center' style={{ padding:'5px' }}>
                                <button type="button" class="btn btn-secondary" onClick={this.agregarFila.bind(this)}>+</button>
                            </div>
                            <div className='col-sm-6 col-6 text-center' style={{ padding:'5px' }}>
                              <table className='table table-responsive table-striped table-bordered text-center'>
                                <thead className="table-primary">
                                    <tr>
                                     <th>Habilidades</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.habs?this.state.habs.map((hobjetos) =>( 
                                        <tr>
                                            <td className="border">{ hobjetos }</td>
                                        </tr>
                                        
                                    ))
                                    : 
                                    ""
                                    }
                                </tbody>
                              </table>
                            </div>
                            <div className='col-sm-6 col-6 text-center' style={{ padding:'5px' }}>
                              <table className='table table-responsive table-striped table-bordered text-center'>
                                <thead className="table-primary">
                                    <tr>
                                     <th>Calificación</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.califs?this.state.califs.map((cobjetos) =>( 
                                        <tr>
                                            <td className="border" >{ cobjetos }</td>
                                        </tr>                                    
                                    ))
                                    : 
                                    ""
                                    }
                                </tbody>
                              </table>
                            </div>
                            <div className='col-sm-12 col-12 text-center' style={{ padding:'5px' }}>
                             <button className='btn btn-secondary' onClick={this.agrega_empleado.bind(this)} >Agregar empleado</button>
                            </div>
                          </Row>
                        </ModalBody>
                </Modal>    
            </div>
        );
    }    
}

export default Modal_agregar