import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ArrowLink from '../../ArrowLink'

import { CSSTransition } from 'react-transition-group'

function Home() {

    const [inProp, setInProp] = useState(false)

    useEffect(() => {
        setInProp(true)
    }, [])

    return (
        <CSSTransition in={inProp} timeout={200} classNames='slide' unmountOnExit={true}>
        <section className='flex items-center w-full justify-evenly h-full' id='home'>
            <div className='flex my-auto flex-col gap-5 text-white font-bold text-4xl'>
                <h1 className='hover:text-tertiary transition-all ease-in-out 150'>Hi,</h1>
                <h1 className='hover:text-tertiary transition-all ease-in-out 150'>I'm Rado,</h1>
                <h1 className='text-base hover:text-tertiary transition-all ease-in-out 150'>Front End Developer</h1>
                <Link to='/contact' className='mt-5 p-2 px-3 bg-lighter rounded-sm text-center text-sm hover:bg-light transition-all 150'>Contact me</Link>
            </div>
            <div className='h-1/2 w-1/5 flex flex-col-reverse justify-end items-end'>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#6BD0FF" d="M59.6,-33.4C73.3,-10.6,77.7,18.4,66.3,38.8C54.8,59.1,27.4,70.8,2.2,69.5C-23,68.3,-46,54,-60,32.2C-74.1,10.3,-79.3,-19.2,-67.8,-40.7C-56.3,-62.2,-28.1,-75.7,-2.6,-74.2C22.9,-72.7,45.9,-56.2,59.6,-33.4Z" transform="translate(100 100)" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="md:h-32 md:w-32 h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            </div>
            <ArrowLink path={'about'} />
        </section>
        </CSSTransition>
    )
}

export default Home