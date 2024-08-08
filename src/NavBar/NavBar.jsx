import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
export default function NavBar() {

  return (
    <>
    <div className="nav p-7"> 
      <div className="container px-20 flex items-center justify-between">
      <h1><NavLink to='/'>START FRAMEWORK</NavLink></h1>
      <ul className="flex gap-7">
        <li><NavLink to='/About'>ABOUT</NavLink></li>
        <li><NavLink to='/Portfolio'>PORTFOLIO</NavLink></li>
        <li><NavLink to='/Contact'>CONTACT</NavLink></li>
      </ul>
      </div>
    </div>
    </>
  )
}