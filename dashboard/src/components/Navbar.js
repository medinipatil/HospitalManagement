import React from 'react'

function Navbar({openSidebar}) {
  return (
    <div className='tool-bar'>
        <div className='burger' onClick={openSidebar}>
            <i className="fa-solid fa-bars" style={{color:"#fbfcfe"}}></i>
        </div>
        <div className='title' style={{color:"#5cf4dc"}}>HospiChain</div>

    </div>
  )
}

export default Navbar