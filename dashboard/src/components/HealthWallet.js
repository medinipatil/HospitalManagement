import React from 'react'
import HealthNote from './HealthNote'
import './HealthWallet.css'
import AddHealthWallet from './AddHealthWallet'

function HealthWallet({notes,handleHealthNote}) {
  return (
    <div className='health-list'>
        {notes.map((note)=>(
          <HealthNote 
            id={note.id} 
            text={note.text} 
            date={note.date}
          />
        ))}
        <AddHealthWallet handleHealthNote={handleHealthNote}/>
    </div>
  )
}

export default HealthWallet