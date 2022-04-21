import React from 'react'

function StackIcon({ icon } :any) {
    return (
        <div className='bg-secondary w-32 h-32 md:w-40 md:h-40 flex items-center justify-center transform rounded-full transition-all ease-in-out 500 border-[4px] border-transparent hover:border-tertiary'>
            <img src={icon} alt="test" className='bg-secondary h-20 w-20' />
        </div>
    )
}

export default StackIcon