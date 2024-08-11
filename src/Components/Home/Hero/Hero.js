import React from 'react'
import './Hero.css'
import p1 from '../../Assets/HeroPics/TestPics/BG1.png'
import p2 from '../../Assets/HeroPics/TestPics/BG2.png'
import p3 from '../../Assets/HeroPics/TestPics/BG3.png'
import p4 from '../../Assets/HeroPics/TestPics/BG4.png'

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
            <div className="frames-slideshow h-[50vh] flex flex-nowrap">
                <div className="frames">
                    <div className="frame1 w-[200px] h-[400px] rounded-tr-2xl rounded-bl-2xl overflow-hidden">
                        <img src={p1} alt="" />
                    </div>
                    <div className="frame1 w-[200px] h-[400px] rounded-tr-2xl rounded-bl-2xl overflow-hidden">
                        <img src={p2} alt="" />
                    </div>
                    <div className="frame1 w-[200px] h-[400px] rounded-tr-2xl rounded-bl-2xl overflow-hidden">
                        <img src={p3} alt="" />
                    </div>
                    <div className="frame1 w-[200px] h-[400px] rounded-tr-2xl rounded-bl-2xl overflow-hidden">
                        <img src={p4} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero