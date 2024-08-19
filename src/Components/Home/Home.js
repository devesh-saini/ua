import React from 'react'
import Hero from './Hero/Hero'
import Offers from './Hero/Offers'

function Home() {
    return (
        <>
            <div className="homeMain">
                <div className="heroMain max-h-[50vh]">
                    <Hero />
                </div>
                <div className="offersMain max-h-[50ch]">
                    <Offers />
                </div>
            </div>
        </>
    )
}

export default Home