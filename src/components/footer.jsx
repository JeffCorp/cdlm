import React from "react";
import { Component } from "react";


export default class MyFooter extends Component{
    render(){
        return (
            <footer className="moreInfo">
                <div className="mask">
                    <div className="container-fluid">
                        <div className="row pb-3">
                            <div className="col-md-6">
                                <div className="footerBottom pt-4 pl-2">
                                    © 2020 Casa de la musica. All rights reserved.
                                </div>
                            </div>
                            <div className="col-md-6"> 
                                <div className="footerTitle pt-4">
                                    Casa de la musica
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </footer>
        );
    }
}