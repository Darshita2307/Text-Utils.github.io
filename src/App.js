// import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import Navbar from './components/Navbar';
// import {Navbar} from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode =()=> {
    if (mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      // document.title
      showAlert("Dark Mode has been enabled", "success");
      // setInterval(() => {
        
      // }, interval);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }

  const toggleModeGrey = () => {
    // setMode('grey');
    document.body.style.backgroundColor = '#dee2e6';
  }
  const toggleModeGreen = () => {
    // setMode('grey');
    document.body.style.backgroundColor = '#28a7459e';
  }
  const toggleModeRed = () => {
    // setMode('grey');
    document.body.style.backgroundColor = '#dc3545cc';
  }
  const toggleModeYellow = () => {
    // setMode('grey');
    document.body.style.backgroundColor = '#ffc107cf';
  }
  const toggleModePeacock = () => {
    // setMode('grey');
    document.body.style.backgroundColor = '#b3d7ff';
  }
  const toggleModeBlack = () => {
    // setMode('grey');
    document.body.style.backgroundColor = '#212529e6';
  }

  return (
    <>
    <Router>
      <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode} toggleModeGrey={toggleModeGrey} toggleModeGreen={toggleModeGreen} toggleModeBlack={toggleModeBlack} toggleModePeacock={toggleModePeacock} toggleModeRed={toggleModeRed} toggleModeYellow={toggleModeYellow} />
      {/* <About />
      <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} /> */}
        <Alert alert={alert} />
      <div className="container"> 
      
         <Switch>
          <Route exact path="/About">
            <About mode={mode} />
          </Route>
          <Route exact path="/Home">
          <TextForm showAlert={showAlert} heading="Try TextUtils - Word counter | Character counter" mode={mode} />
          </Route>
        </Switch> </div>
      </Router>
    </>
  );
}

export default App;
// document upload