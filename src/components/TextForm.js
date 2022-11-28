import React, { useState } from 'react'
// handleloclick function


export default function TextForm(props) {

  const handleupClick = () => {
    console.log("UpperCase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to Upper case", "success");
}
  const handleloClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to Lower case", "success");
}
  const handleSentenceClick = () => {
    let newText = text.charAt(0).toUpperCase()+ text.slice(1).toLowerCase();
    setText(newText);
    props.showAlert(" Converted to Sentance case", "success");
}
  const handleClearOnClick = () => {
    let newText = " ";
    setText(newText);
    props.showAlert(" Cleared case", "success");
}
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
    // we can write also now onchange
    

}

const reverse = ()=>{
  let spl = text.split(" ")
  let rev = spl.reverse();
  let join = rev.join(" ");
  setText(join)
  props.showAlert(" Reversed case", "success");
  }
  
  const handleToRepeat = () => {
    let newText = text.concat(" ");
    setText(newText.repeat(2));
    props.showAlert(" Repeated case", "success");
  }
  
  const handleSrchClick = () => {
    let str = prompt("enter the string you wanna search :");
    let newText = text.includes(str, 0);
    if (newText === true){
        setText("the string " + str + " is present..");
    }
    else{
        setText("the string " + str + " is not present..");
    }
}

  const [text, setText] = useState('Enter text here');
  // text = "new text;" wrong way to change the state
  // setText("new text");
  //correct way to change the state

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1 className='my-4 mx-2' >{props.heading}  </h1>
        <input className="form-control heights" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#042743d6' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} type="text" />
        <div className="container" >
        <button disabled ={ text.length===0} className="btn btn primary mx-2 my-2" onClick={handleupClick} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} >Convert to Uppercase</button>
    <button disabled ={ text.length===0} className="btn btn primary mx-2 my-2" onClick={handleloClick} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>Convert to Lowercase</button>
    <button disabled ={ text.length===0} className="btn btn primary mx-2 my-2" onClick={handleClearOnClick} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>Clear chat</button>
    <button disabled ={ text.length===0}className="btn btn primary mx-2 my-2" onClick={handleSentenceClick} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>Convert to Sentence Case</button>
    <button disabled ={ text.length===0}className="btn btn primary mx-2 my-2" value onClick={reverse} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>Reverse</button>
    <button disabled ={ text.length===0}className="btn btn primary mx-2 my-2" value onClick={handleToRepeat} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>Repeat</button>
    <button disabled ={ text.length===0}className="btn btn primary mx-2 my-3" value onClick={handleSrchClick} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>Enter search key</button>
        </div>
  
    {/* <button className="btn btn primary mx-2" value onClick={handleTextColor}>Color</button> */}
      </div>
      
      <div className="container my.3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} char</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </>
    
  )  
}
