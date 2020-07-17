import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import MusicTile from "./musicTile";
import ArchiveDetail from "./archiveDetail";
import Scrollbars from "react-custom-scrollbars";


export default class Archive extends Component{
    constructor(props){
        super(props);

        this.state = {
            apiData : [],
            besideView : [],
            selectedImage: ""
        }

        this.getDetailsFromScoreNShare = this.getDetailsFromScoreNShare.bind(this);
        this.getFilesCount = this.getFilesCount.bind(this);
        this.showBeside = this.showBeside.bind(this);
    }

    getDetailsFromScoreNShare(){
        fetch("https://cors-anywhere.herokuapp.com/" + "http://scorenshare.com/api/ext")
            .then((resp) => {
                let getJson = resp.json();
                getJson.then((data) => {
                    console.log(data);
                    this.setState({
                        apiData: data
                    });
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    getFilesCount(data){
       return data.length  - 1;
    }

    showBeside(object, image){
        this.setState({
            besideView: []
        }, () => {
            this.setState({
                besideView: object,
                selectedImage: image
            }, () => {
                console.log(this.state.besideView[0].title);
            });
        })
        
    }

    componentDidMount(){
        this.getDetailsFromScoreNShare();
    }


    render() {
        return (
            <div className="container-fluid" style={{minHeight: "100vh"}}>
                <Row>
                    <Col md={12}>
                        <Row>
                            <Col md={6}>
                                <div className="pl-4" style={{fontSize: "3em", marginTop: "100px"}}>Archives</div>
                                <Scrollbars style={{ height: "70vh" }}>
                                    {
                                    this.state.apiData.map((data) => {
                                        return <MusicTile
                                            title={data[0].title}
                                            composer={data[0].composer[0].name}
                                            files={this.getFilesCount(data)}
                                            style={{marginTop: "30px !important"}}
                                            onClick={() => this.showBeside(data, "https://images.pexels.com/photos/695971/pexels-photo-695971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")}
                                            pic="https://images.pexels.com/photos/695971/pexels-photo-695971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                        />
                                    })
                                }
                                {
                                    this.state.apiData.map((data) => {
                                        return <MusicTile
                                            title={data[0].title}
                                            composer={data[0].composer[0].name}
                                            files={this.getFilesCount(data)}
                                            style={{marginTop: "30px !important"}}
                                            onClick={() => this.showBeside(data, "https://images.pexels.com/photos/695971/pexels-photo-695971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")}
                                            pic="https://images.pexels.com/photos/695971/pexels-photo-695971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                        />
                                    })
                                }
                                {
                                    this.state.apiData.map((data) => {
                                        return <MusicTile
                                            title={data[0].title}
                                            composer={data[0].composer[0].name}
                                            files={this.getFilesCount(data)}
                                            style={{marginTop: "30px !important"}}
                                            onClick={() => this.showBeside(data, "https://images.pexels.com/photos/695971/pexels-photo-695971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")}
                                            pic="https://images.pexels.com/photos/695971/pexels-photo-695971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                        />
                                    })
                                }
                                </Scrollbars>
                                
                            </Col> 
                            <Col md={6} style={{minHeight: "100vh", background: "#FFEEEE"}}>
                                {
                                    this.state.besideView.length !== 0 && <ArchiveDetail
                                            title={this.state.besideView[0].title}
                                            composer={this.state.besideView[0].composer[0].name}
                                            music={this.state.besideView[1].audio_url}
                                            style={{marginTop: "50px", background: "#FFFFFF45"}}
                                            pic={this.state.selectedImage}
                                        />                        
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>                
            </div>
            
        );
    }
}