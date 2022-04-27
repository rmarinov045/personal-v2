import React, { useState } from 'react'
import NavbarItem from './NavbarItem'
import NavbarItemSmall from './NavbarItemSmall'

import logo from '../../../assets/logo-v2.svg'

export const links = {
    home: '/',
    about: '/about',
    stack: '/stack',
    projects: '/projects',
    contact: '/contact',
}

function Navbar() {

    const [opened, setOpened] = useState(false)

    return (
        <nav className='flex flex-col max-w-[4rem] min-w-fit h-full bg-secondary pt-2'>
            <div className='hidden md:flex w-full items-center justify-center'>
                    <img src={logo} alt="logo" className='h-12 w-12' />
            </div>

            <div className='hidden md:flex h-1/2 my-auto flex-col gap-10 items-center text-tertiary'>
                {[...Object.values(links)].map(link => <NavbarItem link={link} key={link} />)}
            </div>

            <div className='flex flex-col fixed top-0 w-full min-h-[2rem] items-center md:hidden py-2 px-5 z-20'>
                <svg onClick={() => setOpened(!opened)} xmlns="http://www.w3.org/2000/svg" style={opened ? { transform: "rotate(90deg)" } : {}} className="text-tertiary self-end w-10 h-10 hover:text-light transition-all ease-in-out 150 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>


                <div style={opened ? { display: 'flex' } : { display: 'none' }} className='flex-col gap-5 relative z-20 bg-primary p-10 h-screen w-screen items-center'>

                    <div className='grid grid-cols-2 auto-cols-fr bg-secondary w-full justify-items-center p-10 gap-10'>
                        {[...Object.values(links)].map(link => <NavbarItemSmall link={link} key={link} />)}

                        <div className='items-center justify-center w-full h-20 flex'>
                            <img src={logo} alt="logo" className='h-16 w-16' />
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar