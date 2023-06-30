import React, { Component } from "react";
import "./desktop.css";
import Modal_agregar from "./modal_agregar";
import Modal_info from "./modal_info";

class Secc_main extends Component {

    constructor() {
        super();

        this.state = {
            empleados:[],
            empleado_info:[],
            Modal_agregar:false,
            Modal_info:false,
            id_empleado:""
        };
    }

    consulta_empleados = () => {

        let data = {
        }

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            };

            fetch("http://localhost:8000/api/consulta_empleados", requestOptions)
                .then(response => response.json())
                .then((response) => {

                    console.log(response)

                    if(response.ok == 100){
                        this.setState({empleados:response.datos});
                    }
                    
                })
                .catch(e => console.log(e));

    };

    showModalAgregar=() => {
        this.setState({Modal_agregar:true});
    };

    cierra_agregar = () => {
        this.setState({Modal_agregar:false});
    };

    showModalinfo=(id_empleado) => {
        this.setState({Modal_info:true});
        this.setState({id_empleado:id_empleado});
    };

    cierra_info = () => {
        this.setState({Modal_info:false});
    };

    componentDidMount() {
        this.consulta_empleados(); 
    };

    render() {

        return (
            <div>
                    <div className="row">
                        <div className="col-sm-12 col-12">
                        <button type="button" className="btn btn-link" onClick={this.showModalAgregar.bind(this)}>Nuevo empleado +</button>
                            <table className="table table-striped table-bordered" > 
                                        <thead className="table-primary">
                                            <tr>
                                                <th>Nombre empleado</th>
                                                <th>Correo</th>
                                                <th>Puesto</th>
                                                <th>Fecha de nacimiento</th>
                                                <th>Domicilio</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {this.state.empleados?this.state.empleados.map((objetos) =>( 

                                            <tr>
                                                <td className="border" style={{ minWidth:'300px' }}>{ objetos.nombre }</td>
                                                <td className="border" style={{ minWidth:'300px' }}>{ objetos.correo }</td>
                                                <td className="border" style={{ minWidth:'300px' }}>{ objetos.puesto }</td>
                                                <td className="border" style={{ minWidth:'300px' }}>{ objetos.nacimiento }</td>
                                                <td className="border" style={{ minWidth:'300px' }}>{ objetos.domicilio }</td>
                                                <td><button type="button" className="btn btn-link" onClick={this.showModalinfo.bind( this, objetos.id )}>Ver habilidades</button></td>
                                            </tr>

                                            ))
                                            : 
                                            <tr>
                                                <td colSpan={3} className="bg-light text-center">No se encontraron registros</td>
                                            </tr>
                                            }
                                        </tbody>
                            </table>  

                        </div>                             
                    </div>

                    {
                    this.state.Modal_agregar === true?
                        <Modal_agregar cierra = {this.cierra_agregar}/>
                    :''
                    }
                    {
                    this.state.Modal_info === true?
                        <Modal_info cierra = {this.cierra_info} id_empleado = {this.state.id_empleado}/>
                    :''
                    }
            </div>
        );
    }
}
export default Secc_main;