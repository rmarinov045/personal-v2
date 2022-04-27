import React from 'react'
import { Link } from 'react-router-dom'
import { icons } from './icons'

function NavbarItemSmall({ link }: { link: string }) {

    const Svg = link === '/' ? icons['home'] : icons[link.replace('/', '')]


    return (
            <Link to={link} className='w-full cursor-pointer h-20 flex items-center justify-center hover:bg-tertiary text-white focus:bg-tertiary transition-all ease-in-out 150 rounded'>
                <Svg />
            </Link>
    )
}

export default NavbarItemSmall