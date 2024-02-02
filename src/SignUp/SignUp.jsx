import React from 'react'
import globe from '../assets/globe.svg'
import arrow from '../assets/arrow.svg'
import "./SignUp.css"
function SignUp() {
  return (
    <div className="SignMain">
        <div className="card">
          <div className="details">
            <div className="logo">
              <img src={globe} alt="" />
            </div>
          <div className="create">
              <p>Create your Account</p>
            </div>
            <div className="name">
              <input type="text"  placeholder='Enter Your Name'/>
            </div>
            <div className="Email">
              <input type="text"  placeholder='Enter Email ID'/>
            </div>
            <div className="continue-button">
              <button >Continue <img id='ii' src={arrow} alt="" width={20} /></button>
            </div>
          </div>
         
        </div>
    </div>
  )
}

export default SignUp