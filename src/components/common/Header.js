import React from 'react'
import Search from "./Search"
import logo from "./logo.png"
import './Header.css'

const Header=()=>{
    return(

        <div  className="Header">
       <a href="localhost:3000"> <img src={logo} alt="Company-Logo" className="Header-logo"/></a>
        <Search/>
        </div>
    )
}
export default Header;