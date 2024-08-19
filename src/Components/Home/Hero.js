import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import p1 from '../Assets/HeroPics/TestPics/BG1.png'
import p2 from '../Assets/HeroPics/TestPics/BG2.png'
import p3 from '../Assets/HeroPics/TestPics/BG3.png'
import p4 from '../Assets/HeroPics/TestPics/BG4.png'

function Hero() {
    return (
        <>
            <div className="heroMain max-h-[50vh]">
                <div className="circle-areas pt-16 flex justify-center">
                    <div className="circle-area text-[14px] w-[100px] h-[100px] md:h-[250px] md:w-[250px] flex flex-col justify-center items-center">
                        <div className="circle bg-gray-200 size-[65px] md:size-[150px] rounded-full overflow-hidden shadow-lg shadow-slate-400">
                            <Link to='/summer'>
                                <img src={p1} alt="" />
                            </Link>
                        </div>
                        <p className='pt-2'>Summer</p>
                    </div>
                    <div className="circle-area text-[14px] w-[100px] h-[100px] md:h-[250px] md:w-[250px] flex flex-col justify-center items-center">
                        <div className="circle bg-gray-200 size-[65px] md:size-[150px] rounded-full overflow-hidden shadow-lg shadow-slate-400">
                            <Link to='/winter'><img src={p2} alt="" /></Link>
                        </div>
                        <p className='pt-2'>Winter</p>
                    </div>
                    <div className="circle-area text-[14px] w-[100px] h-[100px] md:h-[250px] md:w-[250px] flex flex-col justify-center items-center">
                        <div className="circle bg-gray-200 size-[65px] md:size-[150px] rounded-full overflow-hidden shadow-lg shadow-slate-400">
                            <Link to='/ethnic'><img src={p3} alt="" /></Link>
                        </div>
                        <p className='pt-2'>Ethnic</p>
                    </div>
                    <div className="circle-area text-[14px] w-[100px] h-[100px] md:h-[250px] md:w-[250px] flex flex-col justify-center items-center">
                        <div className="circle bg-gray-200 size-[65px] md:size-[150px] rounded-full overflow-hidden shadow-lg shadow-slate-400">
                            <Link to='/customise'><img src={p4} alt="" /></Link>
                        </div>
                        <p className='pt-2'>Custom</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero