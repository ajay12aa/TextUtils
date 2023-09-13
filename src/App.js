
import { useState } from 'react';
import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
//import About from './Components/About';
import Alert from './Alert';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  const [mode, setMode] = useState("white");
  const [btntext, setbtntext] = useState("Enbale dark mode");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });


    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }

  const toggleMode = () => {

    if (mode === 'white') {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      setbtntext("Enable light mode");
      showAlert("Dark mode has been enabled", "success");
      document.title = "Text Utils-DarkMode"
    }
    else {
      setMode("white");
      document.body.style.backgroundColor = "white";
      setbtntext("Enable dark mode");
      showAlert("White mode has been enabled", "success");
      document.title = "Text Utils-LightMode"



    }
  }

  return (
    <>

      
        <Navbar title="TextUtils" home="Home" about="About" mode={mode} toggleMode={toggleMode} btntext={btntext} />
        <Alert alert={alert} />
        <div className='container my-3'>
         
            <Textform heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />
     
        </div>
     

    </>

  );
}

export default App;
