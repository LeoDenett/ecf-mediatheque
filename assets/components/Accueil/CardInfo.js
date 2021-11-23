import React, {useState} from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CardInfo() {
    return (
        <Container className="Mp-0">
            <Container className="Info-Containers Mp-0">
                <h6 className="Titles-Info">Horaires d'ouverture</h6>
                <p className= "Paragraph-Info">
                    Lundi: 13h-17h <br/>
                    Mercredi: 9h-12h & 13h30-18h <br/>
                    Vendredi: 15h-18h <br/>
                    Samedi: 9h-12h <br/>& 13h30-17h
                </p>
            </Container>
            <Container className="Info-Containers Mp-0">
                <h6 className="Titles-Info">Contact</h6>
                <h6>La Chapelle-Curreaux</h6>
                <p className= "Paragraph-Info">
                    5 rue de la Médiathèque <br/>
                    29999 La Chapelle-Curreaux <br/>
                    tel: 0763577577 <br/>
                    chapelle@example.com
                </p>
            </Container>
            <Container className="Info-Containers Mp-0">
                <h6 className="Titles-Info">Avez-vous un compte?</h6>
                <p className= "Paragraph-Info">
                    Connectez-vous <br/>
                    ou <br/> créez
                    vote compte <a href="https://localhost:8000/login" style={{fontWeight: 'bold', color: 'inherit', textDecoration: 'none'}}>Ici</a>
                </p>
            </Container>
        </Container>
    )
}