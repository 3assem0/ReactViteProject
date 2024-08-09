import React from 'react'
import './Portfolio.css'
import { FaStar } from "react-icons/fa";
export default function Portfolio() {
  return (
    <>
    <div className="Portofolio flex items-center">
    <h1 className="pt-8">PORTFOLIO COMPONENT</h1>
      <div className="divIvon my-2 flex gap-3 items-center">
          <div className="line "></div>
          <FaStar />
          <div className="line "></div>
        </div>
        <div className="container por-cont gap-12 flex justify-center items-center ">
        
            <div className="windo">
              <img src="https://routeegy.github.io/startFramework/assets/images/poert1.png" alt="#img" />
              <div class="overlay">
                <div class="text">+</div>
              </div>
              </div>
            <div className="windo"><img src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt="#img" />
            <div class="overlay">
                <div class="text">+</div>
              </div></div>
            <div className="windo"><img src="https://routeegy.github.io/startFramework/assets/images/port3.png" alt="#img" />
            <div class="overlay">
                <div class="text">+</div>
              </div></div>
            
            <div className="windo"><img src="https://routeegy.github.io/startFramework/assets/images/poert1.png" alt="#img" />
            <div class="overlay">
                <div class="text">+</div>
              </div></div>
            <div className="windo"><img src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt="#img" />
            <div class="overlay">
                <div class="text">+</div>
              </div></div>
            <div className="windo"><img src="https://routeegy.github.io/startFramework/assets/images/port3.png" alt="#img" />
            <div class="overlay">
                <div class="text">+</div>
              </div></div>
          
          </div>
        </div>

    </>
  )
}
