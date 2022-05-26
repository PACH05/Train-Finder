import React from 'react'
import tbs from './tbs.png'
export default function TrainBetweenStation() {
  return (
    <div>
    <a href='https://enquiry.indianrail.gov.in/mntes/q?opt=MainMenu&subOpt=tbs&excpType='>
  <div className='traininfo'>
    <div className='locationimg'>
      <img src={tbs} height={120} width ={120}></img>
    </div>
    <br></br>
    <br></br>
    <h3>Trains between Stations</h3></div>
    </a>
  </div>
  )
}

