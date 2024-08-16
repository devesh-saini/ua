import React from 'react'
import Hero from './Hero/Hero'

function Home() {
    return (
        <>
            <div className="homeMain">
                <div className="heroMain max-h-[50vh]">
                    <Hero />
                </div>
            </div>
        </>
    )
}

export default Home