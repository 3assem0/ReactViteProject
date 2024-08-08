import React from 'react'
import'./About.css'
import { FaStar } from "react-icons/fa";
export default function About() {
  return (
    <>
    <div className="About flex items-center justify-center">
     <h1 className="mb-2">ABOUT FRAMEWORK</h1>
     <div className="divIvon text-white flex gap-3 items-center">
          <div className="line bg-white"></div>
          <FaStar />
          <div className="line bg-white"></div>
      </div>
     <div className="para px-36 flex">
     <p className="p-4">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
     <p className="p-4">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
     </div>
    </div>
    </>
  )
}
