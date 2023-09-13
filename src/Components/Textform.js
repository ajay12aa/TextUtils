import React, { useState } from 'react'

export default function Textform(props) {

    const [text, setText] = useState("")

    const handleOnChnage = (e) => {
       
        setText(e.target.value);
        
       

    }
    const handleUpChange = () => {

        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text is converted to uppercase","success");

    }
    const handleLoChange = () => {

        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text is converted to lowercase","success");

    }

    const handleClearChange = () => {
        setText("");
        props.showAlert("Text is cleared","success");
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const copyText = () => {
        navigator.clipboard.writeText(text);
        
        props.showAlert("Text is copied from the textarea","success");
 }

 const removeExtapSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces has been removed .","success");
 }

 

    return (

        <div>

            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea style={{ color: props.mode === 'white' ? 'black' : 'white', background:props.mode==='white' ?'white':'grey' }} value={text} onChange={handleOnChnage} className="form-control" id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-3' onClick={handleUpChange}>Conver to upperCase</button>
            <button className='btn btn-primary mx-3' onClick={handleLoChange}>Conver to upperCase</button>
            <button className='btn btn-primary mx-3' onClick={handleClearChange}>Clear Text</button>
            <button className='btn btn-primary mx-3' onClick={speak}>Speak</button>
            <button className='btn btn-primary mx-3' onClick={copyText}>Copy the Text</button>
            <button className='btn btn-primary mx-3' onClick={removeExtapSpace}>Remove Extra Space</button>
            
            <div className='container' style={{ color: props.mode === 'white' ? 'black' : 'white' }}>
                <h2>Text Summary</h2>
                <p>Your text contains {text.split(" ").length - 1} words and {text.length} characters. </p>
                <p>The average time take to read is {0.008 * (text.split(" ").length - 1)}</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}
