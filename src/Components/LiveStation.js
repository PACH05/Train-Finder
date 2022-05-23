import React from 'react'
import lstn from './lstn.png'

export default function LiveStation() {
  return (
    <div>
    <a href='https://enquiry.indianrail.gov.in/mntes/'>
  <div className='traininfo'>
    <div className='locationimg'>
      <img src={lstn} height={120} width ={120}></img>
    </div>
    <br></br>
    <br></br>
    <h3>Live Station</h3></div>
    </a>
  </div>
  )
}
