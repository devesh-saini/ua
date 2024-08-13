import React from 'react'
import Hero from './Hero/Hero'

function Home() {
    return (
        <>
            <div className="homeMain max-h-[50vh]">
                <div className="heroMain">
                    <Hero />
                </div>
            </div>
        </>
    )
}

export default Home