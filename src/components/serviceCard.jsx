import React from "react";


export function ServiceCard(props){
    return (
        <div className="card serviceCard p-4">
            <div style={{background: `url(${props.image})`, backgroundRepeat: "no-repeat", height: "200px", backgroundSize: "contain", backgroundPosition: "center"}}></div>
            <div style={{width: "100%", textAlign: "center"}}><h4>{props.title}</h4></div>
            <div>
                {props.description}
            </div>
        </div>
    );
}