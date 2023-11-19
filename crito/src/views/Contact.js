import React from 'react'
import Header from '../components/Header/Header.js';
import Footer from '../components/Footer/Footer.js';
import LetsConnect from '../components/LetsConnect/LetsConnect.js';
import ContactInfo from '../components/ContactInfo/ContactInfo.js'
import Map from '../components/LocationMap/LocationMap.js'
import Form from '../components/Form/Form.js'

const Contact = () => {
  return (
    <div className="wrapper">
        <Header />
        <LetsConnect />
        <ContactInfo />
        <Form />
        <Map/>
        <Footer />
    </div>

    
  )
}

export default Contact