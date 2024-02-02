import React from 'react'
import globe from './assets/globe.svg'
import arrow from './assets/arrow.svg'

function Home() {
  return (
    <div className='home'>
        <div className='india-user'>
            <img src={globe} alt="globe" width={40} />
            <span>For Indian Users Only</span>
        </div>
        <div className='hero'>
            <h1>Start posting anonymously<br/>
            where no one will judge.
            </h1>
            <h4 className='subtitle'>Welcome to Stranger discussion forum</h4>
        </div>
        <div className='join-now'>
        <a href="/signup"><button>Create Your Account<img  src={arrow} alt="" width={20} /></button></a>
            <a href="/login"><p>Already have an account? Login </p></a>
        </div>
    </div>
  )
}

export default Home