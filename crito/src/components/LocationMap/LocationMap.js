import React from 'react'
import Map from '../../assets/images/Map.svg'
import './LocationMap.css'

const LocationMap = () => {
  return (
    <div className='theMap'>
      <img src={Map} alt='Location Map'/>
    </div>
  )
}

export default LocationMap