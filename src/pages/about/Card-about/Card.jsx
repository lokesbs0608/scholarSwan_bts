import React from 'react'
import './Card.scss'

const Card = (props) => {
  return (
    <div className='card-main'>
       <div className="card-img">
       <img src={props.imgsrc} alt="" />
       </div>
       <h6>{props.heading}</h6>
    </div>
  )
}

export default Card
