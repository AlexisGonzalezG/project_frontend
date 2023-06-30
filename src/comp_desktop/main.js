import React, { Component } from "react";
import Secc_main from "./secc_main";

class MainDesktop extends Component {

    constructor() {
        super();

        this.state = {
            cursecc: "main"
        };

    }

    cambiaSeccion = (sec,) => {
        this.setState({ cursecc: sec });
    };

    componentDidMount() {
    };

    render() {


        return (
            <div>
                {/* ------------------------------- SECCIONES -------------------------------------*/}
                 <div className="container-fluid">
                    <br/><br/><br/>
                    {
                    this.state.cursecc === "main" ? 
                        <Secc_main cambiaSeccion = {this.cambiaSeccion} />
                     : 
                     ""
                    }
                 </div>
            </div>
        );
    }
}
export default MainDesktop;