import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import './index.css';
import MyFooter from './components/footer';
import About from './components/about';
import Archive from './components/archive';
import Contact from './components/contact';


function App() {
  return (
    <Router>
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/archive" component={Archive} />
      <Route path="/contact" component={Contact} />
      <MyFooter/>
    </Router>
  );
}

export default App;
