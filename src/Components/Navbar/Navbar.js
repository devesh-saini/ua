import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.jpg'
import search from '../Assets/search.jpg'
import cart from '../Assets/cart.jpg'
import wishlist from '../Assets/wishlist.jpg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    const [menuButton, setMenuButton] = useState(false);

    const appear = document.querySelector('.mobMenu');

    function setMenuButtonOnClick() {
        try {
            if (menuButton === false) {
                setMenuButton(true);
                console.log(menuButton);
                appear.classList.remove('visible');
                appear.classList.add('hidden');
            } else {
                setMenuButton(false);
                console.log(menuButton);
                appear.classList.remove('hidden');
                appear.classList.add('visible');
            }
        } catch (error) {
            // console.log("Try again"); //Eat 5 star, do nothing
        }
    }

    const links = [
        { name: "Summer", path: '/summer' },
        { name: "Winter", path: '/winter' },
        { name: "Ethnic", path: '/ethnic' },
        { name: "Customise", path: '/customise' }
    ]

    return (
        <>
            <div className="navbar flex w-full h-[50px] fixed items-center justify-between z-50 shadow-lg shadow-gray-100 md:px-10 px-4">
                <div className="nav-logo">
                    <Link to='/'><img src={logo} alt="Uttam Attires" /></Link>
                </div>
                <div className="menu md:flex md:visible hidden list-none gap-5">
                    {links.map((link, index) => {
                        return (
                            <li key={index}><Link to={link.path}>{link.name}</Link></li>
                        )
                    })}
                </div>
                <div className="nav-search-wishlist-cart flex gap-5 visible ">
                    <img src={search} alt="Search" />
                    <img src={wishlist} alt="Wishlist" />
                    <img src={cart} alt="Cart" />
                </div>
                <div className="menuButton md:hidden visible">
                    <button onClick={setMenuButtonOnClick}><p className='text-4xl mt-[-10px]'>+</p></button>
                </div>
            </div>
            <div className="mobMenu absolute top-20 left-0 hidden list-none px-10 backdrop-blur" >
                {links.map((link, index) => {
                    return (
                        <li key={index} className='py-3'><Link to={link.path}>{link.name}</Link></li>
                    )
                })}
            </div>
        </>
    )
}

export default Navbar