import React from 'react'
import './Notify.css'

function Notify() {
  return (
    <>
         <div className='notify-card'>
            <div className='notify-container'>
                <h3>
                     Recent Actitvity
                </h3>
                <div className='doctorConsult-card'>
                    <div className='doctor-container'>
                        <h3>
                            Doctors Consulted
                        </h3>
                    </div>
                </div>
            </div>
            {/* <div className='doctorConsult-card'>
                <div className='doctor-container'>
                    <h3>
                        Doctors Consulted
                    </h3>
                </div>
            </div>  */}
        </div>
        {/* <div className='doctorConsult-card'>
            <div className='doctor-container'>
                <h3>
                    Doctors Consulted
                </h3>
            </div>
        </div> */}
    </>
  )
}

export default Notify