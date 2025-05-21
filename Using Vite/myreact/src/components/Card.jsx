import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='card'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnWwWcHpya-SzuqZL8A0EDfnQPpo0Z3BQCCw&s" alt="" style={{width:280,}} />
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  )
}

export default Card
