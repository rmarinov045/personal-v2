import React, { useEffect, useState } from 'react'

function BarLoader() {

    const [width, setWidth] = useState(0)

    const updateWidth = () => {
        if (width === 101) {
            setTimeout(() => {
                setWidth(0)
            }, 1000)
            return null
        }

        setInterval(() => {
            setWidth(prevState => prevState + 4)            
        }, 25)

    }

    useEffect(() => {
        updateWidth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div style={{ width: `${width}%` }} className='fixed top-0 z-10 border-b-2 transition-all ease-in-out 150 border-tertiary'></div>
    )
}

export default BarLoader