import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import Header from './Components/Header/Header.jsx';
// import Subheader from './Components/Header/Sub-header.jsx';
import Home from './Components/Header/Pages/Home.jsx';
import Contact from './Components/Header/Pages/Contact.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Safaribooking from './Components/Header/Pages/Safari_booking.jsx';
import './Components/Main-Content/About_Ranthambore.css'
import Ranthambore_Footer from './Components/Footer/Ranthambore_Footer.jsx';

// terms condition pages import section
import Cancellatiion from './Components/Footer/Quick_Links/Cancellatiion_Policy.jsx'
import TermsCondition from './Components/Footer/Quick_Links/Terms_&_Condition.jsx'
import HowToReach from './Components/Footer/Quick_Links/How_To_Reach.jsx'
import Aboutus    from  './Components/Footer/Quick_Links/About_Us.jsx' 
import NearByAttraction    from  './Components/Footer/Additional Links/Near_By_Attraction.jsx' 
import FAQ    from  './Components/Footer/Additional Links/FAQ.jsx'
import PPolicy from './Components/Footer/Quick_Links/PPolicy.jsx';



export default function App() {
  return (
    <div className='overflow-hidden'>
    {/* yeh first and second header section strt or end hy */}
      <BrowserRouter>
    {/* yeh first and second header section strt or end hy */}
    {/* isme header section k router ko defin kiya gya hy strt and end */}
       <Header/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/safaribooking' element={<Safaribooking />} />
          {/* <Route path='/chambalsafaribooking' element={<ChambalSafariBooking />} /> */}
          <Route path='/contact' element={<Contact />} />
          {/* terms and condition pages */}
          <Route path='/privacy' element={<PPolicy />} />
          <Route path='/cancellatiion' element={<Cancellatiion />} />
          <Route path='/terms-&-condition' element={<TermsCondition />} />
          <Route path='/how-to-reach' element={<HowToReach />} />
          <Route path='/about-us' element={<Aboutus />} />
          {/* additional linnks */}
          <Route path='/nearbyattraction' element={<NearByAttraction />} />
          <Route path='/faq' element={<FAQ />} />
        </Routes>
    <Ranthambore_Footer/>
      <div className='w-16 fixed right-10 bottom-5 z-50 text-white  bg-green-700 p-2 rounded-full  flex items-center justify-center'>
          <Link className='text-5xl' to="https://wa.me/+916376336449" >
          <FaWhatsapp /></Link>
      </div>
      </BrowserRouter>
    {/* isme header section k router ko defin kiya gya hy */}

    </div>
  )
}
