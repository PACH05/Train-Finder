import React from 'react'
import tkt  from './train-ticket.png'
export default function PNRStatus() {
  return (
    <div>
    <a href='https://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html?locale=en'>
  <div className='traininfo'>
    <div className='locationimg'>
      <img src={tkt} height={120} width ={120}></img>
    </div>
    <br></br>
    <br></br>
    <h3>PNR Status</h3></div>
    </a>
  </div>
  )
}
