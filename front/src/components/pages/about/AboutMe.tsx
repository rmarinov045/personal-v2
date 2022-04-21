import React, { useEffect, useState } from 'react'
import Navbar from '../../Navbar'
import { CSSTransition } from 'react-transition-group'

import profileImg from '../../../assets/IMG_1308.jpg'
import ArrowLink from '../../ArrowLink'

function AboutMe() {

    const [inProp, setInProp] = useState(false)

    useEffect(() => {
        setInProp(true)
    }, [])

    return (
        <main className='h-screen w-screen flex bg-primary'>
            <Navbar />
            <CSSTransition in={inProp} timeout={200} classNames='slide' unmountOnExit={true}>
                <section id='about' className='w-full h-screen bg-primary flex'>
                    <div className='h-full w-4/5 mx-auto md:mx-0 md:w-full flex justify-center items-center md:pr-0'>
                        <div className='font-bold text-white p-2 flex flex-col gap-5 md:pl-20 w-2/3 items-center justify-center'>
                            <h1 className='md:text-4xl text-2xl text-tertiary'>About me</h1>
                                <ul className='flex list-disc md:text-base text-xs flex-col gap-5'>
                                    <li>Located in: Sofia, Bulgaria</li>
                                    <li>22 years old</li>
                                    <li>Passion to grow</li>
                                    <li>Interested in the entire front end spectrum</li>
                                    <li>Highly motivated and organized</li>
                                </ul>
                        </div>
                        <div className='md:w-1/4 w-1/2 rounded-full'>
                            <img src={profileImg} alt="profile" className='rounded-full' />
                        </div>
                        <ArrowLink path='/stack' />
                    </div>
                </section>
            </CSSTransition>
        </main>
    )
}

export default AboutMe