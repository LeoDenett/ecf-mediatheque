import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

//Components
import CardCatalogue from '../components/Accueil/CardCatalogue';
import CardCovid from '../components/Accueil/CardCovid';
import CardInfo from '../components/Accueil/CardInfo';

export default function Accueil () {
    return (
        <div className="Body">
            <Container style={{margin: 0, padding: 0, width: '180%', }}>
                <Row style={{margin: 0, padding: 0, gap: 0, gutters: 0, flexDirection: 'column'}}>
                    <Col xs={12} sm={12} className="Accueil-Covid">
                        <CardCovid/>
                    </Col>
                    <Col xs={12} sm={12} className="Accueil-Catalogue">
                        <CardCatalogue/>
                    </Col>
                </Row>
            </Container>

            <Container className="Accueil-InfoContainer">
                <Row style={{margin: 0, padding: 0, gap: 0, gutters: 0}}>
                    <Col xs={12} className="Accueil-Info">
                        <CardInfo/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}