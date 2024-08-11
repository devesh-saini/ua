import React from 'react'
import './Hero.css'

function Hero() {
    return (
        <>
            <div className="heroMain flex flex-col justify-between items-center h-1/2">
                <div className="hero-subheading pt-24 text-red-800">
                    <p>WELCOME TO</p>
                </div>
                <div className="hero-heading md:text-[20vw] leading-[175px]">
                    <p>Uttam Attires</p>
                </div>
            </div>
        </>
    )
}

export default Hero