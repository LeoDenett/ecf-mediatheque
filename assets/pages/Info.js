import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

export default function Info () {
    return (
        <div className="Body">
            <Container className="Center">
                <Row>
                    <Col xs={12}><h1 className="Info-Title" style={{textAlign: 'center', fontSize: '34px', marginBottom: '25px'}}>QUESTIONS FREQUENTES</h1></Col>
                    <Col xs={12}>
                        <h5 className="Info-Title">Comment avoir accès à la médiathèque en ligne ?</h5>
                        <p className="Info-P">
                            L’accès à la médiathèque est réservée aux inscrits.
                            Pour s’inscrire, rien de plus simple : rendez-vous dans l’onglet “Mon Profil”, où il vous devrez rentrer vos données personnelles.
                            A la médiathèque, nous recevons alors une notification de votre inscription,
                            nous la validons et vous pourrez profiter immédiatement profiter du service en ligne.
                        </p>
                    </Col>
                    <Col xs={12}>
                        <h5 className="Info-Title">Comment savoir quel livre est disponible ?</h5>
                        <p className="Info-P">
                            Les livres disponibles sont en couleur bleue, avec le petit livre vert<br/>
                            Les livres déjà empuntés sont en couleur noire et barrée, avec le petit livre rouge
                        </p>
                    </Col>
                    <Col xs={12}>
                        <h5 className="Info-Title">Comment emprunter un livre ?</h5>
                        <p className="Info-P">
                            Si le livre est disponible, et que vous souhaitez l’emprunter, cliquez sur le livre désiré.
                            Vous arrivez alors sur la page de description. En bas à droite de cette page, appuyez sur le livre vert   ICON   pour le mettre de côté.<br/>
                            Vous avez 3 jours pour venir le récupérer à la médiathèque. Sinon,
                            l’emprunt sera considéré comme annulé et le livre sera de nouveau disponible dans le catalogue.
                        </p>
                    </Col>
                    <Col xs={12}>
                        <h5 className="Info-Title">Comment rendre un livre ?</h5>
                        <p className="Info-P">
                            Tous les retours des livres empruntés se font directement à la médiathèque,
                            pour que nous puissions enregistrer le retour du livre et le remettre à disponisition des lecteurs.
                        </p>
                    </Col>
                    <Col xs={12}>
                        <h5 className="Info-Title">Plus d’infos ?</h5>
                        <p className="Info-P">
                            N’hésitez pas à nous appeler, nous envoyer un mail ou profiter de vos visites à la médiathèque pour poser toutes vos questions.
                            Nos équipes sont à votre disposition.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}