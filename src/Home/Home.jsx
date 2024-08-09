import React from 'react'
import './Home.css'
import { FaStar } from "react-icons/fa";
export default function Home() {
  return (
    <>
     <div className="Home py-16 flex relative items-center justify-center">
      <img width="250px" src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg" alt="#img" />
      <h1 className="mt-7">START FRAMEWORK</h1>
      {/* <div _ngcontent-yvd-c6="" class="d-flex align-items-center justify-content-center mb-3"> */}
        {/* <div _ngcontent-yvd-c6="" class="line me-3" style="background-color: white;"></div> */}
          {/* <i _ngcontent-yvd-c6="" class="fa-solid fa-star"></i> */}
        {/* <div _ngcontent-yvd-c6="" class="line ms-3" style="background-color: white;"></div> */}
      {/* </div> */}
      <div className="divIvon text-white my-2 flex gap-3 items-center">
          <div className="line bg-white"></div>
          <FaStar />
          <div className="line bg-white"></div>
        </div>
      <p className="py-4">Graphic Artist - Web Designer - Illustrator</p>
      </div> 
    </>
  )
}
