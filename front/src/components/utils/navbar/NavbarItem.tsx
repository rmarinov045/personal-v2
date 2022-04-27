import React from 'react'
import { Link } from 'react-router-dom'
import { icons } from './icons'

function NavbarItem({ link }: { link: string, svg?: any }) {

    const Svg = link === '/' ? icons['home'] : icons[link.replace('/', '')]
    
    return (
        <Link to={link} className='hover:text-light'>
            <Svg />
        </Link>
    )
}

export default NavbarItem