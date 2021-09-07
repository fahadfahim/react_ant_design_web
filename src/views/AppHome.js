import React from 'react'
import About from '../component/home/About'
import ContactForm from '../component/home/ContactForm'
import Faq from '../component/home/Faq'
import Feature from '../component/home/Feature'
import Hero from '../component/home/Hero'
import Pricing from '../component/home/Pricing'
import Works from '../component/home/Works'

const AppHome = () => {
    return (
        <div className='main'>
            <Hero />
            <About />
            <Feature />
            <Works />
            <Faq />
            <Pricing />
            <ContactForm />
        </div>
    )
}

export default AppHome
