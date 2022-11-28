import React, {useState} from 'react'

export default function About(props) {

  // const [myStyle, setMyStyle] = useState(
  //   {
  //     backgroundColor: 'black',
  //     color: "white"
  //   }
  // )

  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
   

}
  // const [btntext, setBtnText] = useState('Enable Dark Mode')
  // const toggleStyle = () => {
  //   if (myStyle.backgroundColor === 'black') {
  //     setMyStyle(
  //       {
  //         backgroundColor: 'white',
  //         color: "black"
  //       }
  //     )
  //   setBtnText("Enable Dark Mode")
  //   }
  //   else {
  //     setMyStyle(
  //       {
  //         backgroundColor: 'black',
  //         color: "white"
  //       }
  //     )
  //     setBtnText("Enable Light Mode")
  //   }
  // }
  
  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3 " style={myStyle} >About US</h1>
      <div className="card">

  <div className="card-body" style={myStyle}>
    <blockquote className="blockquote mb-0" style={myStyle}>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer className="blockquote-footer" style={myStyle}>Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
      </div>
      <div className="card">

  <div className="card-body" style={myStyle}>
    <blockquote className="blockquote mb-0" style={myStyle}>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer className="blockquote-footer" style={myStyle}>Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
      </div>
      <div className="card">

  <div className="card-body" style={myStyle}>
    <blockquote className="blockquote mb-0" style={myStyle}>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer className="blockquote-footer" style={myStyle}>Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
      </div>
      
      {/* <div className="container my-3" style={myStyle}>
      <button onClick={toggleStyle} type="button" className="btn">{btntext}</button>
      </div> */}
      
    </div>
  )
}
