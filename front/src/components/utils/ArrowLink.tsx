import React from 'react'
import { Link } from 'react-router-dom'

function ArrowLink({ path }: { path: string }) {

    return (
        <Link className='w-2/3 min-h-[4rem] absolute bottom-1 text-white flex items-center justify-center transition ease-in-out 150 hover:text-tertiary' to={path}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
            </svg>
        </Link>
    )
}

export default ArrowLink