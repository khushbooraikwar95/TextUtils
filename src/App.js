import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import React,{useState} from 'react';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router,
        Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //it will check weather dark mode is enabled or not
  const [alert, setAlert] = useState(null);

const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
}

  const toggleMode=()=>{
   if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled", "success");
   }else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success");
   }
  }
  return (
   <>
   <Router>
 <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
 <Alert alert={alert}/>
 <div className="container my-3">
 <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analize below" mode={mode}/>        
          </Route>
        </Switch>
 </div>
 </Router>
   </>
  
  );
}

export default App;
