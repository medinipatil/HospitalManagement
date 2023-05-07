import React, { useState } from 'react'
import './HealthWallet.css'
function AddHealthWallet({handleHealthNote}) {
  const [noteText, setNoteText]=useState('');
  const handleChange=(event)=>{
      setNoteText(event.target.value);
  }
  const handleSaveClick=()=>{
    handleHealthNote(noteText);
    setNoteText('');
  }
  return (
    <div className='note new'>
        <textarea 
            rows="8" 
            cols="35"
            placeholder='Type to add a health Card'
            value={noteText}
            onChange={handleChange}
        ></textarea>
        <div className='note-footer'>
            <small>200 remaining</small>
            <button className='save' onClick={handleSaveClick}>Save</button>
        </div>
    </div>
  )
}

export default AddHealthWallet