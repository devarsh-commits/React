import React from 'react'
import './card.css'

const Card = ({title,body}) => {
  return (
    <div className='card'>
        <div className="title">{title}</div>
        <div className="body">{body}</div>
    </div>
  )
}

export default Card