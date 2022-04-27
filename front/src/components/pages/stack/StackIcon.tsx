import React from 'react'

function StackIcon({ icon } :any) {

    const IconElement = icon

    return (
        <div className='bg-secondary w-28 h-28 md:w-40 md:h-40 flex items-center justify-center transform rounded-full transition-all ease-in-out 500 border-[4px] border-transparent hover:border-tertiary'>
            <IconElement />
        </div>
    )
}

export default StackIcon