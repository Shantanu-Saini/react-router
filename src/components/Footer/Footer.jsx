import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='flex items-center justify-between bottom-0 w-full bg-slate-300 px-16 py-2'>
                <h1 className='font-bold text-3xl'>Logo</h1>
                <ul className='flex flex-col items-center space-y-4'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className='bg-blue-900 px-5 py-2 text-white'>
                    <button>Get Started</button>
                </div>
            </div>
        </>
    )
}

export default Footer