import React from 'react'
import Hero from './Hero/Hero'

function Home() {
    return (
        <>
            <div className="homeMain min-h-[100vh]">
                <div className="heroMain">
                    <Hero />
                </div>
            </div>
        </>
    )
}

export default Home