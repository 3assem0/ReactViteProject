import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
export default function NavBar() {

  return (
    <>
    <div className="nav p-7 flex"> 
      <div className="container nav-cont flex items-center ">
      <h1><NavLink to='/'>START FRAMEWORK</NavLink></h1>
      <ul className=" navlinks gap-7">
        <li><NavLink to='/About'>ABOUT</NavLink></li>
        <li><NavLink to='/Portfolio'>PORTFOLIO</NavLink></li>
        <li><NavLink to='/Contact'>CONTACT</NavLink></li>
      </ul>
      </div>
    </div>
    </>
  )
}