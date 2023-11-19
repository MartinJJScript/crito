import React from 'react'
import './InfoCard.css'
import location from '../../assets/images/icons/locationIcon.svg'
import mail from '../../assets/images/icons/mailUsIcon.svg'
import call from '../../assets/images/icons/callUsIcon.svg'

export const InfoCard = ({icon, title, p1, p2}) => {


    const choosenIcon = () => {
        switch(icon) {
            case "mail":
              return mail
              break;
            case "location":
              return location
              break;
            default:
              return call
              break;
          }
    }


  return (
    <div className='infoCard'>
       <img src={choosenIcon()} />
       <div>
        <h3>{title}</h3>
        <p>{p1}</p>
        <p>{p2}</p>
       </div>
    </div>
  )
}
