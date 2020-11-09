import React ,{useState} from "react"
import './App.css';
import NavBar from "./Components/NavBarComp"
import LoginComp from "./Components/LoginComp"
import RegComp from "./Components/RegComp";

function App() {
  const [displayReg, setDisplayReg] = useState(false);
  const [displayLogin, setDisplayLogin] = useState(false);

  const openReg=()=>{
    setDisplayReg(!displayReg)
  }
  const openLogin=()=>{
    console.log(displayLogin)
    setDisplayLogin(!displayLogin)
  }
  return (
    <div className="App">
      <NavBar close={openReg} openLogin={openLogin}></NavBar>
      <div className="container">
        <h1 className="l-heading">Apply and hear back every time</h1>
        <p className="b-para">Exploring internships or jobs? Say good-bye to the typical job portals and use the power of Artificial Intelligence to become successful, faster.
        </p>
        <div className="primary-button" onClick={openReg}>
          <p>Get Started</p>
        </div>
       
      </div>
      <div className="modal-cont">
          <RegComp disp={displayReg} close={openReg}></RegComp>
      </div>
      <div className="modal-login">

      </div>
        <LoginComp toggle={openLogin} disp={displayLogin}></LoginComp>
      </div>
  );
}

export default App;
