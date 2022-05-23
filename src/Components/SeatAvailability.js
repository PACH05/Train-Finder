import React from 'react'
import seat from './seat.png'
export default function SeatAvailability() {
  return (
    <div>
    <a href='https://www.indianrail.gov.in/enquiry/SEAT/SeatAvailability.html?locale=en'>
  <div className='traininfo'>
    <div className='locationimg'>
      <img src={seat} height={120} width ={120}></img>
    </div>
    <br></br>
    <br></br>
    <h3>Seat Availability</h3></div>
    </a>
  </div>
  )
}