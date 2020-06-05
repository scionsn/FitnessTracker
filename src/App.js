import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Route} from "react-router-dom"
import './App.css';
import { Exerciselist } from './components/exerciselist';
import { Createuser } from './components/createuser';
import { Createexercise } from './components/createexercise';
import { Editexercise } from './components/editexercise';
import { Navbar } from './components/navbar';

function App() {
  return (
    <Router>
    <div className="container">
      <Navbar/>
      <Route exact path="/" component={Exerciselist}/>
      <Route path="/adduser" component={Createuser}/>
      <Route path="/addexer" component={Createexercise}/>
      <Route path="/editexer/:id" component={Editexercise}/>
      {/* in edit link an id will be provided to edit that particular exercise */}
    </div>
    </Router>
  );
}

export default App;
