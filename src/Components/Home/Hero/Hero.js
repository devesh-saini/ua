import React from 'react'
import './Hero.css'
import p1 from '../../Assets/HeroPics/TestPics/BG1.png'
import p2 from '../../Assets/HeroPics/TestPics/BG2.png'
import p3 from '../../Assets/HeroPics/TestPics/BG3.png'
import p4 from '../../Assets/HeroPics/TestPics/BG4.png'

function Hero() {
    return (
        <>
            <div className="heroMain min-h-[100vh]">
                <div className="circle-areas pt-14 flex justify-center">
                    <div className="circle-area w-[100px] h-[100px] md:h-[250px] md:w-[250px] flex flex-col justify-center items-center">
                        <div className="circle bg-gray-200 size-[65px] md:size-[150px] rounded-full overflow-hidden">
                            <img src={p1} alt="" />
                        </div>
                    </div>
                    <div className="circle-area w-[100px] h-[100px] md:h-[250px] md:w-[250px] flex flex-col justify-center items-center">
                        <div className="circle bg-gray-200 size-[65px] md:size-[150px] rounded-full overflow-hidden">
                            <img src={p2} alt="" />
                        </div>
                    </div>
                    <div className="circle-area w-[100px] h-[100px] md:h-[250px] md:w-[250px] flex flex-col justify-center items-center">
                        <div className="circle bg-gray-200 size-[65px] md:size-[150px] rounded-full overflow-hidden">
                            <img src={p3} alt="" />
                        </div>
                    </div>
                    <div className="circle-area w-[100px] h-[100px] md:h-[250px] md:w-[250px] flex flex-col justify-center items-center">
                        <div className="circle bg-gray-200 size-[65px] md:size-[150px] rounded-full overflow-hidden">
                            <img src={p4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero