import React from 'react'
import './HealthWallet.css'


function HealthNote({id,text,date}) {
  return (
    <div className='health-note'>
        <span>{text}</span>
        <div className='health-footer'>
            <small>{date}</small>
            {/* <i class="bi bi-trash3-fill" className='delete-icon' size='1.3em'></i> */}
            <i class="fa-solid fa-trash" style={{color:"#000000"}}></i>
        </div>
    </div>
  )
}

export default HealthNote