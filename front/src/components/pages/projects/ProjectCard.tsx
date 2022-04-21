import React from 'react'

function ProjectCard({ heading, desc, gitLink, demoLink } :{ [prop :string]: string}) {
    return (
        <div className='min-h-[20rem] flex flex-col gap-5 w-3/4 bg-secondary rounded-3xl mx-auto p-2'>
            <h1 className='font-bold text-tertiary text-xl'>{heading}</h1>
            <p className='text-xs'>{desc}</p>
            <div className='flex mx-auto gap-5 my-auto'>
                <a target='_blank' rel='noreferrer' className='text-xs p-2 bg-lighter transition-all ease-in-out 150 rounded hover:bg-light' href={gitLink}>GitHub Link</a>
                <a target='_blank' rel='noreferrer' className='text-xs p-2 bg-lighter transition-all ease-in-out 150 rounded hover:bg-light' href={demoLink}>Live Demo</a>
            </div>
        </div>
    )
}

export default ProjectCard