import React from "react";
import { Component } from "react";

export default function MusicTile(props) {
        return (
            <div className="container-fluid card" onClick={props.onClick} key={props.key} style={props.style, {borderRadius: "80px", marginTop: "20px"}}>
                <div className="row">
                    <div className="col-md-4 pl-4" style={{height: "auto", width: "50px", background: `url(${props.pic})`, backgroundRepeat: "no-repeat", backgroundPosition: "left", backgroundSize: "cover", borderRadius: "80px 80px 0 "}}></div>
                    <div className="col-md-4 p-3">
                        <h5 style={{color: "#6e60d0", fontWeight: "bold"}}>{props.title}</h5>
                        <h6>{props.composer}</h6>
                    </div>
                    <div className="col-md-4 align-content-right">
                        <div className="card pill ml-5 mt-3">{props.files}</div>
                    </div>
                </div>
                
                
            </div>
        );
    
}