import React,{useState} from 'react'
import "./Loginstyless.css"

export default function LoginComp(props) {
    const [displayLogin, setDisplayLogin] = useState(false);

    const close=()=>{
        setDisplayLogin(false)
        props.toggle()
    }

//comments
    return (
        <div className={`Overlay1  Modal1 ${props.disp || displayLogin ? 'Show': ''}`}>
           <div className="main-cont">
                <div className="back-container">
                    <div className="flex-roww">
                        <h2 className="m-heading">Login</h2>
                        <div onClick={close} className="close1">X</div>
                    </div>
                    <div className="form-cont border">
                        <h2 className="s-heading">Student</h2>
                        <div className="line"></div>
                        <input className="inp" placeholder="Email"></input>
                        <input className="inp" placeholder="Password"></input>
                        <p className="green-label">Forget Password</p>
                        <div className="primary-button">Login</div>
                        <p className="black-label">New to MyWays? Sign Up here</p>

                    </div>
                    
                </div>
            </div>
            Login
            
        </div>
    )
}
