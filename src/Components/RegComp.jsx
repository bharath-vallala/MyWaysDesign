import React,{useState} from 'react'
import "./RegStyles.css"

export default function RegComp(props) {
    const [displayReg, setDisplayReg] = useState(false);

    const close=()=>{
        setDisplayReg(false)
        props.close(false)
    }

    return (
        <div className={`container1 Overlay  Modal ${props.disp || displayReg ? 'Show': ''}`}>
            <div className="center-flex">
                <div className="login-cont">
                    <div className="close" onClick={close}>
                        <p>X</p>
                    </div>
                    <h2 className="m-heading">Sign Up</h2>
                    <h3 className="sm-heading">It's quick and easy</h3>
                    <form className="form-cont">
                        <div className="split-inp">
                            <input type="text" className="inp" placeholder="First Name"></input>
                            <input type="text" className="inp" placeholder="Last Name"></input>
                        </div>
                        <input type="text" className="inp" placeholder="Email"></input>
                        <input type="text" className="inp" placeholder="Password"></input>
                        <div className="primary-button">
                            <p>Sign up</p>
                        </div>

                    </form>
                </div>
           </div>
        </div>
       
    )
}
