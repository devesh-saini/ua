import React from 'react'
import './Hero.css'
// import p1 from '../../Assets/HeroPics/TestPics/BG1.png'
// import p2 from '../../Assets/HeroPics/TestPics/BG2.png'
// import p3 from '../../Assets/HeroPics/TestPics/BG3.png'
// import p4 from '../../Assets/HeroPics/TestPics/BG4.png'

function Hero() {
    return (
        <>
            <div className="heroMain min-h-[100vh]">
                <div className="circle-areas pt-14 flex">
                    <div className="circle-area w-[100px] h-[100px] flex flex-col justify-center items-center">
                        <div className="circle bg-gray-200 size-[20vw] rounded-full"></div>
                    </div>
                    <div className="circle-area w-[100px] h-[100px] flex flex-col justify-center items-center">
                        <div className="circle bg-gray-200 size-[20vw] rounded-full"></div>
                    </div>
                    <div className="circle-area w-[100px] h-[100px] flex flex-col justify-center items-center">
                        <div className="circle bg-gray-200 size-[20vw] rounded-full"></div>
                    </div>
                    <div className="circle-area w-[100px] h-[100px] flex flex-col justify-center items-center">
                        <div className="circle bg-gray-200 size-[20vw] rounded-full"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero

{/* 
                <div className="frames-slideshow h-[50vh] overflow-hidden w-full -mt-5 z-0">
                    <div className="frames flex gap-[1px] overflow-hidden w-max">
                        <div className="frame w-[50vw] h-[25vh] md:w-[250px] md:h-[50vh] rounded-tr-[50px] md:rounded-tr-[75px] hover:transform rounded-bl-[50px] md:rounded-bl-[75px] overflow-hidden">
                            <img src={p1} alt="" />
                        </div>
                        <div className="frame w-[50vw] h-[25vh] md:w-[250px] md:h-[50vh] rounded-tl-[50px] md:rounded-tl-[75px] hover:transform rounded-br-[50px] md:rounded-br-[75px] overflow-hidden">
                            <img src={p2} alt="" />
                        </div>
                        <div className="frame w-[50vw] h-[25vh] md:w-[250px] md:h-[50vh] rounded-tr-[50px] md:rounded-tr-[75px] hover:transform rounded-bl-[50px] md:rounded-bl-[75px] overflow-hidden">
                            <img src={p3} alt="" />
                        </div>
                        <div className="frame w-[50vw] h-[25vh] md:w-[250px] md:h-[50vh] rounded-tl-[50px] md:rounded-tl-[75px] hover:transform rounded-br-[50px] md:rounded-br-[75px] overflow-hidden">
                            <img src={p4} alt="" />
                        </div>
                        <div className="frame w-[50vw] h-[25vh] md:w-[250px] md:h-[50vh] rounded-tr-[50px] md:rounded-tr-[75px] hover:transform rounded-bl-[50px] md:rounded-bl-[75px] overflow-hidden">
                            <img src={p1} alt="" />
                        </div>
                        <div className="frame w-[50vw] h-[25vh] md:w-[250px] md:h-[50vh] rounded-tl-[50px] md:rounded-tl-[75px] hover:transform rounded-br-[50px] md:rounded-br-[75px] overflow-hidden">
                            <img src={p2} alt="" />
                        </div>
                        <div className="frame w-[50vw] h-[25vh] md:w-[250px] md:h-[50vh] rounded-tr-[50px] md:rounded-tr-[75px] hover:transform rounded-bl-[50px] md:rounded-bl-[75px] overflow-hidden">
                            <img src={p3} alt="" />
                        </div>
                        <div className="frame w-[50vw] h-[25vh] md:w-[250px] md:h-[50vh] rounded-tl-[50px] md:rounded-tl-[75px] hover:transform rounded-br-[50px] md:rounded-br-[75px] overflow-hidden">
                            <img src={p4} alt="" />
                        </div>
                    </div>
                </div> */}