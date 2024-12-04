import React from 'react';
import img1 from '../../assets/gallery/todo/Jeep Safari (2).jpg'
import img2 from '../../assets/gallery/gallery/chamble12.jpg'
import img3 from '../../assets/gallery/gallery/5.jpg';
import img4 from '../../assets/gallery/gallery/canter.jpg'
import About_Ranthambore from './About_Ranthambore';
import { Link } from 'react-router-dom';

export default function Our_Services(handler) {


    const Card = [
        {
            id: 1,
            img: img1,
            name:"Jeep Safari Booking",
            

        }
        , {
            id: 2,
            img: img2,
            name: "Chambal Safari",

        }
        , {
            id: 3,
            img: img3,
            name: "Tour Package Booking",

        }
        , {
            id: 4,
            img: img4,
            name: "Gypse & Canter",

        }
    ]
    return (
        <>
            <div className=' w-full py-8 h-auto'>

                <div className='text-center  space-y-3 font-semibold'>
                    <h1 className='text-secondrycolor text-3xl '>Our Services</h1>
                    <h3 className='sm:text-md md:text-xl'>Services we offer in Ranthambore National Park</h3></div>

                <div className='w-full h-full z-50 mt-10'>    
                    <div className="flex  items-center justify-center mx-auto flex-wrap gap-y-5 gap-x-6">

                        {
                            Card.map((card, i) => (
                                <div key={i} className=' z-50 bg-white text-center w-[270px] h-[320px] overflow-hidden rounded-xl shadow-lg'>
                                    <img className="w-full h-[220px] rounded-t-xl object-cover hover:scale-105 duration-200 ease-in-out " src={card.img} />
                                    <div className="w-full h-full pt-2">
                                        <h1 className="text-xl mb-4 font-bold">{card.name}</h1>
                                        <Link onClick={handler} to='/Safaribooking' className=' px-3 py-2 bg-secondrycolor text-terhrycolor border border-black rounded-md font-semibold cursor-pointer active:bg-rose-700' >Book Now</Link>
                                    </div>
                                </div>
                            ))
                        }


                    </div>

                </div>

            </div>
            <About_Ranthambore/>
        </>
    )
}
