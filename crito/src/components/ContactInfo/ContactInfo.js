import React from 'react'
import './ContactInfo.css'
import { InfoCard } from './InfoCard'

const ContactInfo = () => {
  return (
    <div className='contactInfo'>
      <InfoCard icon ="location" title="Visit Us" p1="Sveavägen 31" p2="111 34 Stockholm"/>
      <InfoCard icon ="call" title="Call Us" p1="+46 (8) 121 470 50" p2="+46 (8) 121 470 51"/>
      <InfoCard icon="mail" title="Email Us" p1="info@crito.com" p2="support@crito.com"/>
    </div>
  )
}

export default ContactInfo