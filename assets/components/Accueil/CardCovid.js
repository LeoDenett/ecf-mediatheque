import React from 'react';
import { Card, Container} from 'react-bootstrap';

import Books from '../../images/Books.jpg'

export default function CardCovid () {
    return (
        <Container style={{justifyContent: 'center', alignItems: 'center'}} className="Mp-0">
            <Card fluid className="Card-CovidXs Mp-0">
                <Card.Img variant="top" src={Books} style={{maxHeight: "250px"}} className="Mp-0 ImageCovid"/>
                <Card.Body className="Mp-0" style={{maxHeight: "300px"}}>
                    <Card.Text style={{maxHeight: "300px", textAlign: 'center'}} className="BodyCovid">
                        Malgré la crise Covid-19, nous nous réinventons pour que vous
                        continuiez à profiter des médias de La Chapelle-Curreaux.
                        Créez votre compte et vous aurez accès à tous nos contenus numériques
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className="Card-CovidXl">
                <Card.Img src={Books} alt="Card image" style={{maxHeight: "350px", width: '100%', opacity: '0.6'}} className="Mp-0"/>
                <Card.ImgOverlay className="Card-CovidXl Mp-0">
                    <Card.Text className="Mp-0 TextCovid">
                        Malgré la crise Covid-19, nous nous réinventons pour que vous
                        continuiez à profiter des médias de La Chapelle-Curreaux.
                        Créez votre compte et vous aurez accès à tous nos contenus numériques !
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </Container>
    )
}