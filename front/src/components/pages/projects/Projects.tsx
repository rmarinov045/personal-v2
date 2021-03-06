import React, { useEffect, useState } from 'react'
import Navbar from '../../utils/navbar/Navbar'

import { CSSTransition } from 'react-transition-group'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import ArrowLink from '../../utils/ArrowLink'
import ProjectCard from './ProjectCard'

export const projects = [
    {
        heading: 'First portfolio webpage',
        desc: 'This was my first completed project. Built with Vue.',
        gitLink: 'https://github.com/rmarinov045/Portfolio_website',
        demoLink: 'https://marinovme2.netlify.app/#/Home'
    },
    {
        heading: 'signUM issue tracker',
        desc: 'Issue tracker project. Built with React, Firebase, Redux and TypeScript.',
        gitLink: 'https://github.com/rmarinov045/Bug-tracker',
        demoLink: 'https://signum045.netlify.app'
    },
    {
        heading: 'r-chat',
        desc: 'Realtime chat app.',
        gitLink: 'https://github.com/rmarinov045/r-chat',
        demoLink: 'https://r-chat01.netlify.app'
    }
]

function Projects() {

    const [inProp, setInProp] = useState(false)

    useEffect(() => {
        setInProp(true)
    }, [])

    return (
        <main className='h-screen w-full flex bg-primary'>
            <Navbar />
            <CSSTransition in={inProp} timeout={200} classNames='slide' unmountOnExit={true}>
                <section id='projects' className='w-full lg:w-2/3 lg:mx-auto h-full flex flex-col gap-20 items-center justify-center px-10 p-2'>
                    <div className='font-bold text-tertiary text-4xl'>
                        <h1>Projects</h1>
                    </div>
                    <div className='w-full h-1/2 flex items-center justify-center'>
                        <Carousel className='text-white min-h-full min-w-full' showThumbs={false} infiniteLoop={false} axis='horizontal' dynamicHeight={true} centerMode={false}>
                            {projects.map(x => <ProjectCard key={x.gitLink} heading={x.heading} desc={x.desc} gitLink={x.gitLink} demoLink={x.demoLink} />)}
                        </Carousel>
                    </div>
                    <h3 className='font-bold text-tertiary text-sm hidden md:block'>..and more minor projects!</h3>
                    <ArrowLink path='/contact' />
                </section>
            </CSSTransition>
        </main>
    )
}

export default Projects