import logo from './logo.svg';
import React from 'react'
import { useState } from 'react';
import {nanoid} from 'nanoid';
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Notify from './components/Notify';
import HealthWallet from './components/HealthWallet';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import DoctorsConsulted from './components/DoctorsConsulted';
import LoginPage from './components/LoginPage';



function App() {
  const[sidebar,setSidebar]=useState(false);
  const toggleSidebar=()=>{
    setSidebar((prevState)=>!prevState)
  }

  const [notes, setNotes]=useState([
    {
      id: nanoid(),
      text: "Heamoglobin ",
      date: '15/04/2021',
    },
    {
      id: nanoid(),
      text: "Blood Pressure",
      date: '15/04/2021',
    },
    {
      id: nanoid(),
      text: "RBC count",
      date: '15/04/2021',
    }
]);
const addHealthNote=(text)=>{
  const date=new Date();
  const newNote={
    id: nanoid(),
    text:text,
    date: date.toLocaleDateString()
  }
  const newNotes=[...notes, newNote];
  setNotes(newNotes);
}
  return (
    <>
    <Router>
      <div>
          <Navbar openSidebar={toggleSidebar}/>
          <Sidebar sidebar={sidebar}/>
          <Routes>
            <Route exact path="/" element={
              <React.Fragment>
                  <div className='profile'>
                    <Profile/>
                  </div>
                  <div className='notify'>
                    <Notify/>
                  </div>
              </React.Fragment>
            }/>
           <Route exact path="/HealthWallet" element={
              <React.Fragment>
                  <div className='container'>
                    <HealthWallet notes={notes} handleHealthNote={addHealthNote}/>
                  </div>
              </React.Fragment>
            }/>
            <Route exact path="/Login" element={
              <React.Fragment>
                  <div className='userLogin'>
                    <LoginPage/>
                  </div>
              </React.Fragment>
            }/>
          </Routes>
      </div>
      </Router>
    </>
    
  );
}

export default App;
