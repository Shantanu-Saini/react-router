import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className='flex items-center justify-between bg-amber-400 px-16 py-2'>
                <h1 className='font-bold text-3xl'>Logo</h1>
                <ul className='flex items-center space-x-4'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/github'>Github</Link></li>
                </ul>
                <div className='bg-blue-900 px-5 py-2 text-white'>
                    <button>Get Started</button>
                </div>
            </div>
        </>
    )
}

export default Navbar