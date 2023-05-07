import React, { useState } from 'react'
import './style.css'

function Sidebar({sidebar}) { 
  return (
    <>
        {/* <div className='btn' onClick={handleClick}>
            <span><i className="fa-solid fa-bars" style={{color:"#fbfcfe"}}></i></span>
        </div> */}
        <nav className={sidebar?"sidebar sidebar--open":"sidebar"}>
            <div className='text'>
                HospiChain
            </div>
            <ul className='main_side'>
                <li className='active'><i class="fa-solid fa-house" style={{color:"#fbfcfe"}}></i><a href='/'>Dashbaord</a></li>
                <li className='active'><i class="fa-solid fa-notes-medical" style={{color:"#fbfcfe"}}></i><a href='/'>Health Wallet</a></li>
                <li className='active'><i class="fa-solid fa-capsules" style={{color:"#fbfcfe"}}></i><a href='/'>Medication</a></li>
                <li className='active'><i class="fa-solid fa-hospital" style={{color:"#fbfcfe"}}></i><a href='/'>Consultation</a></li>
                <li className='active'><i class="fa-solid fa-prescription-bottle-medical" style={{color:"#fbfcfe"}}></i><a href='/'>Prescription</a></li>

            </ul>
        </nav>
        <div className='content'>
            <div className='header'>
                
            </div>
        </div>
    </>
  )
}

export default Sidebar