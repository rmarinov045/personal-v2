import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { CSSTransition } from 'react-transition-group'

import profileImg from '../assets/IMG_1308.jpg'
import ArrorLink from './ArrorLink'

function AboutMe() {

    const [test, setTest] = useState(false)

    useEffect(() => {
        setTest(true)
    }, [])

    return (
        <main className='h-screen w-screen flex bg-primary'>
            <Navbar />
            <CSSTransition in={test} timeout={200} classNames='slide' unmountOnExit={true}>
                <section id='about' className='w-full h-screen bg-primary flex'>
                    <div className='h-full w-full flex justify-center items-center'>
                        <div className='font-bold text-white p-2 flex flex-col gap-5 pl-20 w-2/3 items-start justify-center'>
                            <h1 className='text-4xl text-tertiary'>About me</h1>
                            <p className='text-xs w-2/3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum sapiente delectus cumque doloribus consequatur tenetur molestiae harum explicabo qui accusantium rem voluptate quo repellendus, ducimus, mollitia, distinctio nesciunt. Vero, eum?
                                Tenetur nostrum sequi, quia dolores aliquam unde minima qui sed illum excepturi et nulla architecto? Expedita dolorem illo ut, quam ex voluptates officiis, possimus alias molestias rerum numquam voluptatibus! Dignissimos.
                                Inventore laborum nam accusantium magni eaque quam alias consequatur ipsam qui earum aliquid dolor sapiente, corporis, corrupti non maxime sunt officiis autem? Fugit velit est aliquam, ullam commodi quaerat vitae.
                                Eos dolore ipsam commodi saepe? Molestias cum dolorum amet quis corporis, quae quaerat! Commodi dignissimos officiis beatae placeat veritatis consectetur. Veniam magnam quasi odit iste modi alias non totam impedit.
                                Mollitia nesciunt neque vitae non voluptatibus, velit, aliquid adipisci molestias magni, minima at aspernatur distinctio blanditiis dolorum pariatur cumque tempora doloribus sequi doloremque. Assumenda omnis expedita, adipisci illo deserunt eligendi?</p>
                        </div>
                        <div className='w-1/4 rounded-full'>
                            <img src={profileImg} alt="profile" className='rounded-full' />
                        </div>
                        <ArrorLink path='/stack' />
                    </div>
                </section>
            </CSSTransition>
        </main>
    )
}

export default AboutMe