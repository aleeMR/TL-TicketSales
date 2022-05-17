import React from 'react';

import Row from 'react-bootstrap/Row';

class Menu extends React.Component{
    render(){
        return(
            <Row className="container-navbar navbar-expand-lg navbar-dark bg-dark">
                <img src="/logo.png" className="logo" alt="logo" />
                <span>VENTA DE BOLETAS</span>
            </Row> 
        );
    }
}

export default Menu;

