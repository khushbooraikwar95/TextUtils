import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const HandleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const HandleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const HandleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white', 
            color:props.mode==='dark'?'white':'#042743' }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={HandleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={HandleLowClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary" onClick={HandleClearClick}>
          Clear Text    
        </button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here.."}</p>
      </div>
    </>
  );
}
