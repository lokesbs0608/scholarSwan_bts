import React from 'react'
import Floating_astronaut from "../../Images/Floating_astronaut.png";


const Subscription = () => {
  return (
    <div id="section6">
    <div id="bg-p6">
      <div id="circle1-pg6"></div>
      <div id="circle2-pg6"></div>
      <div id="circle3-pg6"></div>
      <div id="circle4-pg6"></div>
      <div id="circle5-pg6"></div>
      <div id="circle6-pg6"></div>
    </div>
    <div id="content-p6">
      <h2>
        Subscribe to our <span>newsletter</span>
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore.
      </p>
      <div
        id="mail"
        className="d-flex align-items-center justify-content-center"
      >
        <input
          className="text-black"
          type="text"
          placeholder="Enter your email address"
        />
        <button>
          <i class="ri-send-plane-fill"></i> Subscribe
        </button>
      </div>
    </div>
    <img
      className="Floating_astronaut "
      src={Floating_astronaut}
      alt="arrow"
    />
  </div>
  )
}

export default Subscription