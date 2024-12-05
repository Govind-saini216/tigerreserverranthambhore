import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





export default function Contact() {
  const notify = () =>{
      // e.preventDefault()
      toast("Form Submit");
 }

  const Card = [
    {
      id: 1,
      image: <MdOutlineEmail/> ,
      name: "Contact By Email",
      address: "tigerreserveranthambhore6449@gmail.com"
      
      
    }
    , {
      id: 2,
      image: <FaPhoneAlt /> ,
      name: "Contact By Phone",
      address: "+91 6376336449"
      
    }
    , {
      id: 3,
      image: <IoLocationSharp /> ,
      name: "Come To See Us",
      address: "Ranthambore National Park"

    }
  ]

  return (
        <>
      <div className='bookingimagess'>
        <div className='w-full h-[50vh]'>
          <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27444.01857602368!2d76.5413539925778!3d25.985768212538627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3971d8f668d65517%3A0x6eb9f78b60bac925!2sRanthambore%20National%20Park!5e0!3m2!1sen!2sin!4v1727777800191!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className='w-full h-auto '>
        <h1 className='text-center sm:text-xl md:text-3xl pt-7 font-bold text-terhrycolor'>Ranthombore national park contact details</h1>
                   
                   {/* contact details */}
 
          <div className=' w-full h-full z-50 py-14'>
            <div className=" flex  items-center justify-center mx-auto flex-wrap gap-y-5 gap-x-10">

              {
                Card.map((card, i) => (
                  <div key={i} className=' bg-white text-center w-[340px] h-[200px] overflow-hidden rounded-xl shadow-lg'>
                    
                    <div className="w-full pt-16 space-y-2 h-full">                     
                      <p className="text-xl pl-40 mx-auto font-bold">{card.image}</p>
                      <h1 className="text-xl text-center font-bold">{card.name}</h1>
                      <h1 className=" text-base font-normal">{card.address}</h1>
                    </div>
                  </div>
                ))
              }


            </div>

          </div>

          {/* contct form */}
          <div className='py-5'>
            <h1 className='text-center sm:text-xl md:text-3xl py-7 font-bold text-terhrycolor'>Contact 
            Form</h1>
            <form action='https://api.web3forms.com/submit' method="POST">
              <input type="hidden" name="access_key" value="6116c96a-a638-4b57-9d47-936448d4d19a" />
<div className='grid justify-center'>

              <div className=" md:mx-0 w-[400px] h-auto  space-y-5 ">
                <input className=" w-full h-8  p-7 rounded-md outline-none shadow-xl" type="text" for="name" id="name" name="name" placeholder="Name" />
                <input className=" w-full h-8 p-7 rounded-md outline-none shadow-xl" type="text" for="last_name" id="last_name" name="last_name" placeholder="Last Name" />
              </div>
              <br />
              <div className=" w-[400px]">
                <input className="w-full h-16  p-7 rounded-md outline-none shadow-xl" type="text" for="address" id="address" name="address" placeholder="Address" />
              </div> <br />
              <div className="space-x-5 w-[400px] pb-5">
                <input className="w-full h-16  p-7 rounded-md outline-none shadow-xl" type="email" for="email" id="email" name="email" placeholder="Email Address" />
              </div>
              <div>
                  <input onClick={notify} type="submit" value="Send" className="bg-primercolor w-[400px] h-10 rounded-lg shadow-2xl text-white hover:bg-gray-800 text-lg" />
              </div>
</div>
              <ToastContainer/>
            </form>
          </div>

        </div>

    </div>
        </>
  )
}
