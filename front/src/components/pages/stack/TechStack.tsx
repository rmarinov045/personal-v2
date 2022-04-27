import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import ArrowLink from '../../utils/ArrowLink'
import { stackIcons } from '../../utils/navbar/icons'
import Navbar from '../../utils/navbar/Navbar'

import StackIcon from './StackIcon'

function TechStack() {

    const [inProp, setInProp] = useState(false)

    useEffect(() => {
        setInProp(true)
    }, [])

    return (
        <main className='h-screen w-screen flex bg-primary'>
            <Navbar />
            <CSSTransition in={inProp} timeout={200} classNames='slide' unmountOnExit={true}>
                <section id='stack' className='w-full h-full z-0 flex flex-col gap-20 items-center justify-center p-2'>
                    <div className='font-bold text-tertiary text-4xl'>
                        <h1>Tech stack</h1>
                    </div>
                    <div className='grid auto-cols-fr grid-cols-3 justify-items-center gap-24 md:gap-10 w-3/4 h-1/2'>
                        {[...Object.values(stackIcons)].map((x, index) => <StackIcon icon={x} key={index} />)}
                    </div>
                    <ArrowLink path='/projects' />
                </section>
            </CSSTransition>
        </main>
    )
}

export default TechStack