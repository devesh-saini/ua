import React from 'react'
import Hero from './Hero'
import Offers from './Offers'
import p1 from '../Assets/HeroPics/TestPics/BG1.png'
import p2 from '../Assets/HeroPics/TestPics/BG2.png'
import p3 from '../Assets/HeroPics/TestPics/BG3.png'
import p4 from '../Assets/HeroPics/TestPics/BG4.png'
import ItemCard from '../../Essentials/ItemCard'
import { Link } from 'react-router-dom';

function Home() {

    const featured = [
        {
            img: p1,
            title: "Test Title",
            price: 499,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint labore dolor repudiandae"
        },
        {
            img: p2,
            title: "Test Title",
            price: 499,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint labore dolor repudiandae"
        },
        {
            img: p3,
            title: "Test Title",
            price: 499,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint labore dolor repudiandae"
        },
        {
            img: p4,
            title: "Test Title",
            price: 499,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint labore dolor repudiandae"
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
                <div className="featured flex flex-wrap justify-center">
                    {
                        featured.map((item, index) => {
                            return (
                                <ItemCard img={item.img} title={item.title} price={item.price} description={item.description}/>
                            )
                        })
                    }
                </div>
                <div className="view-all-btn flex justify-center p-8">
                    <Link to='/products'><button className='py-3 px-5 bg-amber-200 hover:bg-amber-300 transition rounded-full'>View All</button></Link>
                </div>
            </div>
        </>
    )
}

export default Home