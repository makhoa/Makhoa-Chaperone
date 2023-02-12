import React from 'react'
import Modal from './Modal.jsx';
import { useState } from "react";

import face from '../../imgs/face.svg';
import arrow from '../../imgs/arrow.svg';
import './Sidebar.css';

export default function Sidebar () {
  const [isOpen,setIsOpen] = useState(false)
  
  return (
    <div className='Sidebar col-sm-3 col-md-6 col-lg-12'>
      {/* logo */}
      <div className='logo'>
        <img src={face} alt='Face' />

        <div className='subject'> Front-End Challenge</div>

        <div>
          <span>This is the design that you will need to code and impress us.</span>
        </div>

        
      </div>
      <div className='arrow active' >
          <img src={arrow} alt='arrow' onClick={()=> setIsOpen(true)}/>

          <Modal Open={isOpen} OnClose={()=>setIsOpen(false)}>
             Customer-Details
          </Modal>

        
      </div>
    </div>
  )
}

