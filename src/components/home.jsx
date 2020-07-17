import React, {Component} from "react";
import { Container, Row, Col, CardHeader, Button } from "reactstrap";
import {Card} from "mdbreact";
import Typewriter from 'typewriter-effect/dist/core';
import { ServiceCard } from "./serviceCard";
import MusicAnimation from "../lf30_editor_Nn3A3e.json";
import Lottie from "lottie-react-web";
import MusicTile from "./musicTile";
import MyFooter from "./footer";



export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            musicArr : [],
            nowPlaying: {},
            isSelected: false,
            buttonToggle: "fas fa-play fa-3x btn-show",
            audio : new Audio(),
            playerValue: "0",
            isPlaying : false,
            current: "0.00",
            duration: "0.00"
        }
        this.playSound = this.playSound.bind(this);
        this.toggleButton = this.toggleButton.bind(this);
        this.volumeDown = this.volumeDown.bind(this);
        this.volumeUp = this.volumeUp.bind(this);
        // this.seekTab = this.seekTab.bind(this);
        this.progressRef = React.createRef();
        // this.seek = this.seek.bind(this);
        this.initProgressBar = this.initProgressBar.bind(this);
        this.getTime = this.getTime.bind(this);
    }
    playSound(music){
        console.log(music);
        this.setState({
            nowPlaying: music,
            isSelected: true,
            audio: new Audio(`https://scorenshare.com/${music[1].audio_url}`)
        }, () => {
           
        });
    }

    getTime(time) {
        if (!isNaN(time)) {
          return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
          );
        }
      }

    initProgressBar(){
        const node = this.progressRef.current;
        node.addEventListener("click", this.seek);
    }

    // seek(event) {
    //     var percent = event.offsetX / this.offsetWidth;
    //     this.setState({
    //         current : percent * this.state.audio.duration,
    //         playerValue: String(percent / 100)
    //     })
    // }

    toggleButton(){
        if (!this.state.isPlaying){
            this.state.audio.play()
            .then(() => {
                this.setState({
                    playerValue: this.state.audio.currentTime / this.state.audio.duration,
                    duration: this.state.audio.duration,
                    current: this.state.audio.currentTime,
                    buttonToggle : "fas fa-pause fa-3x btn-hide",
                    isPlaying: true
                });
                console.log(this.state.playerValue);
            }).catch(err => {
                console.log(err);
            });
        }else{
            this.state.audio.pause();
            this.setState({
                buttonToggle : "fas fa-play fa-3x btn-show",
                isPlaying: false
            });
        }
    }

    volumeUp(){
        console.log(this.state.audio.volume);
        if(this.state.audio.volume < 1){
            this.state.audio.volume += 0.1;            
        }
    }

    volumeDown(){
        console.log(this.state.audio.volume);
        if(this.state.audio.volume >= 0.1 ){
            this.state.audio.volume -= 0.1;
        }
    }

    // var song = document.getElementById('player');
    // var play = document.getElementById("play");
    // var pause = document.getElementById("pause");
    // var upVolume = document.getElementById("up");
    // var downVolume = document.getElementById("down");

    // // 4 si termino de cargar la musica 
    // if (song.readyState == 4) {

    //   function initProgressBar() {

    //     var progressbar = document.getElementById('seek-obj');
    //     progressbar.value = (song.currentTime / song.duration);
    //     progressbar.addEventListener("click", seek);

    //     if (song.currentTime == song.duration) {
    //       play.classList.remove('btn-hide');
    //       play.classList.add('btn-show');
    //       pause.classList.remove('btn-show');
    //       pause.classList.add('btn-hide');
    //     }

    //     document.getElementById("music-current").innerHTML = formatTime(song.currentTime);
    //     document.getElementById("music-duration").textContent = formatTime(song.duration);

        // function seek(event) {
        //   var percent = event.offsetX / this.offsetWidth;
        //   song.currentTime = percent * song.duration;
        //   progressbar.value = percent / 100;
        // }

    //   };

    //   $(document).ready(function () {
    //     $(play).click(function () {

    //       play.classList.remove('btn-show');
    //       play.classList.add('btn-hide');
    //       pause.classList.remove('btn-hide');
    //       pause.classList.add('btn-show');

    //       song.play();
    //     });

    //     $(pause).click(function () {

    //       play.classList.remove('btn-hide');
    //       play.classList.add('btn-show');
    //       pause.classList.remove('btn-show');
    //       pause.classList.add('btn-hide');

    //       song.pause();
    //     });

    //     $(upVolume).click(function () {

    //       if (song.volume < 1) {
    //         song.volume += 0.1;
    //       }
    //     });

    //     $(downVolume).click(function () {

    //       if (song.volume > 0.1) {
    //         song.volume -= 0.1;
    //       }
    //     });

    //   });
    // }

    // function formatTime(song) {

    //   var minutes = parseInt(Math.floor(song / 60));
    //   var seconds = parseInt(song - minutes * 60);
    //   if (seconds < 10) {
    //     seconds = "0" + seconds;
    //   }

    //   return time = minutes + ":" + seconds;
    // }

    getDetailsFromScoreNShare(){
        fetch("https://cors-anywhere.herokuapp.com/" + "http://scorenshare.com/api/ext")
            .then((resp) => {
                let getJson = resp.json();
                getJson.then((data) => {
                    console.log(data);
                    this.setState({
                        musicArr: data
                    });
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    componentDidMount(){
        this.getDetailsFromScoreNShare();
        new Typewriter('#typewriter', {
            strings: ["Let it transform you", "A home of music", "Casa de la musica"],
            autoStart: true,
            loop: true
        }).start();

        this.initProgressBar();       

        // new Typewriter('#interactive', {
        //     strings: ["With very interactive sessions", "Aimed at building individual confidence", "Making music resound through the echoes of time"],
        //     autoStart: true,
        //     loop: true
        // });
    }
    

    render(){
        const defaultOptions = {
            loop: true,
            autoplay: true, 
            animationData: MusicAnimation,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };
        const currentTime = this.getTime(this.state.audio.currentTime);
        const duration = this.getTime(this.state.audio.duration);
        return (
            <div style={{display:"flex",
            flexDirection:"column"}}>
            <div className="container-fluid" style={{
                    height: "100vh", 
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat", 
                    backgroundPosition: "center",
                    marginTop: "100px",
                    flex:"11"
                }     
            }>
                <Row>
                    <Col md={6} style={{height: "100vh"}}>
                        <div 
                        className="ml-auto"
                        style={
                            {
                            background:"url('https://cdn.dribbble.com/users/2110915/screenshots/8490466/media/12742577c56fdb67517beba8ee69d4e7.png')", 
                            backgroundSize: "cover", 
                            // width:"100%", 
                            height: "100vh",
                            backgroundRepeat: "no-repeat", 
                            backgroundPosition: "center"
                        }
                        }></div>
                    </Col>
                    <Col md={6}>
                        <div className="bigText" id="typewriter">
                        </div>
                        <Lottie options={defaultOptions}
                            height={400}
                            width={400}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Card className="intro p-4">
                            <div className="cardHead">Who is Casa de la Musica ?</div>
                            <div className="cardbody mr-auto ml-auto">
                            House of music is a group of musical enthusiasts with the aim of bringing appropriate music to the mind of every human person. 
                            We are a group of individuals with years of experience in the formation of choirs ranging from churches to schools and private individuals.
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Card className="question p-4 mt-3">
                            <div className="cardHead">Did you know ?</div>
                            <div className="cardbody mr-auto ml-auto">
                                Music education opens doors that help children pass from school into the world around them a world of work,
                                culture, intellectual activity, and human involvement. 
                                The future of our nation depends on providing our children with a complete education that includes music.
                            </div>
                            <div className="bottomNote">
                                Gerald Ford
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col md={12}>
                        <div className="card p-3">
                            <Row>
                                <Col md={4}>
                                    <div className="card" style={{height: "200px", background: "url(https://images.pexels.com/photos/2951142/pexels-photo-2951142.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)", backgroundPosition: "center"}}>

                                    </div>
                                </Col>
                                <Col md={8}>
                                    <div className="title" >
                                        Student of the week
                                    </div>
                                    <div className="body pt-4">
                                        Name: Jane Doe<br/>
                                        School: Unknown school<br/>
                                        Part: Soprano<br />
                                       <b>Quote:</b> <i>"...A note a day, keeps off key at bay..."</i> 
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col md={12}>
                        <div className="card p-3">
                            <Row>
                                <Col md={4}>
                                    <div className="card" style={{height: "200px", background: "url(https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)", backgroundPosition: "center"}}>

                                    </div>
                                </Col>
                                <Col md={8}>
                                    <div className="title" >
                                        Choir of the month
                                    </div>
                                    <div className="body pt-4">
                                        School: Corona International School<br/>
                                        Choir: CIS choir<br/>
                                       <b>Quote:</b> <i>"...A note a day, keeps off key at bay..."</i> 
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <div id="" className="cursive sideText">
                        With very interactive sessions
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="" style={{background: "url('https://cdn.dribbble.com/users/533826/screenshots/10400221/media/a1fabc202270c27c93b66b65fb6849a4.jpg')", backgroundSize: "cover", height: "500px", marginTop: "50px"}}>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                    {/* <center><iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fgabriel.achanya.7%2Fvideos%2F137731761274846%2F&show_text=true&width=400&height=400&appId" width="60%" height="40%" style={{border:"none", overflow:"hidden"}} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe></center> */}
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <ServiceCard 
                        title="School Choirs"
                        image="https://cdn.dribbble.com/users/8375/screenshots/7077955/media/71fa069ecbf87153218e9df35eaaabd6.jpg"
                        description="We cannot listen to one voice above all others. We must listen to a choir of voices if we are to understand the individual tunes."
                        />
                    </Col>
                    <Col md={4}>
                        <ServiceCard 
                        title="Individual Training"
                        image="https://cdn.dribbble.com/users/729829/screenshots/4738104/galshir-storytime.png"
                        description="There's nothing as wonderful as self improvement, how much improving oneself in the art of arts"
                        />
                    </Col>
                    <Col md={4}>
                        <ServiceCard 
                        title="Church Choirs"
                        image="https://cdn.dribbble.com/users/2007184/screenshots/4506406/018_doneartboard_1_800x-100.jpg"
                        description="Sing, then. Sing, indeed, with shoulders back, and head up so that song might go to the roof and beyond to the sky.
                        O, Voice of Man, organ of most lovely might."
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={5}>
                        <div className="title text-center">
                            Featured musicals
                        </div>
                        <div className="card p-3" style={{minHeight: "200px"}}>
                            {this.state.musicArr.map(data => {
                                return <MusicTile
                                    title={data[0].title}
                                    composer={data[0].composer[0].name}
                                    style={{marginTop: "30px"}}
                                    onClick={() => this.playSound(data)}
                                />
                            })}
                        </div>
                    </Col>
                    <Col md={7}>
                        <div className="card mPlayer p-3">
                            <div className="card-body" id="player-card">
                            <h4 className="card-title font-weight-bold"><a>{this.state.isSelected ? this.state.nowPlaying[0].composer[0].title: "Waiting"}</a></h4>

                                <ul className="list-unstyled list-inline player-controls">
                                    <span id="seek-obj-container">
                                    <progress id="seek-obj" ref={this.progressRef} value={this.state.playerValue} max="1"></progress>
                                    </span>
                                </ul>

                            <p className="mb-2">{this.state.isSelected ? this.state.nowPlaying[0].composer[0].name: "waiting"}</p>

                                <div className="d-flex justify-content-between">
                                    <p className="card-text" id="music-current">
                                    {currentTime}
                                    </p>
                                    <p className="card-text" id="music-duration">
                                    {duration}
                                    </p>
                                </div>

                                <hr className="my-4"/>
                                <ul className="list-unstyled list-inline d-flex justify-content-center mb-0">

                                    <li className="list-inline-item mr-0 mt-2">
                                    <i className="fas fa-volume-down fa-2x" id="down" onClick={this.volumeDown}></i>
                                    </li>
                                    <li className="list-inline-item mr-4 ml-4">
                                    <i className={this.state.buttonToggle} key={this.state.nowPlaying.url} onClick={this.toggleButton}></i>
                                    </li>
                                    <li className="list-inline-item mr-0 mt-2">
                                    <i className="fas fa-volume-up fa-2x" id="up" onClick={this.volumeUp}></i>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            {/* <MyFooter  style={{flex: "1"}}/> */}
            </div>
        )
    };
}
