import React from 'react';
import logopng from '../../assets/gallery/gallery/logo.png'
import { Link } from 'react-router-dom';




export default function Ranthambore_Footer(handler) {
  return (
    <>
      <div className=' md:flex flex-wrap justify-around gap-5 font-Merriweather py-10 space-y-6 sm:pl-5 md:pl-20  w-full h-full  text-terhrycolor bg-primercolor'>
    {/* this is footer first div open */}
      <div className=''>
          <img className='w-20 h-20 ' src={logopng} alt='logo.png' />
          <div>
            <h1>Tiger reserve Ranthambhore India  302001</h1>
            <div className='cursor-pointer flex gap-2'>
            <span>Phone : </span>
              <Link to='tel:6376336449'>+91 6376336449</Link>
            </div>
            {/* <div className='flex gap-2'>
              <span>Alt. Phone:</span>
              <h1>0000000000</h1>
            </div> */}
            <div className='flex gap-2'>
              <span>Email:</span>
              <Link to='mailto: tigerreserveranthambhore6449@gmail.com'>tigerreserveranthambhore6449@gmail.com</Link>
            </div>
            <div>
              <span>Address : </span>
              <span>mirza mohalla, anjuman islamiya secondary school <br></br> ke pass city S,  Alanpur (Rural) Sawai Madhopur Sawai Madhopur Raj, 322021</span>
            </div>
            {/* <div className='flex  gap-3 text-3xl mt-4'>
              <div className='bg-bgblack p-1 rounded-md hover:bg-gray-800 active:bg-bgblack cursor-pointer active:scale-90' ><FaInstagram/></div>
              <div className='bg-bgblack p-1 rounded-md hover:bg-gray-800 active:bg-bgblack cursor-pointer active:scale-90' ><CiFacebook/></div>
              <div className='bg-bgblack p-1 rounded-md hover:bg-gray-800 active:bg-bgblack cursor-pointer active:scale-90' ><CiLinkedin /></div>
              <div className='bg-bgblack p-1 rounded-md hover:bg-gray-800 active:bg-bgblack cursor-pointer active:scale-90' ><FaXTwitter/></div>
            </div> */}
          </div>
      </div>
        {/* this is footer second div close*/}
        <div className=''>
          <h1 >Quick Links</h1>
          <hr className="h-px w-auto my-2 bg-gray-200 border dark:bg-terhrycolor"/>

          <div className='active:scale-95'>
            <Link className='active:text-gray-300' onClick={handler} to='/privacy'>Privacy Policy</Link>
          </div>
          <div className='active:scale-95'>
            <Link className='active:text-gray-300' onClick={handler} to='/cancellatiion'>Cancellatiion Policy</Link>
          </div>
          <div className='active:scale-95'>
            <Link className='active:text-gray-300' onClick={handler} to='/terms-&-condition'>Terms & Condition</Link>
          </div>
          <div className='active:scale-95'>
            <Link className='active:text-gray-300' onClick={handler} to='/how-to-reach'>How To Reach</Link>
          </div>
          <div className='active:scale-95'>
            <Link className='active:text-gray-300' onClick={handler} to='/about-us'>About Us</Link>
          </div>
        </div>
        {/* this is footer second div close*/}

        {/* this is footer second div open*/}
      <div>
          <h1>Useful Links</h1>
          <hr className="h-px my-2 bg-gray-200 border dark:bg-terhrycolor" />
          <div className='active:scale-95'>
            <Link className='active:text-gray-300' onClick={handler} to='/' >Home</Link>
</div>
          <div className='active:scale-95'>
            <Link className='active:text-gray-300' onClick={handler} to='/Safaribooking' >Safari Booking</Link>
</div>

      </div>

      <div>
          <h1>Additional Links</h1>
          <hr className="h-px my-2 bg-gray-200 border dark:bg-terhrycolor" />

          <div className='active:scale-95'>
            <Link className='active:text-gray-300' onClick={handler} to='/nearbyattraction'>Near By Attraction</Link>
</div>
          <div className='active:scale-95'>
            <Link className='active:text-gray-300' onClick={handler} to='/faq'>FAQ</Link>
</div>
       
<div className='active:scale-95'>
            <Link className='active:text-gray-300' onClick={handler} to='/contact'>Contact Us</Link>
</div>
          
          
      </div>
    {/* this is footer second div close*/}

    </div>
    <div className='w-full h-16  bg-secondrycolor'>
        <p className='text-center pt-5 font-semibold font-Merriweather text-terhrycolor'> © Copyright Ranthombore. All Rights Reserved </p>
    </div>
    </>
  )
}
