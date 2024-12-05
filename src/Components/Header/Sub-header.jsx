import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiAlignLeft } from "react-icons/fi";
import logo from '../../assets/gallery/gallery/logo.png'


export default function Subheader() {

  let [chnag, Setchange] = useState(false);

  const handler = () => {
    Setchange(!chnag)
  }


  return (
    <>
      <nav>
        <div className='w-screen flex flex-wrap gap-1 items-center justify-around font-Merriweatherblack bg-terhrycolor text-primercolor text-lg py-1 '>

          <div className='w-20 h-20'>
            <Link to='/' >
          <img className='h-full w-full' src={logo} alt='logo.png'/>
          </Link>
          </div>

          <div className='text-black text-2xl md:hidden cursor-pointer'>
            <FiAlignLeft onClick={handler} />
          </div>

          <div className={`md:flex-row md:items-center md:justify-center md:pb-0 pb-12 absolute top-[163px] sm:bg-black md:bg-terhrycolor  gap-5 active:text-secondrycolor md:static md:w-auto md:pl-0 md:z-auto sm:text-terhrycolor md:text-secondrycolor sm:z-50 sm:left-1 sm:w-[96.4%] sm:flex-col sm:flex  sm:p-4 transition-all duration-500 ease-in ${chnag ? 'scale-105 opacity-100' :
            'top-[-400px]'} md:opacity-100 opacity-0 `}>

            <Link onClick={handler}  className='active:scale-105 active:ease-in-out' to='/' >Home</Link>
            <Link onClick={handler}  className='active:scale-105 active:ease-in-out' to='/Safaribooking' >Safari booking</Link>
            {/* <Link onClick={handler} className='active:scale-105 active:ease-in-out' to='/chambalsafaribooking' >Chambal Safari Booking</Link> */}
            <Link onClick={handler} className='active:scale-105 active:ease-in-out' to='/contact' >Contact</Link>
          </div>
        </div>
      </nav>
      
    </>
  )
}


