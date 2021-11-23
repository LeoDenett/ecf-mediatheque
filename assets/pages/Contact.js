import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ContactImg from '../images/ContactImg.jpeg';

export default function Contact () {
    return (
        <div className="BodyContact">
            <Container fluid className="Mp-0">
                <Row className="Mp-0">
                    <Col className="Mp-0">
                        <Card className="ContactXs Center">
                            <Card.Img variant="top" src={ContactImg} />
                            <Card.Body className="Mp-0" style={{padding: '5px'}}>
                                <Card.Title style={{textAlign: 'center'}}>Nos équipes se tiennent à votre disposition pour la moindre question.
                                    N’hésitez pas à nous solliciter !<br/><br/>
                                </Card.Title>
                                <Card.Text style={{textAlign: 'center'}}>
                                    <span className="Bolder">Téléphone:</span> 0712121212<br/><br/>
                                    <span className="Bolder">Mail:</span> chapelle@example.com<br/><br/>
                                    <span className="Bolder">Adresse:</span>
                                    5 rue de la Médiathèque 29999<br/><br/>
                                    <span className="Bolder">La Chapelle-Curreaux</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card className="ContactXl Center">
                            <Card.Img src={ContactImg} alt="Card image" className="Mp-0 Contact-Img" />
                            <Card.ImgOverlay className="Mp-0">
                                <Card.Title className="Contact-Title">Nos équipes se tiennent à votre disposition pour la moindre question.
                                    N’hésitez pas à nous solliciter !
                                </Card.Title>
                                <Card.Text className="Contact-P">
                                    <span className="Bolder">Téléphone:</span> 0712121212<br/><br/>
                                    <span className="Bolder">Mail:</span> chapelle@example.com<br/><br/>
                                    <span className="Bolder">Adresse:</span>
                                    5 rue de la Médiathèque 29999<br/><br/>
                                    <span className="Bolder">La Chapelle-Curreaux</span>
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}