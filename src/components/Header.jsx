'use client';
import React from 'react';
import Link from 'next/link';

const Header = () => {
    const [showMenu, setShowMenu] = React.useState(false);
    const toggleMenu = showMenu ? 'block' : 'hidden';
    const handleClick = () => {
        setShowMenu(!showMenu);
    }
    
    return (
        <header className="bg-slate-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">My Website</div>
                <nav className={`flex flex-col md:flex-row  items-center justify-center space-x-4`}>
                    <Link href="/" className="text-white">Home</Link>
                    <Link href="/meals" className="text-white">Meals</Link>
                    <Link href="/about" className="text-white">About</Link>
                    <Link href="/community" className="text-white">Community</Link>
                    <Link href="/contact" className="text-white">Contact</Link>
                </nav>
                <div className="md:hidden">
                    <button className="text-white" onClick={handleClick} ><i className="fa-solid fa-bars text-white"></i></button>
                </div>
            </div>
        </header>
    );
};

export default Header;