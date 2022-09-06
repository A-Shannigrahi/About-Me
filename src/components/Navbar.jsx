import React from "react"
import "./Navbar.css"
import logo from "./react-logo.png"



export default function Navbar() {
    return (
        <nav>
            <img src={logo} className="nav--icon" />
            <h3 className="nav--logo_text"> <a href="https://www.linkedin.com/in/abhinaba-shannigrahi-3467001b1/">Linkedin</a></h3>

            <h4 className="nav--title"><a href="https://github.com/A-Shannigrahi">Github</a></h4>
        </nav>
    )
}
