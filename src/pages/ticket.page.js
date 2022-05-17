import React from 'react';

import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import Menu from '../components/menu.component';

class Ticket extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tickets: [
                { title: "Boleta 00", check: false, status: "No vendida" },
                { title: "Boleta 01", check: false, status: "No vendida" },
                { title: "Boleta 02", check: false, status: "No vendida" },
                { title: "Boleta 03", check: false, status: "No vendida" },
                { title: "Boleta 04", check: false, status: "No vendida" },
                { title: "Boleta 05", check: false, status: "No vendida" },
                { title: "Boleta 06", check: false, status: "No vendida" },
                { title: "Boleta 07", check: false, status: "No vendida" },
                { title: "Boleta 08", check: false, status: "No vendida" },
                { title: "Boleta 09", check: false, status: "No vendida" },
                { title: "Boleta 10", check: false, status: "No vendida" },
                { title: "Boleta 11", check: false, status: "No vendida" },
                { title: "Boleta 12", check: false, status: "No vendida" },
                { title: "Boleta 13", check: false, status: "No vendida" },
                { title: "Boleta 14", check: false, status: "No vendida" },
                { title: "Boleta 15", check: false, status: "No vendida" },
                { title: "Boleta 16", check: false, status: "No vendida" },
                { title: "Boleta 17", check: false, status: "No vendida" },
                { title: "Boleta 18", check: false, status: "No vendida" },
                { title: "Boleta 19", check: false, status: "No vendida" },
                { title: "Boleta 20", check: false, status: "No vendida" },
                { title: "Boleta 21", check: false, status: "No vendida" },
                { title: "Boleta 22", check: false, status: "No vendida" },
                { title: "Boleta 23", check: false, status: "No vendida" },
                { title: "Boleta 24", check: false, status: "No vendida" },
                { title: "Boleta 25", check: false, status: "No vendida" },
                { title: "Boleta 26", check: false, status: "No vendida" },
                { title: "Boleta 27", check: false, status: "No vendida" },
                { title: "Boleta 28", check: false, status: "No vendida" },
                { title: "Boleta 29", check: false, status: "No vendida" },
                { title: "Boleta 30", check: false, status: "No vendida" },
                { title: "Boleta 31", check: false, status: "No vendida" },
                { title: "Boleta 32", check: false, status: "No vendida" },
                { title: "Boleta 33", check: false, status: "No vendida" },
                { title: "Boleta 34", check: false, status: "No vendida" },
                { title: "Boleta 35", check: false, status: "No vendida" },
                { title: "Boleta 36", check: false, status: "No vendida" },
                { title: "Boleta 37", check: false, status: "No vendida" },
                { title: "Boleta 38", check: false, status: "No vendida" },
                { title: "Boleta 39", check: false, status: "No vendida" },
                { title: "Boleta 40", check: false, status: "No vendida" },
                { title: "Boleta 41", check: false, status: "No vendida" },
                { title: "Boleta 42", check: false, status: "No vendida" },
                { title: "Boleta 43", check: false, status: "No vendida" },
                { title: "Boleta 44", check: false, status: "No vendida" },
                { title: "Boleta 45", check: false, status: "No vendida" },
                { title: "Boleta 46", check: false, status: "No vendida" },
                { title: "Boleta 47", check: false, status: "No vendida" },
                { title: "Boleta 48", check: false, status: "No vendida" },
                { title: "Boleta 49", check: false, status: "No vendida" },
                { title: "Boleta 50", check: false, status: "No vendida" },
                { title: "Boleta 51", check: false, status: "No vendida" },
                { title: "Boleta 52", check: false, status: "No vendida" },
                { title: "Boleta 53", check: false, status: "No vendida" },
                { title: "Boleta 54", check: false, status: "No vendida" },
                { title: "Boleta 55", check: false, status: "No vendida" },
                { title: "Boleta 56", check: false, status: "No vendida" },
                { title: "Boleta 57", check: false, status: "No vendida" },
                { title: "Boleta 58", check: false, status: "No vendida" },
                { title: "Boleta 59", check: false, status: "No vendida" },
                { title: "Boleta 60", check: false, status: "No vendida" },
                { title: "Boleta 61", check: false, status: "No vendida" },
                { title: "Boleta 62", check: false, status: "No vendida" },
                { title: "Boleta 63", check: false, status: "No vendida" },
                { title: "Boleta 64", check: false, status: "No vendida" },
                { title: "Boleta 65", check: false, status: "No vendida" },
                { title: "Boleta 66", check: false, status: "No vendida" },
                { title: "Boleta 67", check: false, status: "No vendida" },
                { title: "Boleta 68", check: false, status: "No vendida" },
                { title: "Boleta 69", check: false, status: "No vendida" },
                { title: "Boleta 70", check: false, status: "No vendida" },
                { title: "Boleta 71", check: false, status: "No vendida" },
                { title: "Boleta 72", check: false, status: "No vendida" },
                { title: "Boleta 73", check: false, status: "No vendida" },
                { title: "Boleta 74", check: false, status: "No vendida" },
                { title: "Boleta 75", check: false, status: "No vendida" },
                { title: "Boleta 76", check: false, status: "No vendida" },
                { title: "Boleta 77", check: false, status: "No vendida" },
                { title: "Boleta 78", check: false, status: "No vendida" },
                { title: "Boleta 79", check: false, status: "No vendida" },
                { title: "Boleta 80", check: false, status: "No vendida" },
                { title: "Boleta 81", check: false, status: "No vendida" },
                { title: "Boleta 82", check: false, status: "No vendida" },
                { title: "Boleta 83", check: false, status: "No vendida" },
                { title: "Boleta 84", check: false, status: "No vendida" },
                { title: "Boleta 85", check: false, status: "No vendida" },
                { title: "Boleta 86", check: false, status: "No vendida" },
                { title: "Boleta 87", check: false, status: "No vendida" },
                { title: "Boleta 88", check: false, status: "No vendida" },
                { title: "Boleta 89", check: false, status: "No vendida" },
                { title: "Boleta 90", check: false, status: "No vendida" },
                { title: "Boleta 91", check: false, status: "No vendida" },
                { title: "Boleta 92", check: false, status: "No vendida" },
                { title: "Boleta 93", check: false, status: "No vendida" },
                { title: "Boleta 94", check: false, status: "No vendida" },
                { title: "Boleta 95", check: false, status: "No vendida" },
                { title: "Boleta 96", check: false, status: "No vendida" },
                { title: "Boleta 97", check: false, status: "No vendida" },
                { title: "Boleta 98", check: false, status: "No vendida" },
                { title: "Boleta 99", check: false, status: "No vendida" }
            ]
        };

        this.onLoadData();
    }

    onLoadData(){
        let state = this.state;
        if (localStorage.getItem('tickets') !== null)
            state.tickets = JSON.parse(localStorage.getItem('tickets'));
        this.setState(this.state);
    }

    handleForm(event){ 
        event.preventDefault();
      
        localStorage.removeItem('tickets');
        window.location.reload();
    }

    onDeleteTicket(){
        let tickets = this.state.tickets;
        let newTickets = [];

        tickets.forEach( (ticket) => {
            if (ticket.status === "No vendida")
                newTickets.push(ticket);
        });
        localStorage.setItem('tickets', JSON.stringify(newTickets));
        window.location.reload();
    }

    render () {
        return (
            <>
                <Menu />
                <Form onSubmit={ this.handleForm.bind(this) }>
                    <Row>
                        <Col sm={4} className="container-btns">
                            <Link to="/">
                                <Button className="px-5 style-button btn-on">
                                    Ir a vender boletas
                                </Button>
                            </Link>
                            <Button className="mt-4 px-5 style-button btn-util" onClick={ this.onDeleteTicket.bind(this) }>
                                Borrar boletas vendidas
                            </Button>
                            <Button className="mt-4 px-5 style-button btn-util" type="submit">
                                Reiniciar
                            </Button>
                        </Col>
                        <Col sm={8} className="container-tickets overflow-auto">
                            {
                                this.state.tickets.map((ticket) =>
                                    <CardGroup className="container-cardgroup">
                                        <Card className="style-card">
                                            <Card.Body>
                                                <h5>{ ticket.title }</h5>
                                            </Card.Body>
                                        </Card>
                                        <div className="container-badge ms-3">
                                            { 
                                                (ticket.status === "Vendida") ?
                                                    <span className="badge rounded-pill back-success">
                                                        { ticket.status }
                                                    </span>
                                                : 
                                                    <span className="badge rounded-pill back-danger">
                                                        { ticket.status }
                                                    </span>
                                            }
                                        </div>
                                    </CardGroup>
                                    
                                )
                            }
                        </Col>
                    </Row>
                </Form>
            </>
        );
    }
};

export default Ticket;