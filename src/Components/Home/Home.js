import React from 'react'
import Hero from './Hero'
import Offers from './Offers'

function Home() {
    return (
        <>
            <div className="homeMain">
                <div className="heroMain max-h-[50vh]">
                    <Hero />
                </div>
                <div className="offersMain max-h-[50vh]">
                    <Offers />
                </div>
                <div className="featured">

                </div>
            </div>
        </>
    )
}

export default Home