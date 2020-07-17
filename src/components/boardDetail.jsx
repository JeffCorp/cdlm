import React from "react";
import { Col } from "reactstrap";


export default function BoardDetail(props){
    return (
        <Col md={4} className="" style={{background: `url(${props.url})`,
        height: "200px",
        backgroundSize: "cover",
        backgroundPosition: "center"}} >
            <div>

            </div>
            <div className="boardFoot">
                <div>{props.name}</div>
            </div>
            <div style={{textAlign: "center"}}>
                {props.position}
            </div>
        </Col>
    );
}