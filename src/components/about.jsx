import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import BoardDetail from "./boardDetail";


export default class About extends Component{
    render() {
        return (
        <>
            {/* <div className="container-fluid" style={{background: "url(https://images.pexels.com/photos/210764/pexels-photo-210764.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "200px", backgroundPosition: "center"}}>
                <Row>
                    <Col md={12} style={{background: "#000000dd", height: "200px"}}>
                        <div style={{fontSize: "3em", marginTop: "100px", color: "white"}}>About</div>
                    </Col>
                </Row>
            </div> */}
            <Container style={{minHeight: "100vh"}}>
                <Row>
                    <Col>
                        <div className="aboutHead">
                            About Us
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} style={{fontSize: "1.5em", marginTop: "10px"}}>
                        House of music is a group of musical enthusiasts with the aim of bringing appropriate music to the mind of every human person. 
                        We are a group of individuals with years of experience in the formation of choirs ranging from churches to schools and private individuals.
                    </Col>
                    <Col md={8}>
                        {/* DevCenter */}
                        <Row>
                            <BoardDetail 
                                name="Harrison Obi"
                                position="Team Lead"
                                url="https://images.pexels.com/photos/3984802/pexels-photo-3984802.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            />
                            <BoardDetail 
                                name="Ukutegbe Jeffrey"
                                position="Board Member"
                                url="../../assets/jeff.jpeg"
                            />
                            <BoardDetail 
                                name="Gabriel Friday Achanya"
                                position="Board Member"
                                url="../../assets/gab.jpeg"
                            />
                        </Row>
                        <Row style={{marginTop: "100px"}}>
                            <BoardDetail 
                                name="Okemini Joel"
                                position="Board Member"
                                url="https://images.pexels.com/photos/3984802/pexels-photo-3984802.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            />
                            <BoardDetail 
                                name="Martin Onyekaba"
                                position="Secretary"
                                url="../../assets/martin.jpg"
                            />
                            <BoardDetail 
                                name="Umeh Valentine"
                                position="Media / Publicity Head"
                                url="../../assets/val.jpeg"
                            />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
        );
    }
}