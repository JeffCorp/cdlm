import React from "react";
import { Component } from "react";
import { Row, Col, Card } from "reactstrap";

export default function ArchiveDetail(props) {
        return (
            <div className=" container-fluid pt-4" key={props.key} style={props.style}>
                <Row>
                    <div className="col-md-12" style={{background: `url(${props.pic})`, backgroundSize: "cover", backgroundPosition:"center", backgroundRepeat: "no-repeat", height: "400px"}}></div>
                </Row>
                <Row>
                    <Col className="col-md-12 mx-auto p-2 text-center">
                        <h5>{props.title}</h5>
                        <h6>{props.composer}</h6>
                    </Col>
                    <Col className="col-md-12">
                        <h6 align="right">Files {props.files}</h6>
                    </Col>
                </Row>              
                <Row className="mt-3">
                    <Col md={12}>
                        <ul className="list-unstyled list-inline d-flex justify-content-center mb-0">
                            <li className="list-inline-item mr-0 mt-2 myControls">
                                <Card style={{width: "50px", minHeight: "50px", padding: "10px", textAlign: "center", borderRadius: "50%", display: "in-line"}}>
                                    {/* <audio controls>
                                        <source src={`http://scorenshare.com/${props.music}`} type="audio/mpeg"/>
                                    </audio> */}
                                    <i className="fas fa-volume-down fa-2x" id="down"></i>
                                </Card>
                            </li>
                            <li className="list-inline-item mr-4 ml-4 myControls">
                                <Card className="pt-3 pl-3" style={{width: "100px", minHeight: "100px", textAlign: "center", borderRadius: "50%", display: "in-line"}}>
                                    <i className="fas fa-play fa-4x"></i>
                                </Card>
                            </li>
                            <li className="list-inline-item mr-0 mt-2 myControls">
                                <Card style={{width: "60px", minHeight: "50px", padding: "10px", textAlign: "center", borderRadius: "50%", display: "in-line"}}>
                                    <i className="fas fa-volume-up fa-2x"></i>
                                </Card>
                            </li>
                        </ul>
                    </Col>
                    {/* <Col md={12} className="mt-3">
                        <Card>
                            <h2>{props.files}</h2>
                        </Card>
                    </Col> */}
                </Row>
                <Row>
                    <Col md={12}>

                    </Col>
                </Row>
            </div>
        );
    
}