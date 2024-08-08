import React from 'react'
import'./Footer.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaTwitter } from "react-icons/fa";
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="first p-24 ">
          <div className="container py-1 flex items-center justify-between">
            <div className="fo-o text-center">
              <h1>LOCATION</h1>
              <p>2215 John Daniel Drive</p>
              <p className="pt-2">Clark, MO 65243</p>
            </div>
            <div className="fo-t text-center">
              <h1>AROUND THE WEB</h1>
              <div className="icons flex gap-2 justify-center">
              <span><FaFacebook/></span>
              <span><FaTwitter/></span>
              <span><FaLinkedinIn/></span>
              <span><TbWorld/></span>
              </div>
            </div>
            <div className="fo-th text-center">
              <h1>ABOUT FREELANCER</h1>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
        <div className="second p-6">
          <h2>Copyright © made by Assem 2024</h2>
        </div>
      </div>
    </>
  )
}
