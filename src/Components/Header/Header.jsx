import React from 'react'
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

import Subheader from './Sub-header'

export default function header() {
  return (
    <>
    <nav >
    <div className='w-screen flex flex-wrap gap-1 items-center justify-around font-Merriweatherblack bg-primercolor text-terhrycolor text-lg p-1'>
    <div className='flex items-center gap-2'>
          <span><CgMail/></span>
            <Link to='mailto: tigerreserveranthambhore6449@gmail.com' >tigerreserveranthambhore6449@gmail.com</Link>
    </div>
          <Link to='tel:6376336449' className='flex items-center gap-2 cursor-pointer' >
      <span><FaPhoneAlt/></span>
      <span>+91 6376336449</span> 
    </Link>
    </div>
    </nav>
    <Subheader/>
    </>
  )
}
