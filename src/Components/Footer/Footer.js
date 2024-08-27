import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {

    const links = [
        { name: "Summer", path: '/summer' },
        { name: "Winter", path: '/winter' },
        { name: "Ethnic", path: '/ethnic' },
        { name: "Customise", path: '/customise' }
    ]

    return (
        <>
            <div className="main md:p-[50px] p-5 bg-amber-100 rounded-t-3xl md:rounded-t-[75px]">
                <div className="heading text-center font-[Tangerine] text-6xl pt-[30px]">
                    <Link to={'/'}>Uttam Attires</Link>
                </div>
                <div className="line w-full flex justify-center pt-5">
                    <div className="lineMain h-[2px] w-32 bg-amber-200"></div>
                </div>
                <div className="info flex flex-col md:flex-row gap-5 md:px-5 py-[30px]">
                    <div className="left flex flex-col gap-5 py-[20px]">
                        <div className="mail">
                            <a href="mailto:uttamattires@gmail.com">uttamattires@gmail.com</a>
                        </div>
                        <div className="social flex gap-5">
                            <a href="/">insta</a>
                            <a href="/">whatsapp</a>
                            <a href="/">snapchat</a>
                        </div>
                    </div>
                    <div className="line w-full flex justify-center">
                        <div className="lineMain h-[2px] w-32 md:bg-amber-100 bg-amber-200"></div>
                    </div>
                    <div className="right w-1/4 list-none py-[15px] flex flex-col gap-5">
                        {links.map((link, index) => {
                            return (
                                <li key={index}><Link to={link.path}>{link.name}</Link></li>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer