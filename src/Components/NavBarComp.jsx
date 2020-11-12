import React from 'react'
import downArrow from "../images/Path 2.svg"
import thunder from "../images/Instant logo.png"
import logo from "../images/MyWays Logo.png"
import "./navStyles.css"

export default function NavBarComp(props) {

    const close=()=>{
        console.log("close")
        props.close()
    }
    const openLogin=()=>{
        console.log("open")
        props.openLogin()
    }
    return (
        <div className="nav-container">
            <div className="img-cont">
                <img src={logo} alt="logo" className="logo"/>
            </div>
            <div className="nav-links">
                <div className="flex-row">
                    <p>For You</p>
                    <img src={downArrow}></img>
                </div>
                <div className="flex-row">
                    <img src={thunder}></img>
                    <p>Instant Apply</p>
                </div>
                <div className="flex-row">
                    <p>Pricing</p>
                </div>
                <div className="flex-row">
                    <p>About Us</p>
                </div>
                <div className="secondary-button" onClick={close}>
                    <p>Sign Up</p>
                </div>
                <div className="Primary-button" onClick={openLogin}>
                    <p>Login</p>
                </div>


            </div>
            
        </div>
    )
}
