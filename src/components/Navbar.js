// react function based component
//rfc
//import prop types
//impt

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={ `navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}` }>
    <Link className="navbar-brand" to="#">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link  className='nav-link' to ='/Home'>Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link  className='nav-link' to ='/about'>{props.aboutText}</Link>
        </li>
        </ul>
        <div className="container">
        {/* <button type="button" class="btn btn-outline-primary" onClick={props.toggleMode}>Blue</button> */}
<button type="button" class="btn btn-outline-secondary" onClick={props.toggleModeGrey}>Grey</button>
<button type="button" class="btn btn-outline-success" onClick={props.toggleModeGreen}>Green</button>
<button type="button" class="btn btn-outline-danger" onClick={props.toggleModeRed}>Red</button>
<button type="button" class="btn btn-outline-warning" onClick={props.toggleModeYellow}>Yellow</button>
<button type="button" class="btn btn-outline-info" onClick={props.toggleModePeacock}>Blue</button>
{/* <button type="button" class="btn btn-outline-light" onClick={props.toggleMode}>Light</button>
<button type="button" class="btn btn-outline-dark" onClick={props.toggleModeBlack}>Dark</button> */}
        </div>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
        
    </div>
        </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
}

Navbar.defaultProps =
{
  title: 'Set Title here',
  aboutText: 'About text here'
};