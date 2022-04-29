import React, { KeyboardEvent, SyntheticEvent, useEffect, useState } from 'react'
import Navbar from '../../utils/navbar/Navbar'

import { CSSTransition } from 'react-transition-group'
import BarLoader from '../../utils/BarLoader'
import { sendEmail } from '../../../email'

const initialState = { email: '', message: '', firstName: '', lastName: '' }

function Contact() {

    const [inProp, setInProp] = useState(false)

    const [contactData, setContactData] = useState(initialState)

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [modalMessage, setModalMessage] = useState('')

    useEffect(() => {
        setInProp(true)
    }, [])

    async function handleSubmit(e: SyntheticEvent | KeyboardEvent) {
        e.preventDefault()
        setLoading(true)

        try {
            await sendEmail(contactData)
            setModalMessage('Thank you for contacting! Will reply back as soon as possible!')
            setSuccess(true)
            setContactData(initialState)
        } catch (err: any) {
            setModalMessage('Oooops.. Failed to send. Please try again later!')
            setSuccess(false)
        }

        setTimeout(() => {
            setLoading(false)
        }, 1800)

        setTimeout(() => {
            setModalMessage('')
        }, 3000)

        setTimeout(() => {
            document.body.scrollIntoView({ behavior: 'smooth' })
        }, 3000)
    }

    return (
        <main className='h-screen w-screen bg-primary flex'>

            <Navbar />

            {loading ? <BarLoader /> : <></>}

            <CSSTransition in={inProp} timeout={200} classNames='slide' unmountOnExit={true}>

                <section id='contact' className='w-full min-h-full md:h-full flex flex-col justify-center items-center md:overflow-y-auto'>

                    <div className='h-1/3 w-full flex items-center justify-center flex-col gap-4'>
                        <h1 className='text-2xl md:text-4xl text-tertiary'>I want to hear from YOU!</h1>
                        <p className='text-white text-center text-xs md:text-base'>Interested in all kinds of opportunities and willing to learn and improve</p>
                    </div>

                    <form onBlur={(e) => e.target.classList.contains('btn') ? handleSubmit(e) : document.body.scrollIntoView({ behavior: 'smooth' })} onSubmit={(e) => handleSubmit(e)} className='flex flex-col h-2/3 text-white text-xl gap-5 w-full lg:w-2/3'>

                        <div className='flex w-2/3 items-start mx-auto'>
                            <input onChange={(e) => setContactData(prevState => ({ ...prevState, email: e.target.value }))} value={contactData.email} className='p-2 w-full md:w-3/4 bg-secondary text-base text-white rounded outline-none border-2 border-transparent transition-all ease-in-out 350 hover:border-tertiary focus:border-tertiary' type="email" name='email' id='email' required placeholder='john@doe.com' />
                        </div>

                        <div className='flex w-2/3 items-start mx-auto gap-2'>
                            <input onChange={(e) => setContactData(prevState => ({ ...prevState, firstName: e.target.value }))} value={contactData.firstName} className='p-2 bg-secondary w-2/3 md:w-1/3 text-base text-white rounded outline-none border-2 border-transparent transition-all ease-in-out 350 hover:border-tertiary focus:border-tertiary' type="text" name='firstName' id='first-name' required placeholder='John' />
                            <input onChange={(e) => setContactData(prevState => ({ ...prevState, lastName: e.target.value }))} value={contactData.lastName} className='p-2 bg-secondary w-2/3 md:w-1/3 text-base text-white rounded outline-none border-2 border-transparent transition-all ease-in-out 350 hover:border-tertiary focus:border-tertiary' type="text" name='lastName' id='last-name' required placeholder='Doe' />
                        </div>

                        <textarea onChange={(e) => setContactData(prevState => ({ ...prevState, message: e.target.value }))} value={contactData.message} className='p-2 bg-secondary min-h-[30%] w-2/3 mx-auto text-base text-white rounded outline-none border-2 border-transparent transition-all ease-in-out 350 hover:border-tertiary focus:border-tertiary' name="message" id="message" required placeholder='Hi John,' />

                        <button disabled={loading ? true : false} style={loading ? { backgroundColor: '#1a74e2' } : {}} className='p-2 text-base bg-lighter min-w-fit w-1/5 mx-auto rounded transition-all ease-in-out 150 hover:bg-light'>{loading ? 'Sending...' : 'Send!'}</button>

                        <div className='btn w-2/3 mt-2 md:mt-10 mx-auto flex items-center justify-center transition-all ease-in-out 150'>
                            {modalMessage ? <p style={modalMessage && success ? { padding: '0.5rem', backgroundColor: '#16a34a' } : { backgroundColor: '#dc2626', padding: '0.5rem' }} className='text-base rounded'>{modalMessage}</p> : <></>}
                        </div>

                    </form>

                </section>

            </CSSTransition>

        </main>
    )
}

export default Contact