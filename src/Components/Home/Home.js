import React from 'react'
import Hero from './Hero'
import Offers from './Offers'
import p1 from '../Assets/HeroPics/TestPics/BG1.png'
import p2 from '../Assets/HeroPics/TestPics/BG2.png'
import p3 from '../Assets/HeroPics/TestPics/BG3.png'
import p4 from '../Assets/HeroPics/TestPics/BG4.png'
import ItemCard from '../../Essentials/ItemCard'

function Home() {

    const featured = [
        {
            img: p1,
            price: 499
        },
        {
            img: p2,
            price: 499
        },
        {
            img: p3,
            price: 499
        },
        {
            img: p4,
            price: 499
        }
    ]

    return (
        <>
            <div className="homeMain">
                <div className="heroMain max-h-[50vh]">
                    <Hero />
                </div>
                <div className="offersMain max-h-[50vh] pb-5">
                    <Offers />
                </div>
                <div className="featured flex flex-wrap">
                    {
                        featured.map((item, index) => {
                            return (
                                <ItemCard img={item.img} price={item.price} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Home