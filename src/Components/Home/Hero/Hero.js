import React from 'react'
import './Hero.css'

function Hero() {
    return (
        <>
            <div className="heroMain flex flex-col justify-between items-center h-[50vh]">
                <div className="hero-subheading pt-24 text-red-800">
                    <p>WELCOME TO</p>
                </div>
                <div className="hero-heading md:text-[20vw] text-[40vw] text-center leading-[32vw] md:leading-[20vw]">
                    <p>Uttam Attires</p>
                </div>
            </div>
            <div className="frames-slideshow h-[50vh]">
                <div className="frames">
                    
                </div>
            </div>
        </>
    )
}

export default Hero