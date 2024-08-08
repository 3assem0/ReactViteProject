import React from 'react'
import './Content.css'
import { FaStar } from "react-icons/fa";
export default function Contact() {
  return (
    <>
      <div className="Content ">
        <h1 className="p-2 ">CONTACT SECTION</h1>
        <div className="divIvon mt-1 mb-10 flex gap-3 items-center">
          <div className="line"></div>
          <FaStar />
          <div className="line"></div>
      </div>
        <div className="flex form">
          <input  id="userName" type="text" placeholder="userName" name="userName"/>
          <input  id="userAge" type="text" placeholder="userAge" name="userName"/>
          <input  id="userEmail" type="text" placeholder="userEmail" name="userName"/>
          <input  id="userPassword" type="text" placeholder="userPassword" name="userName"/>
          </div>
          <button> send Message </button>
      </div>
    </>
  )
}
