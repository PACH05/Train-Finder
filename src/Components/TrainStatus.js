import React from 'react'
import location from './location.png'
export default function TrainStatus() {
  return (
    <div>
      <a href='https://enquiry.indianrail.gov.in/mntes/'>
    <div className='traininfo'>
      <div className='locationimg'>
        <img src={location} height={120} width ={120}></img>
      </div>
      <br></br>
      <br></br>
      <h3>Spot Your Train</h3></div>
      </a>
    </div>
  )
}
